import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(
    private router: Router
  ) {

  }

  logout() {
    this.router.navigate(['login']);
    return localStorage.clear();
  }

}
