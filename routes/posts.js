import { Router } from 'express';
import upload from '../middlewares/upload.js';
import authorization from '../middlewares/authorization.js';
import schemas from '../middlewares/schemas/posts.schema.js';
import validation from '../middlewares/validation.js';
import controller from '../controllers/posts.js'

//
const router = Router();


//router
router.get('/', controller.feed);


//[posts
router.post(
    '/',
    authorization,
    upload.single('image'),
    validation(schemas.create),
    controller.create
);

router.post(
    '/:id/like',
    authorization,
    controller.like
);

// router.post(
//     '/:id/like',
//     controller.like
// );

router.post(
    '/:id/comment',
    authorization,
    validation(schemas.comment),
    controller.comment
);

export default router;