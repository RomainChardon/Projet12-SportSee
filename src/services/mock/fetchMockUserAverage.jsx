/**
 * @returns {object} Response
 * @param {string} userSelected
 */
export const fetchMockUserAverage = async (userSelected) => {
    try {
        const response = await fetch(`/mock/${userSelected}/userAverage.json`, {
            method: "GET"
        })

        let data = await response.json();

        return data.data.sessions;
    } catch (error) {
        console.error('Erreur UserInfo', error);
    }
};
