import { model, Schema } from 'mongoose';
import { IUserMethods, TUser, UserModel } from './user.interface';

const NewUserSchema = new Schema<TUser, UserModel, IUserMethods>(
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
      unique: true,
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
NewUserSchema.methods.isUserExists = async function (email: string) {
  const existingUser = await MUserModel.findOne({ email });
  return existingUser;
};
// NewUserSchema.pre('save', async function (next) {
//   const user = this; // doc

//   user.password = await bcrypt.hash(user.password);
//   next();
// });

// set '' after saving password
/*NewUserSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});
*/
// 3. Create a Model.
export const MUserModel = model<TUser, UserModel>('User', NewUserSchema);
