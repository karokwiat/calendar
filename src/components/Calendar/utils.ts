import { daysInEachMonth } from './consts';

export function generateMatrix(currentDate: Date) {
  let matrix: number[][] = [];

  let year: number = currentDate.getFullYear();
  let month: number = currentDate.getMonth();

  // Sunday is the first day of the week, add 6 so it becomes the last day of the week.
  let firstDay: number = new Date(year, month, 1).getDay() + 6;

  let maxDays: number = daysInEachMonth[month];

  // To check if a year is a leap year, divide the year by 4.
  // Century years like 300, 700, 1900, 2000 need to be divided by 400 to check whether they are leap years or not.
  if (month == 1) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      maxDays += 1;
    }
  }

  let counter: number = 1;
  for (let row = 1; row < 7; row++) {
    matrix[row] = [];
    for (let col = 0; col < 7; col++) {
      matrix[row][col] = -1;

      if (row == 1 && col >= firstDay) {
        // in first row the date should start from the from day of the week
        matrix[row][col] = counter++;
      } else if (row > 1 && counter <= maxDays) {
        matrix[row][col] = counter++;
      }
    }
  }

  return matrix;
}
