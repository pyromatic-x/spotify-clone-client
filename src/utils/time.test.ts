import { test, describe, expect } from '@jest/globals';
import { formatDuration, secondsToTime } from './time';

describe('Time util', () => {
  test('formatDuration non zero value', () => {
    expect(formatDuration(354)).toBe('5:54');
  });
  test('formatDuration zero value', () => {
    expect(formatDuration(0)).toBe('0:00');
  });

  test('secondsToTime non zero value', () => {
    expect(secondsToTime(5000)).toBe('1hr 23min');
  });

  test('secondsToTime non zero big value', () => {
    expect(secondsToTime(73376)).toBe('20hr 22min');
  });

  test('secondsToTime zero value', () => {
    expect(secondsToTime(0)).toBe('');
  });
});
