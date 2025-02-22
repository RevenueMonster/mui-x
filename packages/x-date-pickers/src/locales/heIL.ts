import { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';

const views = {
  hours: 'שעות',
  minutes: 'דקות',
  seconds: 'שניות',
};

const heILPickers: Partial<PickersLocaleText<any>> = {
  // Calendar navigation
  previousMonth: 'חודש קודם',
  nextMonth: 'חודש הבא',

  // View navigation
  openPreviousView: 'תצוגה קודמת',
  openNextView: 'תצוגה הבאה',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    view === 'year'
      ? 'תצוגת שנה פתוחה, מעבר לתצוגת לוח שנה'
      : 'תצוגת לוח שנה פתוחה, מעבר לתצוגת שנה',

  // DateRange placeholders
  start: 'תחילה',
  end: 'סיום',

  // Action bar
  cancelButtonLabel: 'ביטול',
  clearButtonLabel: 'ניקוי',
  okButtonLabel: 'אישור',
  todayButtonLabel: 'היום',

  // Toolbar titles
  datePickerToolbarTitle: 'בחירת תאריך',
  dateTimePickerToolbarTitle: 'בחירת תאריך ושעה',
  timePickerToolbarTitle: 'בחירת שעה',
  dateRangePickerToolbarTitle: 'בחירת טווח תאריכים',

  // Clock labels
  clockLabelText: (view, time, adapter) =>
    `בחירת ${views[view]}. ${
      time === null ? 'לא נבחרה שעה' : `השעה הנבחרת היא ${adapter.format(time, 'fullTime')}`
    }`,
  hoursClockNumberText: (hours) => `${hours} שעות`,
  minutesClockNumberText: (minutes) => `${minutes} דקות`,
  secondsClockNumberText: (seconds) => `${seconds} שניות`,

  // Calendar labels
  calendarWeekNumberHeaderLabel: 'שבוע מספר',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => `שבוע ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,

  // Open picker labels
  openDatePickerDialogue: (value, utils) =>
    value !== null && utils.isValid(value)
      ? `בחירת תאריך, התאריך שנבחר הוא ${utils.format(value, 'fullDate')}`
      : 'בחירת תאריך',
  openTimePickerDialogue: (value, utils) =>
    value !== null && utils.isValid(value)
      ? `בחירת שעה, השעה שנבחרה היא ${utils.format(value, 'fullTime')}`
      : 'בחירת שעה',

  // Table labels
  timeTableLabel: 'בחירת שעה',
  dateTableLabel: 'בחירת תאריך',

  // Field section placeholders
  fieldYearPlaceholder: (params) => 'Y'.repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => (params.contentType === 'letter' ? 'MMMM' : 'MM'),
  fieldDayPlaceholder: () => 'DD',
  fieldWeekDayPlaceholder: (params) => (params.contentType === 'letter' ? 'EEEE' : 'EE'),
  fieldHoursPlaceholder: () => 'hh',
  fieldMinutesPlaceholder: () => 'mm',
  fieldSecondsPlaceholder: () => 'ss',
  fieldMeridiemPlaceholder: () => 'aa',
};

export const heIL = getPickersLocalization(heILPickers);
