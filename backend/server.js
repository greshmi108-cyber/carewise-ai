const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./models/User")
const bcrypt = require("bcrypt")
const app = express()
mongoose.connect("mongodb://127.0.0.1:27017/carewise")

.then(() => {

  console.log("MongoDB Connected 😭🔥")

})
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {

  res.send("Backend Running 😭🔥")

})
app.get("/login", (req, res) => {

  res.send("Login API Working 😭🔥")


})
// login ka 
app.post("/login", async (req, res) => {

  const { email, password } = req.body

  const user = await User.findOne({

    email

  })

  if(user){

    const isMatch = await bcrypt.compare(password, user.password)

    if(isMatch){

      return res.send("Login Successful 😭🔥")

    }

  }

  res.send("Invalid Credentials 😭")

})
// signup ka
app.post("/signup", async (req, res) => {
console.log(req.body)

  const { email, password } = req.body

const existingUser = await User.findOne({

  email

})
if(existingUser){

  return res.send("User already exists 😭")

}
  const hashedPassword = await bcrypt.hash(password, 10)

const newUser = new User({

  email,

  password: hashedPassword

})
  await newUser.save()

  res.send("User Saved 😭🔥")

})

app.listen(5000, () => {

  console.log("Server Started on Port 5000")

})