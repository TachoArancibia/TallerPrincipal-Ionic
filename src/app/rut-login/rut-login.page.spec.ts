import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutLoginPage } from './rut-login.page';

describe('RutLoginPage', () => {
  let component: RutLoginPage;
  let fixture: ComponentFixture<RutLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
