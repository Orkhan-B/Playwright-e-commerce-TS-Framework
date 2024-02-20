import { creditCardOffsetType, timeOffsetType } from '../EnumsAndDatatypes/enums';

const date: Date = new Date();
/**
 * Custom Methot to get current system Date Object.
 * @returns Date Object.
 */
export const getDate = (): Date => {
  return date;
};

/**
 * Custom Method to get month name as a string.
 * @param $date Date object to get current month from. Default value is current system date.
 * @param Format accepts 'Full' | 'Mmm' values. 'Full' is default value
 * @returns String name of month 'January' | 'Jan'
 */
export const getMonthAsString = (
  abbreviated: boolean = true,
  $date: Date = date
): string => {
  let mon: string;
  switch ($date.getMonth()) {
    case 0:
      mon = 'January';
      break;

    case 1:
      mon = 'February';
      break;

    case 2:
      mon = 'March';
      break;

    case 3:
      mon = 'April';
      break;

    case 4:
      mon = 'May ';
      break;

    case 5:
      mon = 'June';
      break;

    case 6:
      mon = 'July';
      break;

    case 7:
      mon = 'August';
      break;

    case 8:
      mon = 'September';
      break;

    case 9:
      mon = 'October';
      break;

    case 10:
      mon = 'November';
      break;

    case 11:
      mon = 'December';
      break;

    default:
      throw new Error(`Month can't be: ${$date.getMonth() + 1} System Error.`);
  }
  return abbreviated ? (mon.length > 3 ? mon.substring(0, 3) : mon) : mon;
};

/**
 * Custom Method to return Date object, offset by set ammount of Minutes, Hours, Days, Months or Years from current system date.
 * @param $timeOffsetType Enum timeOffsetType.
 * @param offset Number of Minutes, Hours, Days, Months or Years to offset.
 * @returns Offset Date object.
 */
export const getOffsetDate = (
  $timeOffsetType: timeOffsetType,
  offset: number
): Date => {
  let offsetDate = new Date();
  switch ($timeOffsetType) {
    case timeOffsetType.year:
      offsetDate.setFullYear(offsetDate.getFullYear() + offset);
      return offsetDate;
    case timeOffsetType.month:
      offsetDate.setMonth(offsetDate.getMonth() + offset);
      return offsetDate;
    case timeOffsetType.day:
      offsetDate.setDate(offsetDate.getDate() + offset);
      return offsetDate;
    case timeOffsetType.hour:
      offsetDate.setHours(offsetDate.getHours() + offset);
      return offsetDate;
    case timeOffsetType.minute:
      offsetDate.setMinutes(offsetDate.getMinutes() + offset);
      return offsetDate;
    default:
      throw new Error(`Type: ${$timeOffsetType} is not declared in switch case.`);
  }
};

/**
 * Custom Method to return Last day of a month set in Date object.
 * @param $date Date object to get a last day of the month from. Default value is current system time.
 * @returns String in DD format
 * @example "29".
 */
export const getLastDayOfMonth = ($date: Date = date): string => {
  if ($date.getMonth() === 11) {
    return '31';
  }
  const $day: number = new Date(
    $date.getFullYear(),
    $date.getMonth() + 1,
    0
  ).getDate();
  return `${$day}`;
};

/**
 * Custom Method to return {month:string, year:string} object, offset by set ammount of Months or Years from current system date.
 * @param $creditCardExpirationDateOffsetType Enum creditCardOffsetType.
 * @param offset Number of Months or Years to offset.
 * @returns Offset Date object.
 */
export const getCreditCardExpirationDate = (
  $creditCardExpirationDateOffsetType: creditCardOffsetType,
  offset: number
) => {
  switch ($creditCardExpirationDateOffsetType) {
    case creditCardOffsetType.year:
      return {
        year: normalizeDate(date.getFullYear() + offset).substring(2),
        month: normalizeDate(date.getMonth())
      };
    case creditCardOffsetType.month:
      return {
        year: normalizeDate(date.getFullYear()).substring(2),
        month: normalizeDate(date.getMonth() + offset)
      };
    default:
      throw new Error(
        `Type: ${$creditCardExpirationDateOffsetType} is not declared in switch case.`
      );
  }
};

const normalizeDate = (value: number) => {
  return value < 10 ? `0${value}` : String(value);
};

export const stringifyDate = (
  d: Date,
  format:
    | 'mm/dd/yyyy'
    | 'dd/mm/yyyy'
    | 'm-d-yyyy'
    | 'd-m-yyyy'
    | 'mmddyyyy'
    | 'ddmmyyyy'
    | 'mdyyyy'
    | 'dmyyyy'
) => {
  switch (format) {
    case 'dd/mm/yyyy':
      return `${normalizeDate(d.getDate())}/${normalizeDate(
        d.getMonth()
      )}/${d.getFullYear()}`;
    case 'mm/dd/yyyy':
      return `${normalizeDate(d.getMonth())}/${normalizeDate(
        d.getDate()
      )}/${d.getFullYear()}`;
    case 'ddmmyyyy':
      return `${normalizeDate(d.getDate())}${normalizeDate(
        d.getMonth()
      )}${d.getFullYear()}`;
    case 'mmddyyyy':
      return `${normalizeDate(d.getMonth())}${normalizeDate(
        d.getDate()
      )}${d.getFullYear()}`;
    case 'd-m-yyyy':
      return `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
    case 'm-d-yyyy':
      return `${d.getMonth()}-${d.getDate()}-${d.getFullYear()}`;
    case 'dmyyyy':
      return `${d.getDate()}${d.getMonth()}${d.getFullYear()}`;
    case 'mdyyyy':
      return `${d.getMonth()}${d.getDate()}${d.getFullYear()}`;
    default:
      throw new Error(`"${format}" is not a valid date format`);
  }
};

/*
These functions provide a wide range of functionalities for working with dates, 
such as getting month names, offsetting dates, getting the last day of the month, 
formatting dates, and more. 
They offer flexibility in manipulating and formatting dates according to different requirements.
*/
