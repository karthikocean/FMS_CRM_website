const API_BASE_URL = import.meta.env.VITE_API_URL || "https://api.facilitycore.in/api/v1";

/**
 * Fetches the list of company packages from the API.
 * Endpoint: /package/list
 * 
 * @returns {Promise<Object>} The API response containing { data, total, page, limit }.
 */
export const getFMCompanyPackages = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/package/web-list`, {
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
    const price = apiPlan.price ?? apiPlan.planPrice ?? 0;
    const discount = apiPlan.discount ?? 0;
    const discountprice = apiPlan.discountprice ?? apiPlan.discountPrice;

    // Format price using Indian Rupee format as required
    const formatPrice = (val) => {
        if (val === null || val === undefined || isNaN(Number(val))) return "";
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: apiPlan.planCurrency || "INR",
            maximumFractionDigits: 0
        }).format(val);
    };

    const calculatedDiscountedPrice = price - (price * (discount / 100));
    const finalDiscountedPrice = discountprice != null ? discountprice : calculatedDiscountedPrice;

    // Extract limits and features
    const propertyLimit = apiPlan.propertyLimit || apiPlan.limits?.buildingsAllowed;
    const assetLimit = apiPlan.assetLimit || apiPlan.limits?.assetLimit;
    const webUser = apiPlan.webUser ?? apiPlan.limits?.clientUsersIncluded ?? 0;
    const mobileUser = apiPlan.mobileUser ?? apiPlan.limits?.employeeAppUsersIncluded ?? 0;
    const supportLevel = apiPlan.support || apiPlan.features?.supportLevel;
    const dashboardLevel = apiPlan.dashboard || apiPlan.features?.analyticsDashboard;

    const webNum = typeof webUser === "number" ? webUser : (parseInt(webUser, 10) || 0);
    const mobileNum = typeof mobileUser === "number" ? mobileUser : (parseInt(mobileUser, 10) || 0);
    const totalUsers = webNum + mobileNum;

    // Build key highlights array for frontend UI display
    const featuresList = [];
    if (propertyLimit) {
        const pNum = parseInt(propertyLimit, 10);
        featuresList.push(`${propertyLimit} ${pNum === 1 ? "Property" : "Properties"}`);
    }
    if (assetLimit) {
        featuresList.push(`${assetLimit} Assets`);
    }
    if (webNum > 0) {
        featuresList.push(`${webNum} Web ${webNum === 1 ? "User" : "Users"}`);
    }
    if (mobileNum > 0) {
        featuresList.push(`${mobileNum} Mobile ${mobileNum === 1 ? "User" : "Users"}`);
    }
    if (supportLevel) {
        featuresList.push(`${supportLevel} Support`);
    }
    if (dashboardLevel) {
        featuresList.push(`${dashboardLevel}`);
    }

    // Derive included module list based on modulesConfig flags dynamically
    const moduleIds = [];
    const modulesConfig = apiPlan.modulesConfig || {};

    Object.entries(modulesConfig).forEach(([key, config]) => {
        if (!config) return;
        // Check top-level enabled flag OR nested subModules flags
        const isEnabled = config.enabled === true ||
            (config.subModules && typeof config.subModules === "object" && Object.values(config.subModules).some(val => val === true));

        if (isEnabled) {
            moduleIds.push(key);

            // Also map sub-modules / aliases
            if (key === "assetMaintenance") {
                moduleIds.push("assetManagement");
                const sub = config.subModules || {};
                if (sub.ppmPlanner || sub.routineActivities || apiPlan.features?.ppmModule) {
                    moduleIds.push("preventiveMaintenance");
                }
                if (sub.reactiveWorkOrder || sub.ppmWorkOrder || apiPlan.features?.workOrderModule) {
                    moduleIds.push("reactiveMaintenance");
                }
            }
            if (key === "workplaceServices") {
                const sub = config.subModules || {};
                if (sub.visitor || apiPlan.features?.visitorModule) moduleIds.push("visitor");
                if (sub.parking) moduleIds.push("parking");
            }
            if (key === "service") moduleIds.push("helpdesk");
            if (key === "vendors") moduleIds.push("vendorManagement");
            if (key === "tenantMobileApp") moduleIds.push("mobileApp");
            if (key === "workflowApprovals") moduleIds.push("workflow");
        }
    });

    // Standard modules that are always present or configured implicitly
    moduleIds.push("reports", "notifications");

    const isFree = price === 0 || apiPlan.accessTrial === true;

    return {
        id: apiPlan.planId || apiPlan._id || apiPlan.id,
        name: apiPlan.planName || apiPlan.name,
        originalPrice: isFree ? "" : formatPrice(price),
        discountPercent: (discount > 0 && !isFree) ? `${discount}% OFF` : null,
        discountedPrice: isFree ? "Free" : formatPrice(finalDiscountedPrice),
        period: isFree ? "" : (apiPlan.planType === "Yearly" ? "/year" : "/month"),
        users: totalUsers > 0 ? `Up to ${totalUsers} Users` : (apiPlan.loginType || "Web + Mobile"),
        storage: modulesConfig.storage?.limit ? `${modulesConfig.storage.limit} GB Storage` : (apiPlan.limits?.storageLimit ? `${apiPlan.limits.storageLimit} GB Storage` : "5 GB Storage"),
        platform: apiPlan.loginType || "Web + Mobile",
        features: featuresList,
        buttonText: isFree ? "Start Free Trial" : "Free Trial",
        buttonType: "signup",
        buttonLink: "https://admin.facilitycore.in/register",
        moduleIds: [...new Set(moduleIds)]
    };
};
