export const convertMinutesToTime = (totalMinutes: number): string => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  return `${formattedHours}:${formattedMinutes}`;
};
export const MinteCalculate = (Time: string): number => {
  const [hours, minutes] = Time.split(':').map(Number);
  const totalMinutes = hours * 60 + minutes;
  return totalMinutes;
};
