/* eslint-disable prefer-const */

import { convertMinutesToTime } from '../../utils/timeFormat';
import { TSlot } from './Slot.interface';
import SlotModel from './Slot.model';

const createSlodInDb = async (
  Slot: TSlot,
  totalSlot: number,
  startMinutes: number,
) => {
  let result = [];
  let firstStartMin = startMinutes;
  for (let i = 1; i <= totalSlot; i++) {
    Slot.startTime = convertMinutesToTime(firstStartMin);
    Slot.endTime = convertMinutesToTime(firstStartMin + 60);
    result.push(await SlotModel.create(Slot));
    firstStartMin += 60;
  }

  return result;
};
const getAvailableSlotInDB = async (date: string, id: string) => {
  const result = await SlotModel.find({ service: id, date }).populate(
    'service',
  );
  return result;
};
export const slodService = {
  createSlodInDb,
  getAvailableSlotInDB,
};
