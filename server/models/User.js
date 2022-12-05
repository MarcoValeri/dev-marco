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

        for (const user in allValidUsers) {
            console.log(user);
            console.log(allValidUsers[user].email);
            console.log(allValidUsers[user].password);

            if (allValidUsers[user].email === email && allValidUsers[user].password === password) {
                console.log(`TRUE`);
            } else {
                console.log(`FALSE`);
            }
        }

        // for (const user in allValidUsers) {
            // console.log(`ID: ${user}`);
            // for (const userData in user) {
            //     console.log(`Email: ${userData.email}`);
            //     console.log(`Password: ${userData.password}`);
            // }
        // }

        // return allValidUsers;
        return typeof allValidUsers;

    }

}
