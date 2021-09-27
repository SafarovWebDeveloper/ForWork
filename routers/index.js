const { Router } = require('express');
const Schema = require('../model/sChema');
const commentSchema = require('../model/commentSchema');


const router = Router();

router.get('/', (req,res)=>{
    res.render('index.pug', {
        title: 'SafarovWebDeveloper'
    });
})
router.get('/lessons', (req,res)=>{
    res.render('lessons', {
        title: 'All Lessons'
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
    res.render('register', {
        title: 'Register',
        page:'Register',
        button:"Ro'yxatdan o'tish"
    });
})
router.get('/login', (req,res)=>{
    res.render('login.pug', {
        title: 'Login ',
        page:'Login',
        button:"Kirish"
    });
})
router.get('/users', (req,res)=>{
    Schema.find({}, (err,data)=>{
        if (err) {
            console.log(err);
        } else {
            res.render('user', {
                title: 'Users',
                datas: data,
            });
        };
    })
    
})

router.get('/delete/:id', (req, res) => {
    Schema.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/users')
        } else {
            console.log(`ERROR BOLDI`+ err);
        };
    });
});

router.post('/product/:id', (req, res) => {
    const updateDb = {};

    console.log(req.body)

    updateDb.title = req.body.title,
        updateDb.full_name = req.body.full_name,
        updateDb.email = req.body.email,
        updateDb.password = req.body.password
    const updateId = { _id: req.params.id };

    Schema.update(updateId, updateDb, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/users');
        };
    });
});

// REGISTER 
router.post('/login', (req,res)=>{
    console.log(req.body);
})
router.post('/register', (req, res) => {
    console.log(req.body);

    const register = new Schema({
        full_name: req.body.full_name,
        email: req.body.email,
        password: req.body.password
        // password2: req.body.password2
    });

    register.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(data);
            res.redirect('/users');
        };
    });
});

// COMMENT
router.post('/BexruzXolmominov', (req, res) => {
    console.log(req.body);

    const writeComment = new commentSchema({
        comment: req.body.comment
    });

    writeComment.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(data);
            res.redirect('/BexruzXolmominov');
        };
    });
});
router.get('/BexruzXolmominov', (req,res)=>{
    res.render('BexruzXolmominov.pug', {
        title: 'BexruzXolmominov '
    });

    writeComment.find({}, (err,data)=>{
        if (err) {
            console.log(err);
        } else {
            res.render('BexruzXolmominov', {
                title: 'BexruzXolmominov',
                datas: data
            });
        };
        console.log(data);
    })
    
})


module.exports = router;