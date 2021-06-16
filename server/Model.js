//import axios from 'axios'
const { User } = require('./User')
// const app = express()
// const express = require('express');
// const router = express.Router();

// router.get('/getWritingsAll',(req, res)=>{
//     User.find()
//         .populate('writer')
//         .exec((err,writings)=>{
//             if (err) return res.status(400).send(err);
//             res.status(200).json({success: true, writings})
//         })
// })
// var rts = "/api/writing/getWritings" + Category
// axios.get(rts)
// .then(response => {
//     if (response.data.success) {
//         setWritings(response.data.writings)
//     } else {
//         alert('Failed to get Writings')
//     }
// })

class Model {
    
    constructor(){
        this.users = [
        ]
    }

    add () {
    }

    remove (idx) {
    }
    
    getAll () {
        // User.find().
        //     populate('name')
        //     .exec((err, users)=>{
        //         this.users = users
        //     }) // users?
    }
}
    
export default Model