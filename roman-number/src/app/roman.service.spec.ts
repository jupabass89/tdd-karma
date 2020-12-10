import { TestBed } from '@angular/core/testing';
import { RomanService } from './roman.service';

describe('RomanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RomanService = TestBed.get(RomanService);
    expect(service).toBeTruthy();
  });

  it('service should return V', () => {
    const service: RomanService = TestBed.get(RomanService);
    const response = service.toRoman(5);
    expect(response).toEqual('V');
  });

  it('should return X when input is 10', () => {
    const service: RomanService = TestBed.get(RomanService);
    const response = service.toRoman(10);
    expect(response).toEqual('X');
  });

  it('should return MM when input is 2000', () => {
    const service: RomanService = TestBed.get(RomanService);
    const response = service.toRoman(2000);
    expect(response).toEqual('MM');
  });

  it('should return XI when input is 11', () => {
    const service: RomanService = TestBed.get(RomanService);
    const response = service.toRoman(11);
    expect(response).toEqual('XI');
  });

  it('should return MCCXXXIV when input is 1234', () => {
    const service: RomanService = TestBed.get(RomanService);
    const response = service.toRoman(1234);
    expect(response).toEqual('MCCXXXIV');
  });

  it('should show an error message when input is 0', () => {
    const service: RomanService = TestBed.get(RomanService);
    const response = service.toRoman(0);
    expect(response).toEqual('El cero no existe en romano');
  });

  it('should fail when input is undefined', () => {
    const service: RomanService = TestBed.get(RomanService);
    const badInput = undefined;
    const response = service.toRoman(badInput);
    expect(response).toEqual('El cero no existe en romano');
  });
});
