
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { loginValidate, registerValidate} = require('./validate')

const userController = {
    register: async function (req, res){

        const {error} = registerValidate(req.body)
        if (error){res.status(400).send(error.message)}
        
        const selectedUser = await User.findOne({email:req.body.email})

        if (selectedUser) return res.status(400).send('email already exist')

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
        })
        try {
            const savedUser = await user.save()
            res.send(savedUser)
        } catch (error) {
            res.send(error)
        }
    },

    login: async function (req, res){

        const {error} = loginValidate(req.body)
        if (error){res.status(400).send(error.message)}

        const selectedUser = await User.findOne({email:req.body.email})
        if (!selectedUser) return res.status(400).send('email or password incorrect')
        
        const passWordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password)
        if (!passWordAndUserMatch) return res.status(400).send('email or password incorrect')
        
        const token = jwt.sign({_id: selectedUser._id, admin: selectedUser.admin}, process.env.TOKEN_SECRET)

        res.header('authorization-token', token)
        res.send("user Logged")

    }
}

module.exports = userController