const { Router } = require('express');
const router = Router();

router.get('/', (req,res)=>{
    res.render('index.pug', {
        title: 'SafarovWebDeveloper'
    });
})
router.get('/lessons', (req,res)=>{
    res.render('lessons.pug', {
        title: 'Lessons'
    });
})
router.get('/blogs', (req,res)=>{
    res.render('blogs.pug', {
        title: 'Blogs'
    });
})
router.get('/teachers', (req,res)=>{
    res.render('teachers.pug', {
        title: 'Teachers'
    });
})
router.get('/register', (req,res)=>{
    res.render('register.pug', {
        title: 'Login | Register'
    });
})


module.exports = router;
