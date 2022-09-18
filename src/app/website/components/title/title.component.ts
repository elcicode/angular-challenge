import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  title: string = '';

  @Input('title')
  set changeTitle(newTitle: string) {
    this.title = newTitle;
  }

}
