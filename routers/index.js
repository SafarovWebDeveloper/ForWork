const { Router } = require('express');
const router = Router();

router.get('/', (req,res)=>{
    res.render('index');
})
router.get('/lessons', (req,res)=>{
    res.send('lessons');
})

module.exports = router;
