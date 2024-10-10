export const fetchUserIntensity = async (userSelected) => {
    try {
        const response = await fetch(`http://192.168.1.111:3000/user/${userSelected}/performance`, {
            method: "GET"
        })

        let data = await response.json();

        return data.data;
    } catch (error) {
        console.error('Erreur UserInfo', error);
    }
};
