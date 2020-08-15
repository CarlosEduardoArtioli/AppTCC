import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditIconsPage } from './edit-icons.page';

describe('EditIconsPage', () => {
  let component: EditIconsPage;
  let fixture: ComponentFixture<EditIconsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIconsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditIconsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
