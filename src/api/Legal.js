const API_BASE_URL = import.meta.env.VITE_API_URL || "https://api.facilitycore.in/api/v1";

/**
 * Fetches the Legal Terms & Conditions document from the API.
 * Endpoint: /legal/terms
 */
export const getTermsAndConditions = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/legal/terms`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch terms: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        return result?.data || result;
    } catch (error) {
        console.error("Error fetching Terms & Conditions:", error);
        throw error;
    }
};

/**
 * Fetches the Legal Privacy Policy document from the API.
 * Endpoint: /legal/privacy
 */
export const getPrivacyPolicy = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/legal/privacy`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch privacy policy: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        return result?.data || result;
    } catch (error) {
        console.error("Error fetching Privacy Policy:", error);
        throw error;
    }
};
