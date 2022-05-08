const express = require ('express')
const router = express.Router()
const user = require('../models/user')


// get 


router.get('/users',(req,res)=>{
    user.find()
    .then(users=>res.status(200).json(users))
    .catch(err=> res.send(err))
  })
  
  
  //post 
  
  
  router.post("/users", (req, res) => {
    const newUser = new user({ ...req.body })
    newUser.save()
        .then(user => res.status(200).json(user))
        .catch(err => console.log(err))
  })
  
  //PUT 
  router.put("/users/:id", (req, res) => {
    let { id } = req.params
    user.findByIdAndUpdate({ id }, { $set: { ...req.body } })
        .then(() => res.send("User has been updated"))
        .catch(err => res.send(err))
  })
  
  //DELETE 
  router.delete("/users/:id", (req, res) => {
    let { id } = req.params
    user.findByIdAndDelete({ id })
        .then(() => res.send("User has been deleted"))
        .catch(err => res.send(err))
  })





module.exports = router 