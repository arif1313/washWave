import express /* { Request, Response } */ from 'express';
import { StudentControlers } from './student.controler';
// import { StudentModel } from "../student.model";
const Router = express.Router();

/*async(req:Request,res:Response)=>{
    const student= req.body;
    const result = await StudentModel.create(student);
    res.status(200).json({
        success:true,
        message:"student create success",
        data:result
    })
})*/

Router.get('/', StudentControlers.getStudents);
Router.get('/:id', StudentControlers.getAsingleStudent);
Router.delete('/:id', StudentControlers.deleteAsingleStudent);
export const studentRouter = Router;
