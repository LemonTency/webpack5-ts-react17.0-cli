import {sum} from '@utils/sum'

describe('函数单元测试', () => {
    test('adds 2 + 1 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });

    test('adds 1 + 1 to equal 1', () => {
        expect(sum(1, 1)).toBe(2);
      });
  });
  