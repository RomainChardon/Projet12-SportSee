export const fetchMockUser = async (userSelected) => {
    try {
        const response = await fetch(`/mock/${userSelected}/user.json`, {
            method: "GET"
        })

        let data = await response.json();

        return data.data;
    } catch (error) {
        console.error('Erreur UserInfo', error);
    }
}

