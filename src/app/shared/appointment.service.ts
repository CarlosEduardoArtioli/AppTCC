import { Injectable } from '@angular/core';
import { Dispositivos } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {
  deviceListRef: AngularFireList<any>;
  deviceRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createDevice(apt: Dispositivos) {
    return this.deviceListRef.push({
      name: apt.name,
      status: apt.status,
      mac: apt.mac,
      icon: apt.icon
    })
  }

  // Get Single
  getDevice(id: string) {
    this.deviceRef = this.db.object('/dispositivos/' + id);
    return this.deviceRef;
  }

  // Get List
  getDeviceList() {
    this.deviceListRef = this.db.list('/dispositivos');
    return this.deviceListRef;
  }

  // Update
  updateDevice(id, apt: Dispositivos) {
    return this.deviceRef.update({
      name: apt.name,
      status: apt.status,
      mac: apt.mac,
      icon: apt.icon
    })
  }

  // Delete
  deleteDevice(id: string) {
    this.deviceRef = this.db.object('/dispositivos/' + id);
    this.deviceRef.remove();
  }
}