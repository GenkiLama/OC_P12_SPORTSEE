export default class UserActivity {
    constructor(user) {
        // Initialize the sessions property by mapping over the user's sessions
        this.sessions = user.sessions.map((session, index) => {
            return {
                kilogram: session.kilogram, // Assign the kilogram value from the session
                calories: session.calories, // Assign the calories value from the session
                day: index + 1 // Assign a day value based on the index (1-based index)
            }; 
        });
    }
}