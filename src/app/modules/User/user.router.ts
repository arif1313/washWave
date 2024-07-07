import express /* { Request, Response } */ from 'express';
import { UserControlers } from './user.controler';

// import { StudentModel } from "../student.model";
const Router = express.Router();

Router.post('/create-student', UserControlers.createAstudent);

/*async(req:Request,res:Response)=>{
    const student= req.body;
    const result = await StudentModel.create(student);
    res.status(200).json({
        success:true,
        message:"student create success",
        data:result
    })
})*/

export const userRouter = Router;
