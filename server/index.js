import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import patientRoute from './routes/patientRoute.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/patient', patientRoute)

const PORT = process.env.PORT
// const medProducts = [
//     {
//         id: 1,
//         img_src: 'https://www.shutterstock.com/image-photo/ibuprofeno-acetaminophen-pill-box-paper-260nw-2091336592.jpg',
//         name: "Paracitamol",
//         price: 100,
//         description: "For fever and headache"
//     },
//     {
//         id: 2,
//         img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-LKvQRta_rrWU8EM4JCzYycb6RK4qWm9DDg&s',
//         name: "Ibuprofen",
//         price: 1000,
//         description: "For fever and headache"
//     },
//     {
//         id: 3,
//         img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTZnZKIp37biyF7IiAUdI9yW-c9TondmTAQ&s',
//         name: "Panadol",
//         price: 200,
//         description: "For fever and headache"
//     },
//     {
//         id: 4,
//         img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlbINAdFPuvqVsE8LbHJJ5CT-eJOWlF6SYQA&s',
//         name: "Ativan",
//         price: 5000,
//         description: "For fever and headache"
//     },
//     {
//         id: 5,
//         img_src: 'https://deshabpharmacy.com/shop/wp-content/uploads/2022/09/amoxicillin-capsule-unbrand-500mg.jpg',
//         name: "Amoxillin",
//         price: 2000,
//         description: "For fever and headache"
//     },
//     {
//         id: 6,
//         img_src: 'https://m.media-amazon.com/images/I/71gWx9Jp27L.jpg',
//         name: "Advil",
//         price: 10000,
//         description: "For fever and headache"
//     },
//     {
//         id: 7,
//         img_src: 'https://t3.ftcdn.net/jpg/05/52/46/14/360_F_552461425_SztS9w0oaTzpvFK4IozNl1bXgAjXotnm.jpg',
//         name: "Tylenol",
//         price: 1000,
//         description: "For fever and headache"
//     },
//     {
//         id: 8,
//         img_src: 'https://media.premiumtimesng.com/wp-content/files/2018/05/Youth-abusing-codeine.jpg',
//         name: "Codeine",
//         price: 500,
//         description: "For fever and headache"
//     },
//     {
//         id: 9,
//         img_src: 'https://blog-images-1.pharmeasy.in/2018/02/15113805/PE_Blog2.png',
//         name: "Insulin",
//         price: 1500,
//         description: "For fever and headache"
//     },
//     {
//         id: 10,
//         img_src: 'https://c8.alamy.com/comp/DWADBW/penicillin-antibiotics-box-of-28-penicillin-vk-tablets-antibiotic-DWADBW.jpg',
//         name: "Penicillin",
//         price: 900,
//         description: "For fever and headache"
//     }
// ]


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Database connected')
})
.catch((error)=>{
    console.log('Error::', error.message)
})
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
