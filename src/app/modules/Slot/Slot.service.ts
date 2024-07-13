import { TSlot } from './Slot.interface';
import SlotModel from './Slot.model';

const createSlodInDb = async () => {
  const slodData: Partial<TSlot> = {};

  const newSlod = await SlotModel.create(slodData);

  return newSlod;
};

export const slodService = {
  createSlodInDb,
};
