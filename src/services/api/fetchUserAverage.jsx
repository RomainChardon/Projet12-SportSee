/**
 * @returns {object} Response
 * @param {string} userSelected
 */
export const fetchUserAverage = async (userSelected) => {
    try {
        const response = await fetch(`http://192.168.1.111:3000/user/${userSelected}/average-sessions`, {
            method: "GET"
        })

        let data = await response.json();

        return data.data.sessions;
    } catch (error) {
        console.error('Erreur UserInfo', error);
    }
};
