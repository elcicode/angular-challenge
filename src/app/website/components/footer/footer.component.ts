import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert2';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  social() {
    swal.fire({
      title: 'Soy <strong>Elcira Ibarra</strong>',
      icon: 'info',
      html:
        'Te dejo mi ' +
        '<a target="_blank" href="https://www.linkedin.com/in/soyelci/">Linkedin</a> ' +
        'y mi ' +
        '<a target="_blank" href="https://github.com/elcicode">Github</a> ',
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Ok!',

    })
  }


}
