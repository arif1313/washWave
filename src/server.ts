// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';
import { Server } from 'http';
let server: Server;
async function main() {
  try {
    await mongoose.connect(config.DB_URL as string);
    server = app.listen(config.Port, () => {
      console.log(`Example appp listeningg  on port ${config.Port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
process.on('unhandledRejection', () => {
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on('uncaughtException', () => {
  console.log('uncaughtException');
  process.exit(1);
});
