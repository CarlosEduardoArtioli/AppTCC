import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-icons',
  templateUrl: './edit-icons.page.html',
  styleUrls: ['./edit-icons.page.scss'],
})
export class EditIconsPage implements OnInit {

  mac: any;

  constructor(
    private deviceService: DeviceService,
    private router: Router,
    private actRoute: ActivatedRoute,
  ) {
    this.mac = this.actRoute.snapshot.paramMap.get('mac');
    console.log(this.mac);
   }

  ngOnInit() {
  }

  update(icone) {
    this.deviceService.updateIcon(icone, this.mac)
      .then(() => {
        this.router.navigate(['menu/edit-device-page/' + this.mac]);
      })
      .catch(error => console.log(error));
  }

}
