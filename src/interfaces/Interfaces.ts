export interface ICalendarDay {
  currentMonth: boolean;
  date: Date;
  month: number;
  number: number;
  selected: boolean;
  year: number;
}

export interface ITask {
  taskName: string;
  date: Date;
}
