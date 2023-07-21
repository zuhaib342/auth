import { Schema, model, models } from "mongoose";

const UserSchema = new Schema ({
    email : {
        type :String ,
        unique : true ,
        required : [true, "Email is required"],
        match : [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , "Invalid Email address"]

    },
    fullName : {
        type : String,
        required : [true, "Full Name is Required"],
        minLength : [4 , "Full name should be atleast 4 characters"],
        maxLength : [ 30 , "Full name cannot be more than 30 characters"]
    },
    password : {
        type : String,
        required : [true , "Password is required"],
        select :false 
    },

})

const User = models.user || model("User", UserSchema);

export default User 