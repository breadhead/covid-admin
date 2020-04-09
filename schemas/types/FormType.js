export const FormType = {
  HospitalAid: 'hospitalAid',
};

export const formTypeToString = type =>
  ({
    [FormType.HospitalAid]: 'Помощь больницам',
  }[type]);
