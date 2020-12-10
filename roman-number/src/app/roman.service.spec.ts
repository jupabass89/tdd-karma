import { TestBed } from '@angular/core/testing';
import { RomanService } from './roman.service';

describe('RomanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RomanService = TestBed.get(RomanService);
    expect(service).toBeTruthy();
  });

});
