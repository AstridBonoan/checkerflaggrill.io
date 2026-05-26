import { RESTAURANT } from '../data/menu'

export function useTodayHours(): string {
  const day = new Date().getDay()
  const isWeekend = day === 0 || day === 6
  return isWeekend ? RESTAURANT.hours.weekend : RESTAURANT.hours.weekday
}
