// objects inside array
// very useful in real world applications

const users = [
    {user_id: 1,firstName: "harshit", gender: "male"},
    {user_id: 2,firstName: "mohit", gender: "male"},
    {user_id: 3,firstName: "nitish", gender: "male"}
];
// for (let index = 0; index < users.length; index++) {
//     console.log(users[index]);
// }

for(let user of users){
    console.log(user.firstName);
}