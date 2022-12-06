module.exports = class User {

    getAllUsers() {
        const allUsers = {
            1: {
                email: 'info@marcovaleri.net',
                password: 'Silver09'
            },
            2: {
                email: 'user2@gmail.com',
                password: 'Password2'
            },
            3: {
                email: 'user3@gmail.com',
                password: 'Password3'
            }
        };

        return allUsers;
    }

    isValidUser(email, password) {

        // Get all users
        const allValidUsers = this.getAllUsers();

        /**
         * Create a boolean variable
         * that determins if the
         * user has been found (TRUE)
         */
        let doesUserExist = false;

        for (const user in allValidUsers) {
            if (allValidUsers[user].email === email && allValidUsers[user].password === password) {
                doesUserExist = true;
            }
        }

        // return allValidUsers;
        return doesUserExist;

    }

}
