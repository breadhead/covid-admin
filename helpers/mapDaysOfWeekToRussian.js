import { daysOfWeekList } from './daysOfWeekList';

export const mapDaysOfWeekToRussian = day =>
  daysOfWeekList.find(d => d.value === day).title;
