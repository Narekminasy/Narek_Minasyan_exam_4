import {Router} from "express";
import indexPages from '../routes/index.js';

//import auth from "../middleware/auth.js";


const router = Router();

router.use('/', indexPages);



export default router;