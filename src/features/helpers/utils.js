import { byDecimals } from './bignumber';

let trimReg = /(^\s*)|(\s*$)/g;

export function isEmpty(key) {
  if (key === undefined || key === '' || key === null) {
    return true;
  }
  if (typeof key === 'string') {
    key = key.replace(trimReg, '');
    return key === '' || key === null || key === 'null' || key === undefined || key === 'undefined';
  } else if (typeof key === 'undefined') {
    return true;
  } else if (typeof key == 'object') {
    for (let i in key) {
      return false;
    }
    return true;
  } else if (typeof key == 'boolean') {
    return false;
  }
}

let inputReg = /[a-z]/i;
export function inputLimitPass(value, tokenDecimals) {
  let valueArr = value.split('.');
  return !(inputReg.test(value) || (valueArr.length === 2 && valueArr[1].length > tokenDecimals));
}

export function inputFinalVal(value, total, tokenDecimals) {
  let inputVal = Number(value.replace(',', ''));
  return inputVal > total ? byDecimals(total, 0).toFormat(tokenDecimals) : value;
}
