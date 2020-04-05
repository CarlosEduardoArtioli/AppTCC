import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalIconPage } from './modal-icon.page';

describe('ModalIconPage', () => {
  let component: ModalIconPage;
  let fixture: ComponentFixture<ModalIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalIconPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
