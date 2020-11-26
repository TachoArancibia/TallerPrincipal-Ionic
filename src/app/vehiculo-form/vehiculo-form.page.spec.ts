import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehiculoFormPage } from './vehiculo-form.page';

describe('VehiculoFormPage', () => {
  let component: VehiculoFormPage;
  let fixture: ComponentFixture<VehiculoFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
