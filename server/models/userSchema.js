const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    tname : {
        type : String,
        required : null,
    },
    sname : {
        type : String,
        required : null,
    },
    universityCode : {
        type : String,
        required : null,
        
    },
    regNo : {
        type : String,
        required : null,
        unique : true,
    },
    rollNo : {
        type : String,
        required : null,
        unique : true,
    },
    phoneNo : {
        type : String,
        required : null,
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

// Hashing Password to Secure
/*userSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = bcryptjs.hashSync(this.password, 10)
    }
    next();
})

// Generate Tokens to verify User
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
*/
const Users = new mongoose.model("USER", userSchema);

module.exports = Users;
