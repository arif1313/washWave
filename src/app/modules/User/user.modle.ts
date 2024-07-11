import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

const NewUserSchema = new Schema<TUser>(
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
/*NewUserSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
   // Number(config.bcrypt_salt_rounds),
  );
  next();
});
*/
// set '' after saving password
/*NewUserSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});
*/
// 3. Create a Model.
export const UserModel = model<TUser>('User', NewUserSchema);
