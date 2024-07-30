import { model, Schema } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const NewUserSchema = new Schema<TUser, UserModel>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [20, 'Name can not be more than 20 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
// creating pre hook
NewUserSchema.pre('save', async function (next) {
  // console.log(this, 'this is pre hook');
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const ThisUser = this;
  ThisUser.password = await bcrypt.hash(
    ThisUser.password,
    Number(config.SOLT_Round),
  );
  next();
});
// creating post hook
// NewUserSchema.post('save', async function (doc, next) {
//   doc.password = '';
//   next();
// });
NewUserSchema.statics.isUserExists = async function (email: string) {
  const existUser = await MUserModel.findOne({ email });
  return existUser;
};
NewUserSchema.statics.ispasswordMatch = async function (
  currentpassword,
  hasedPassword,
) {
  return await bcrypt.compare(currentpassword, hasedPassword);
};
export const MUserModel = model<TUser, UserModel>('User', NewUserSchema);

// query middleware
// NewUserSchema.pre('find', function (next) {
//   this.find({ isdeleted :{$ne:true}});
//   next();
// });

//for statc mehod
