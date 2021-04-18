import { TestBed } from '@angular/core/testing';

import { TableCompService } from './table-comp.service';

describe('TableCompService', () => {
  let service: TableCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
