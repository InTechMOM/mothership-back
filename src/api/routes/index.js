import { Router } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import swaggerSpecification from "../../config/swagger.js";



import {
  validateCreation,
  validatePatch,
}  from './validation/post.js'

import {  
  getByName,
} from './controllers/get.js';

import {
  createUser, 
} 
from './controllers/post.js'
import editUser from './controllers/patch.js';
import deleteOne from './controllers/delete.js'


const router = Router();

routergit 
  .post('/user', validateCreation, createUser)
  .get('/user',getByName)
  .patch('/user/:id', validatePatch, editUser)
  .delete('/user/:id', validateCreation, deleteOne)

router.use("/docs", serve);
router.get("/docs", setup(swaggerJsdoc(swaggerSpecification)));

export default router;
