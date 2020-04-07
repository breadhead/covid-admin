export const FormType = {
  WebinarSignUp: 'webinarSignUp',
  HospitalAid: 'hospitalAid',
};

export const formTypeToString = type =>
  ({
    [FormType.WebinarSignUp]: 'Запись на вебинар',
    [FormType.HospitalAid]: 'Помощь больницам',
  }[type]);
