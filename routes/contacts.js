const express = require('express');
const router = express.Router();

//@route    GET api/auth
//@desc     Get All user contacts
//@access   Private
router.get('/', (req,res) => {
    res.send('Get all contacts');
});

//@route    POST api/users
//@desc     Add new contact
//@access   Public
router.post('/', (req,res) => {
    res.send('Add contact');
});

//@route    PUT api/contacts/:id
//@desc     Update
//@access   Private
router.put('/:id', (req,res) => {
    res.send('Update Contacts');
});

//@route    DELETE api/contacts/:id
//@desc     Update
//@access   Private
router.delete('/:id', (req,res) => {
    res.send('Delete contacts');
});


module.exports = router;