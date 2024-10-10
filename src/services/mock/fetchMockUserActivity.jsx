
export const fetchMockUserActivity = async (userSelected) => {
    try {
        const response = await fetch(`/mock/${userSelected}/userActivity.json`, {
            method: "GET"
        })

        let data = await response.json();

        return data.data.sessions;
    } catch (error) {
        console.error('Erreur UserInfo', error);
    }
};
