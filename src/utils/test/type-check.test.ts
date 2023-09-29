import { isArray, isNumber } from '../type-check';

describe('isArray function', () => {
  it('should return true for an array', () => {
    const array = [1, 2, 3];

    const result = isArray(array);

    expect(result).toBe(true);
  });

  it('should return false for a non-array value', () => {
    const nonArray = 42;

    const result = isArray(nonArray);

    expect(result).toBe(false);
  });

  it('should return true for an empty array', () => {
    const emptyArray: never[] = [];

    const result = isArray(emptyArray);

    expect(result).toBe(true);
  });
});

describe('isNumber function', () => {
  it('should return true for a number', () => {
    const number = 42;

    const result = isNumber(number);

    expect(result).toBe(true);
  });

  it('should return false for a string', () => {
    const str = '42';

    const result = isNumber(str);

    expect(result).toBe(false);
  });

  it('should return false for an array', () => {
    const array = [1, 2, 3];

    const result = isNumber(array);

    expect(result).toBe(false);
  });

  it('should return false for null', () => {
    const nullValue = null;

    const result = isNumber(nullValue);

    expect(result).toBe(false);
  });

  it('should return false for undefined', () => {
    const undefinedValue = undefined;

    const result = isNumber(undefinedValue);

    expect(result).toBe(false);
  });
});

