import { TestBed, inject } from '@angular/core/testing';

import { PatientdataService } from './patientdata.service';

describe('PatientdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientdataService]
    });
  });

  it('should be created', inject([PatientdataService], (service: PatientdataService) => {
    expect(service).toBeTruthy();
  }));
});
