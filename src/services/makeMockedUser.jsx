import User from "../class/User.jsx";
import {fetchMockUser} from "./mock/fetchMockUser.jsx";
import {fetchMockUserActivity} from "./mock/fetchMockUserActivity.jsx";
import {fetchMockUserAverage} from "./mock/fetchMockUserAverage.jsx";
import {fetchMockUserIntensity} from "./mock/fetchMockUserIntensity.jsx";

/**
 * @returns {object} Response
 * @param {string} userSelected
 */
export const makeMockedUser = async (userSelected) => {
    const dataInfo = await fetchMockUser(userSelected);
    const dataActivity = await fetchMockUserActivity(userSelected);
    const dataIntensity = await fetchMockUserIntensity(userSelected);
    const dataAverage = await fetchMockUserAverage(userSelected);

    const user = new User(dataInfo, dataActivity, dataIntensity, dataAverage);

    return user;
}
