class User {
    constructor(dataInfo, dataActivity, dataIntensity, dataAverage) {
        this.id = dataInfo.id;
        this.firstName = dataInfo.userInfos.firstName;
        this.lastName = dataInfo.userInfos.lastName;
        this.age = dataInfo.userInfos.age;
        this.score = dataInfo.score ? dataInfo.score : dataInfo.todayScore;
        this.keyData = dataInfo.keyData;

        this.activity = dataActivity;
        this.intensity = dataIntensity.data;
        this.kind = dataIntensity.kind;
        this.average = dataAverage;
    }

    getFormattedActivity() {
        return this.activity.map((element) => ({
            day: element.day.split('-')[2].split('0')[1],
            kilogram: element.kilogram,
            calories: element.calories,
        }));
    }

    getFormattedIntensity() {
        return this.intensity.map((element) => ({
            subject: this.getTranslateKind(this.kind[element.kind]),
            value: element.value,
            fullMark: 150,
        }));
    }

    getScore() {
        return [{
            name : "score",
            value : this.score * 100,
            fill: "#FF0000"
        }]
    }

    getFormattedAverage() {
        return this.average.map((data) => {
            switch (data.day) {
                case 1:
                    return { ...data, day: 'L' };
                case 2:
                    return { ...data, day: 'M' };
                case 3:
                    return { ...data, day: 'M' };
                case 4:
                    return { ...data, day: 'J' };
                case 5:
                    return { ...data, day: 'V' };
                case 6:
                    return { ...data, day: 'S' };
                case 7:
                    return { ...data, day: 'D' };
                default:
                    return {...data };
            }
        });
    }

    getTranslateKind(kingChoice) {
        switch (kingChoice) {
            case "cardio":
                return "Cardio";
            case "energy":
                return "Energie";
            case "endurance":
                return "Endurance";
            case "strength":
                return "Force";
            case "speed":
                return "Vitesse";
            case "intensity":
                return "Intensité";
        }
    }
}

export default User;
