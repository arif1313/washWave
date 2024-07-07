import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
const NewUserSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needPassChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: {
        values: ['student', 'faculty', 'admin'],
        message: 'enter correct role ',
      },
    },
    status: {
      type: String,
      enum: {
        values: ['inprogress', 'block'],
        message: 'enter correct status ',
      },
    },
    isDleleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);
NewUserSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// set '' after saving password
NewUserSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

// 3. Create a Model.
export const UserModel = model<TUser>('User', NewUserSchema);
