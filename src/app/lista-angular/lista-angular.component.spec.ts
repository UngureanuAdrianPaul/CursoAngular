import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAngularComponent } from './lista-angular.component';

describe('ListaAngularComponent', () => {
  let component: ListaAngularComponent;
  let fixture: ComponentFixture<ListaAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
