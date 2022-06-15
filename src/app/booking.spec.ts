import { Booking } from './booking';

describe('Booking', () => {
  it('should create an instance', () => {
    expect(new Booking(0,'',0)).toBeTruthy();
  });
});
