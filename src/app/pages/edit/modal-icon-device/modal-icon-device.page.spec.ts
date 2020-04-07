import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalIconDevicePage } from './modal-icon-device.page';

describe('ModalIconDevicePage', () => {
  let component: ModalIconDevicePage;
  let fixture: ComponentFixture<ModalIconDevicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalIconDevicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalIconDevicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
