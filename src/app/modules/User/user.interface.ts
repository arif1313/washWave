export type TUser = {
  id: string;
  password: string;
  needPassChange: boolean;
  role: 'student' | 'faculty' | 'admin';
  status: 'inprogress' | 'block';
  isDleleted: boolean;
};
// use parse in service
// export type newUser = {
//   role: string;
//   password: string;
//   id: string;
// };
