const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    sname : {
        type : String,
        required : true,
    },
    universityCode : {
        type : String,
        required : true,
        
    },
    regNo : {
        type : String,
        required : true,
        unique : true,
    },
    rollNo : {
        type : String,
        required : true,
        unique : true,
    },
    phoneNo : {
        type : String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true
    },
    tokens : [
        {
            token : {
                type : String,
                required : true
            }
        }
    ]

})

userSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = bcryptjs.hashSync(this.password, 10)
    }
    next();
})

userSchema.methods.generateToken = async function() {
    try {
        let generateToken = jwt.sign({_id : this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : generateToken});
        await this.save();
        return generateToken;
    } catch (error) {
        console.log(error)

    }
}

const Users = new mongoose.model("USER", userSchema);

module.exports = Users;