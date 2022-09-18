import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SharingService } from 'src/app/services/sharing.service';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  inputQuery: string = '';
  menu: Menu[] = [];

  constructor(
    private apiService: ApiService,
    public sharingService: SharingService
  ) {}

  getRecipeByQuery() {
    this.apiService.getMenuByQuery(this.inputQuery)
    .subscribe(data => {
      this.menu = Object.values(data).flat(2);
      this.sharingService.sharingObservableData = this.menu;
    })
  }

}
