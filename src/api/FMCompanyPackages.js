const API_BASE_URL = import.meta.env.VITE_API_URL || "https://api.facilitycore.in/api/v1";

/**
 * Fetches the list of company packages from the API.
 * Endpoint: /package/list
 * 
 * @returns {Promise<Object>} The API response containing { data, total, page, limit }.
 */
export const getFMCompanyPackages = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/package/list`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch packages: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching FM company packages:", error);
        throw error;
    }
};

/**
 * Maps a plan object from the backend API structure to the structure required by the frontend UI.
 * 
 * @param {Object} apiPlan The raw plan object from the database API.
 * @returns {Object} Formatted plan object matching the frontend pricing data structure.
 */
export const mapApiPlanToUiPlan = (apiPlan) => {
    const price = apiPlan.planPrice || 0;
    const discount = apiPlan.discount || 0;

    // Format price using Indian Rupee format as required
    const formatPrice = (val) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(val);
    };

    const discountedPriceVal = price - (price * (discount / 100));

    // Extract limits and features
    const limits = apiPlan.limits || {};
    const feat = apiPlan.features || {};

    // Build key highlights array for frontend UI display
    const featuresList = [];
    if (limits.buildingsAllowed) {
        featuresList.push(`${limits.buildingsAllowed} ${limits.buildingsAllowed === 1 ? "Property" : "Properties"}`);
    }
    if (limits.assetLimit) {
        featuresList.push(`${limits.assetLimit} Assets`);
    }
    if (limits.clientUsersIncluded) {
        featuresList.push(`${limits.clientUsersIncluded} Web Users`);
    }
    if (limits.employeeAppUsersIncluded) {
        featuresList.push(`${limits.employeeAppUsersIncluded} Mobile Users`);
    }
    if (feat.supportLevel) {
        featuresList.push(`${feat.supportLevel} Support`);
    }
    if (feat.analyticsDashboard) {
        featuresList.push(`${feat.analyticsDashboard} Analytics`);
    }

    // Derive included module list based on modulesConfig flags
    const moduleIds = [];
    const modulesConfig = apiPlan.modulesConfig || {};

    if (modulesConfig.dashboard?.enabled) moduleIds.push("dashboard");
    if (modulesConfig.businessSuite?.enabled) moduleIds.push("businessSuite");

    if (modulesConfig.assetMaintenance?.enabled) {
        moduleIds.push("assetManagement");
        if (modulesConfig.assetMaintenance.subModules?.ppmPlanner || feat.ppmModule) {
            moduleIds.push("preventiveMaintenance");
        }
        if (modulesConfig.assetMaintenance.subModules?.reactiveWorkOrder || feat.workOrderModule) {
            moduleIds.push("reactiveMaintenance");
        }
    }

    if (modulesConfig.vendors?.enabled || feat.vendorManagementModule) moduleIds.push("vendorManagement");
    if (modulesConfig.compliance?.enabled) moduleIds.push("compliance");
    if (modulesConfig.attendance?.enabled || feat.attendanceModule) moduleIds.push("attendance");

    if (modulesConfig.workplaceServices?.enabled) {
        if (modulesConfig.workplaceServices.subModules?.visitor || feat.visitorModule) {
            moduleIds.push("visitor");
        }
        if (modulesConfig.workplaceServices.subModules?.parking) {
            moduleIds.push("parking");
        }
    }

    if (modulesConfig.crm?.enabled) moduleIds.push("crm");
    if (modulesConfig.workflowApprovals?.enabled) moduleIds.push("workflow");
    if (modulesConfig.tenantMobileApp?.enabled) moduleIds.push("mobileApp");

    // Standard modules that are always present or configured implicitly
    moduleIds.push("helpdesk", "reports", "notifications");

    const webUsers = limits.clientUsersIncluded || 0;
    const mobileUsers = limits.employeeAppUsersIncluded || 0;
    const totalUsers = typeof webUsers === "number" && typeof mobileUsers === "number"
        ? webUsers + mobileUsers
        : null;

    const isFree = price === 0 || apiPlan.accessTrial === true;

    return {
        id: apiPlan._id,
        name: apiPlan.planName,
        originalPrice: isFree ? "" : formatPrice(price),
        discountPercent: (discount > 0 && !isFree) ? `${discount}% OFF` : null,
        discountedPrice: isFree ? "Free" : formatPrice(discountedPriceVal),
        period: isFree ? "" : (apiPlan.planType === "Monthly" ? "/month" : "/year"),
        users: totalUsers ? `Up to ${totalUsers} Users` : "Custom Users",
        storage: limits.storageLimit ? `${limits.storageLimit} GB Storage` : "Basic Storage",
        platform: apiPlan.loginType || "Web + Mobile",
        features: featuresList,
        buttonText: isFree ? "Start Free Trial" : "Free Trial",
        buttonType: "signup",
        buttonLink: "https://admin.facilitycore.in/register",
        moduleIds: [...new Set(moduleIds)]
    };
};
