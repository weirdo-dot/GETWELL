import Patient from "../models/patientModel.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const createToken = (_id)=>{
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: "7d"})
}



//patient register or sign up

export const signup = async (req, res) => {
  const { first_name, last_name, email, password } = req.body
  try {
    const patient = await Patient.signup(
      first_name,
      last_name,
      email,
      password
    );
    const token = createToken(patient._id)
      res.status(201).json({patient, token})
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//login patient
export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const patient = await Patient.login(email, password)
    const token = createToken(patient._id)
    res.status(200).json({ message: 'login successful', email, token});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
