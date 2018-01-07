import { TestBed, inject } from '@angular/core/testing';

import { CounterActionsService } from './counter-actions.service';

describe('CounterActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterActionsService]
    });
  });

  it('should ...', inject([CounterActionsService], (service: CounterActionsService) => {
    expect(service).toBeTruthy();
  }));
});
