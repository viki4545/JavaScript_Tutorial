//Nested destructuring

const users = [
    {user_id: 1,firstName: "harshit", gender: "male"},
    {user_id: 2,firstName: "mohit", gender: "male"},
    {user_id: 3,firstName: "nitish", gender: "male"}
];

// const [user1,user2,user3] = users;
const [{user_id: user1UserId, firstName: user1firstName}, , {gender: user3gender}] = users;
console.log(user1firstName);
console.log(user1UserId);
console.log(user3gender);