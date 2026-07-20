const API_BASE_URL = import.meta.env.VITE_API_URL || "https://api.facilitycore.in/api/v1";

/**
 * Submits the contact us form data to the backend API.
 * Endpoint: /contactus/add
 * 
 * @param {Object} payload The contact us form payload containing:
 *   - fullName
 *   - email
 *   - phoneNo
 *   - countryCode
 *   - companyName
 *   - subject
 *   - message
 * @returns {Promise<Object>} The API response.
 */
export const submitContactForm = async (payload) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contactus/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Submission failed: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};
