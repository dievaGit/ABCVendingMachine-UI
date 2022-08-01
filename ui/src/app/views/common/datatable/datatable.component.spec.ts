import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { DatatableComponent } from './datatable.component';

const RouterSpy = jasmine.createSpyObj(
  'Router',
  ['navigate']
);

describe('DatatableComponent', () => {
  let component: DatatableComponent;
  let fixture: ComponentFixture<DatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatatableComponent],
      providers: [
        { provide: Router, useValue: RouterSpy }]

    })
      .compileComponents();

    fixture = TestBed.createComponent(DatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {    
    expect(component).toBeTruthy();
  });

  it('table should have zero columns', () => {    
    expect(component.columnData.length).toEqual(0);
  });

  it('table should have no data', () => {    
    expect(component.data.length).toEqual(0);
  });
});
