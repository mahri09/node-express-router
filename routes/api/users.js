const express  = require('express')
const users = require("../../usersData");
const router = express.Router()
const uuid = require('uuid');



router.get('/', (req, res)=>{
  res.json(users)
})

router.get('/:id', (req, res)=>{
  // console.log(parseInt(req.params.id))
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (!user){
    res.status(404).send('User not found for given id')
  }else {
    res.json(user);
    };
});

router.post('/',(req, res)=>{
  const newUser = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
  };

  if (!newUser.name || !newUser.email) {
    return res.sendStatus(400);
  }

  users.push(newUser);
  res.json(users)

})

router.put('/:id', (req, res)=>{
  //you can use filter it put your user to an array
  const foundUser = users.find(user => user.id === parseInt(req.params.id));
 
  if (foundUser) {    
    users.forEach((user) => {
      if (user.id === parseInt(req.params.id)) {
        foundUser.name = req.body.name ? updateUser.name : foundUser.name;

        foundUser.email = req.body.email ? updateUser.email : foundUser.email;

        res.json({ msg: "User updated", user });
      }
    });

  } else {
    res.sendStatus(400);
  }
})

router.delete('/:id', (req, res)=>{
  const user = users.find(user => user.id === parseInt(req.params.id));
  res.json({messageusers: "deleted user", user});

})






module.exports = router;