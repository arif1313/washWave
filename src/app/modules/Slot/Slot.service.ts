import { TSlot } from './Slot.interface';
import SlotModel from './Slot.model';

const createSlodInDb = async (Slod: TSlot) => {
  const newSlod = await SlotModel.create(Slod);

  return newSlod;
};

export const slodService = {
  createSlodInDb,
};
