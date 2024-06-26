import {Schema, model} from 'mongoose';

const userSchema = new Schema ({

    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
      
    },
    avatar: {
        type:String,
        
    },
    posts: {
        type: Number,
        default: 0
    }

},{
    timestamps:true,
});

export default model("User", userSchema);