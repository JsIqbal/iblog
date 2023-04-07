const user = new Map([
    ["username", "Iqbal"],
    ["location", "dhaka"],
]);

user.set("number", "1234567");

const getUser = user.get("username");

console.log(getUser);
