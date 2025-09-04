const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email : {
        type : String,
        required : true
    }
})

userSchema.plugin(passportLocalMongoose);  // username hashing salting and hashpass
                                    // apne aap krdeta set

module.exports = mongoose.model("User", userSchema);
