import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusitoComponent } from './menusito.component';

describe('MenusitoComponent', () => {
  let component: MenusitoComponent;
  let fixture: ComponentFixture<MenusitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
