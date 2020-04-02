export const timeValidation = Rule =>
  Rule.custom(timeString => {
    if (!timeString) return true;
    return (
      /(\d\d):(\d\d)(-(\d\d):(\d\d))?/gi.test(timeString) ||
      'Формат HH:MM-HH:MM или HH:MM'
    );
  });
