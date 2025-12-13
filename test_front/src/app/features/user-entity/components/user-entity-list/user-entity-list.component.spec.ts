import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEntityListComponent } from './user-entity-list.component';

describe('UserEntityListComponent', () => {
  let component: UserEntityListComponent;
  let fixture: ComponentFixture<UserEntityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEntityListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEntityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
