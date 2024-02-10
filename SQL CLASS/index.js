const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connetion = mysql.createrConnection({
    host:'localhost',
    user:'root',
    database:'test',
    password:'aR123#1234'
});

let getRandomUser = () =>   {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password()
  };
}

console.log(getRandomUser());