import express from 'express';
import { createNewUser , updateUser , getUserById , getUserByEmail ,checkOrCreateUser} from '../controler/userController.js';

const userRouter = express.Router();

userRouter.post('/create', createNewUser);
userRouter.post('/check-or-create',checkOrCreateUser);
userRouter.post('/get-user-by-email',getUserByEmail);

userRouter.put('/update/:id', updateUser);
userRouter.get('/:id', getUserById);

export default userRouter;
