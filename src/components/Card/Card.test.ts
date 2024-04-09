import { shouldHandleClick, handleClickLogic, hoverEffectLogic } from './Card.lib';

describe('Card Component Validations', () => {
  it('should return true when the card is not disabled', () => {
    expect(shouldHandleClick(false)).toBe(true);
  });

  it('should return false when the card is disabled', () => {
    expect(shouldHandleClick(true)).toBe(false);
  });

  it('should return true when disabled is undefined', () => {
    expect(shouldHandleClick()).toBe(true);
  });

  it('should execute logic on click when not disabled', () => {
    let wasClicked = false;
    handleClickLogic(false, () => { wasClicked = true; });
    expect(wasClicked).toBe(true);
  });

  it('should not execute logic on click when disabled', () => {
    let wasClicked = false;
    handleClickLogic(true, () => { wasClicked = true; });
    expect(wasClicked).toBe(false);
  });

  it('should execute hover logic when not disabled', () => {
    expect(hoverEffectLogic(false)).toBe(true);
  });

  it('should not execute hover logic when disabled', () => {
    expect(hoverEffectLogic(true)).toBe(false);
  });
});
