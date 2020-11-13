import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccesComponent } from './acces.component';

describe('AccesComponent', () => {
  let component: AccesComponent;
  let fixture: ComponentFixture<AccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
