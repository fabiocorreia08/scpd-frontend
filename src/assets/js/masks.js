const valorPrefix = '';
const emptyString = '';
const digitRegExp = /\d/;

export default function createStringMask({
  prefix = valorPrefix,
} = {}) {
  const prefixLength = prefix && prefix.length || 0;

  function stringMask(rawValue = emptyString) {
    const rawValueLength = rawValue.length;

    if (rawValue === emptyString || (rawValue[0] === prefix[0] && rawValueLength === 1)) {
      return prefix.split(emptyString).concat([digitRegExp]);
    }
    let mask;

    if (rawValue.slice(0, prefixLength) === prefix) {
      mask = rawValue.slice(prefixLength);
    } else {
      mask = rawValue;
    }

    mask = convertToMask(mask);

    if (prefixLength > 0) {
      mask = prefix.split(emptyString).concat(mask)
    }

    return mask;
  }

  stringMask.instanceOf = 'createStringMask';

  return stringMask;
}

function convertToMask(strNumber) {
  return strNumber
    .split(emptyString)
    .map((char) => digitRegExp.test(char) ? digitRegExp : char);
}
