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

const user = mongoose.model("user", userSchema)