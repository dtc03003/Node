const condition = true; // true이면 resolve, false이면 reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("성공");
        0;
    } else {
        reject("실패");
    }
});

promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("무조건");
    });

////////////////////////////////////

function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) => {
        if (err) {
            return console.error(err);
        }
        user.name = "zero";
        user.save((err) => {
            if (err) {
                return console.err(err);
            }
            Users.findOne({ gender: "m" }, (err, user) => {});
        });
    });
}

////////////////////////////////////

function findAndSaveUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = "zero";
            return user.save();
        })
        .then((user) => {
            return Users.findOne({ gender: "m" });
        })
        .then((user) => {})
        .catch((err) => {
            console.error(err);
        });
}
