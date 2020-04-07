import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditDeviceListPage } from './edit-device-list.page';

describe('EditDeviceListPage', () => {
  let component: EditDeviceListPage;
  let fixture: ComponentFixture<EditDeviceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeviceListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDeviceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
