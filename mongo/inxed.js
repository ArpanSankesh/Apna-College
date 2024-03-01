const mongoose = require('mongoose');

main().then((res) => {
    console.log("connetion successful");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    user: String, 
    email:String,
    age: Number 
});

const user = mongoose.model("user", userSchema);

const user1 = new user({
    name:"Adam",
    email:"adam@gmail.com",
    age:"18"
})

user1.save().then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});