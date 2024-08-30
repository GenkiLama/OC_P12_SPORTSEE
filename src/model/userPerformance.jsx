export default class UserPerformance {
    constructor(user) {
        this.data = user.data;
        this.kind = user.kind;
    }

    getPerformance() {
        const translate = {
            1: "Cardio",
            2: "Energie",
            3: "Endurance",
            4: "Force",
            5: "Vitesse",
            6: "Intensité",
        }

        const translatedData = this.data.map(performance => {
            return {
                kind: translate[performance.kind],
                value: performance.value
            }
        });

        const order = ["Vitesse", "Force", "Endurance", "Energie", "Cardio", "Intensité"];

        this.data = translatedData.sort((a, b) => order.indexOf(a.kind) - order.indexOf(b.kind));
            
        return this.data;
    }
}
