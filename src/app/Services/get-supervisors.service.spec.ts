import { TestBed } from '@angular/core/testing';

import { GetSupervisorsService } from './get-supervisors.service';

describe('GetSupervisorsService', () => {
  let service: GetSupervisorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSupervisorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
