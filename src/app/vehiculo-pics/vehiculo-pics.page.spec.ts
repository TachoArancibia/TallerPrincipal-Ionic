import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehiculoPicsPage } from './vehiculo-pics.page';

describe('VehiculoPicsPage', () => {
  let component: VehiculoPicsPage;
  let fixture: ComponentFixture<VehiculoPicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoPicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoPicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
