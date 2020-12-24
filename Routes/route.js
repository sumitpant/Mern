const express=require('express');
const handler=require('../controller/handler')
const router =express.Router();

router.post('/main',handler.login)
router.get('/fetch',handler.fetchlist);
router.get('/fetch/:id',handler.fetchone);
//updating
router.post('/update',handler.update)
//posting new user
router.post('/user',handler.add_new);

router.get('/delete/:id',handler.deleteUser)



module.exports=router;