import { isNotEmpty } from './InputField.lib';

describe('InputField Validations', () => {
  it('should validate that the input is not empty', () => {
    expect(isNotEmpty('some text')).toBe(true);
    expect(isNotEmpty('')).toBe(false);
    expect(isNotEmpty(' ')).toBe(false);
    expect(isNotEmpty('     ')).toBe(false);

  
  });
});
