import { TestBed } from '@angular/core/testing';

import { CustomDirectivesService } from './custom-directives.service';

describe('CustomDirectivesService', () => {
  let service: CustomDirectivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomDirectivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
