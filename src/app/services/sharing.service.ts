import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private sharingObservablePrivate: BehaviorSubject<Menu[]> =
    new BehaviorSubject<Menu[]>([]);

  constructor() { }


  get sharingObservable() {
    return this.sharingObservablePrivate.asObservable();
  }

  set sharingObservableData(data: Menu[]) {
    this.sharingObservablePrivate.next(data)
  }
}
