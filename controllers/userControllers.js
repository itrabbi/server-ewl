const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require("../models/userModel")
const HttpError = require("../models/errorModel")








// =================== REGISTER A NEW USER
// POST : api/users/register
// UNPROTECTED
const registerUser = async (req, res, next) => {
    try {
        const { name, email, password, password2 } = req.body;
        if (!name || !email || !password) {
            return next(new HttpError("Fill in all fields.", 422))
        }

        const newEmail = email.toLowerCase()

        const emailExists = await User.findOne({ email: newEmail })
        if (emailExists) {
            return next(new HttpError("Email already exists.", 422))
        }

        if ((password.trim()).length < 6) {
            return next(new HttpError("Password should be at least 6 characters.", 422))
        }

        if (password != password2) {
            return next(new HttpError("Password do not match.", 422))
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt)
        const newUser = await User.create({ name, email: newEmail, password: hashedPass })
        res.status(201).json(`New User ${newUser.email} registered.`)
    }
    catch (error) {
        return next(new HttpError("User registration failed", 422))
    }
}












// =================== LOGIN A REGISTERED USER
// POST : api/users/login
// UNPROTECTED
const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new HttpError("Fill in all fields.", 422))
        }
        const newEmail = email.toLowerCase();
        const user = await User.findOne({ email: newEmail })
        if (!user) {
            return next(new HttpError("Invalid credentials.", 422))
        }
        const comparePass = await bcrypt.compare(password, user.password)
        if (!comparePass) {
            return next(new HttpError("Invalid credentials.", 422))
        }
        const { _id: id, name } = user;
        const token = jwt.sign({ id, name }, process.env.JWT_SCERET, { expiresIn: "1d" })

        res.status(200).json({ token, id, name })
    } catch (error) {
        return next(new HttpError("Login failed. Please check your credentials.", 422))
    }
}













// =================== USER PROFILE
// POST : api/users/:id
// PROTECTED
const getUser = async (req, res, next) => {
    res.json("User Profile")
}












// =================== CHANGE USER AVATAR (profile  picture)
// POST : api/users/change-avatar
// PROTECTED
const changeAvatar = async (req, res, next) => {
    res.json("Change user avatar")
}















// =================== EDIT USER DETAILS (from profile)
// POST : api/users/edit-user
// PROTECTED
const editUser = async (req, res, next) => {
    res.json("Edit user deatails")
}













// =================== GET AUTHORS
// POST : api/users/authors
// UNPROTECTED
const getAuthors = async (req, res, next) => {
    res.json("Get all user/authors")
}










module.exports = { registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors }