import {fetchUser} from "./api/fetchUser.jsx";
import {fetchUserActivity} from "./api/fetchUserActivity.jsx";
import {fetchUserIntensity} from "./api/fetchUserIntensity.jsx";
import {fetchUserAverage} from "./api/fetchUserAverage.jsx";
import User from "../class/User.jsx";

export const makeUser = async (userSelected) => {
    const dataInfo = await fetchUser(userSelected);
    const dataActivity = await fetchUserActivity(userSelected);
    const dataIntensity = await fetchUserIntensity(userSelected);
    const dataAverage = await fetchUserAverage(userSelected);

    const user = new User(dataInfo, dataActivity, dataIntensity, dataAverage);

    return user;
}
