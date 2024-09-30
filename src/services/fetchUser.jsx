export const fetchUser = async (userSelected) => {
    try {
        const response = await fetch(`http://192.168.1.111:3000/user/${userSelected}`, {
            method: "GET"
        })

        let data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Erreur UserInfo', error);
    }

    // // User Activity
    // fetch(`http://192.168.1.111:3000/user/${userSelected}/activity`, {
    //     method: "GET"
    // })
    //     .then((responseAc) => response.json())
    //     .then((dataActivity) => {
    //         activity = (dataInfo.data);
    //     })
    //
    // console.log(userInfo, activity)

    // const user = new User();
}

