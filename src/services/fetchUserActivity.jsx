
export const fetchUserActivity = async (userSelected) => {
    try {
        const response = await fetch(`http://192.168.1.111:3000/user/${userSelected}/activity`, {
            method: "GET"
        })

        let data = await response.json();

        return data.data.sessions;
    } catch (error) {
        console.error('Erreur UserInfo', error);
    }
};
