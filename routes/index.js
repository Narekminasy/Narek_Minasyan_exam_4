import { Router } from 'express';

import usersRouter from './users.js';
import postsRouter from './posts.js';
import chatRouter  from './chat.js';

const router = Router();

router.get('/', (req, res) => {
    res.render('feed');
});

// router.get('/login', (req, res) => {
//     res.send("REGISTER ROUTE WORKS");
// });


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

// router.get('/register', (req, res) => {
//     res.send("REGISTER ROUTE WORKS");
// });



router.get('/chat', (req, res) => {
    res.render('chat');
});

router.use('/users', usersRouter);
router.use('/posts', postsRouter);
router.use('/api/chat', chatRouter);

export default router;