export const convertEnumToArray = (enumElement): any[] => {
  let outArray: any[] = [];
  Object.keys(enumElement).filter(enumElement => isNaN(Number.parseInt(enumElement))).map(enumElement => outArray.push(enumElement));
  return outArray;
};
