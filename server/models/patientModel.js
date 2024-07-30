import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';




const Schema = mongoose.Schema;

const patientSchema = new Schema({
    first_name:{
        type: String,
    required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email:{
type: String,
required: true,
unique: true
    },
    password:{
        type: String,
        required: true
    },

},{timestamps: true})

//patient register or sign up

patientSchema.statics.signup = async function(first_name, last_name, email, password){
    
    if(!first_name || !last_name || !email || !password){
        throw new Error("All fields are requirecd");
    }
    if(!validator.isEmail(email)){
        throw new Error("Invalid Email")
    }
    if(!validator.isStrongPassword(password)){
        throw new Error("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character");
    }

    const exist = await this.findOne({email});
    if(exist){
        throw new Error ('Email already exists')
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const patient = this({
        first_name,
        last_name,
        email,
        password: hashedPassword
    })
    return patient.save();
}



//patient login

patientSchema.statics.login = async function (email, password){
    if(!email || !password){
        throw new Error('All fields are required')
    }

    const patient = await this.findOne({email});

    if(!patient){
        throw new Error('Invalid email')
    }

    const match = await bcrypt.compare(password, patient.password)
    if(!match){
        throw new Error('Invalid Password')
    }
    return patient.save();
}





const Patient = mongoose.model('Patient', patientSchema);

export default Patient;