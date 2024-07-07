// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.DB_URL as string);
    app.listen(config.Port, () => {
      console.log(`Example appp listeningg  on port ${config.Port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
