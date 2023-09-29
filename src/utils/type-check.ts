import { isArray as _isArray, isNumber as _isNumber } from 'lodash-es';

export const isNumber = (value: (string | number | string[] | number[] | null | undefined)) => _isNumber(value);
export const isArray = (value: (string | number | string[] | number[] | null | undefined)) => _isArray(value);
