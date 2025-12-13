import { TestBed } from '@angular/core/testing';

import { UserEntityStateService } from './user-entity-state.service';

describe('UserEntityStateService', () => {
  let service: UserEntityStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserEntityStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
