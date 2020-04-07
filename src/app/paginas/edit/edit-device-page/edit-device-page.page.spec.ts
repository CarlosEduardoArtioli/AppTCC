import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditDevicePagePage } from './edit-device-page.page';

describe('EditDevicePagePage', () => {
  let component: EditDevicePagePage;
  let fixture: ComponentFixture<EditDevicePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDevicePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDevicePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
