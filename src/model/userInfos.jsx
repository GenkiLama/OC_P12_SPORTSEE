export default class UserInfos {
    constructor(user) {
        this.lastName = user.userInfos.lastName;
        this.firstName = user.userInfos.firstName;
        this.score = user.todayScore ? user.todayScore : user.score;
        this.age = user.userInfos.age;
        this.calorieCount = user.keyData.calorieCount.toLocaleString('en-US');
        this.carbohydrateCount = user.keyData.carbohydrateCount;
        this.proteinCount = user.keyData.proteinCount;
        this.lipidCount = user.keyData.lipidCount;
    }
}