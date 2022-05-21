const express = require('express');
const {protect,filterUser}=require('../middleware/auth')
const { postingUser,getAllUsers,getUserById,updateUser,deleteUser ,loginUser} = require('../controllers/userControllers')
const router = express.Router()
router.post("/",postingUser)
.get("/",protect, getAllUsers);
router.get("/:id",getUserById)
.put("/:id",protect,updateUser)
.delete("/:id",[protect,filterUser(['ADMIN'])],deleteUser);
router.post("/login",loginUser)
module.exports.userRoutes=router

