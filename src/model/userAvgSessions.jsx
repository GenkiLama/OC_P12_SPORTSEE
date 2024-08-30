export default class UserAvgSessions {
    constructor(user) {
        // Initialize the sessions property with the user's sessions data
        this.sessions = user.sessions;
    }

    getSessions() {
        // Array representing the days of the week in abbreviated form
        const days = ["L", "M", "M", "J", "V", "S", "D"];
        
        // Map over the sessions to transform the data
        this.sessions = this.sessions.map((session, index) => {
            return {
                day: days[index], // Assign the corresponding day abbreviation based on the index
                session: session.sessionLength // Assign the session length from the session data
            };
        });

        // Return the transformed sessions data
        return this.sessions;
    }
}