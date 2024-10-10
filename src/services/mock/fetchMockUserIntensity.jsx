/**
 * @returns {object} Response
 * @param {string} userSelected
 */
export const fetchMockUserIntensity = async (userSelected) => {
    try {
        const response = await fetch(`/mock/${userSelected}/userIntensity.json`, {
            method: "GET"
        })

        let data = await response.json();

        return data.data;
    } catch (error) {
        console.error('Erreur UserInfo', error);
    }
};
