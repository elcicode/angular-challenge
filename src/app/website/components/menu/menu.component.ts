import { Component } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';
import { ApiService } from 'src/app/services/api.service';

import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import { SharingService } from 'src/app/services/sharing.service';
import { Observable } from 'rxjs';

import swal from 'sweetalert2';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menu$: Observable<Menu[]>;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private usersService: UsersService,
    private sharingService: SharingService
  ){
    this.menu$ = sharingService.sharingObservable;
  }


recipeId: string = '';
recipes: Menu[] = [];
recipe: Menu = {
  id: '',
  title: '',
  image: '',
  imageType: '',
  pricePerServing: 0,
  healthScore: 0,
  readyInMinutes: 0,
  vegan: false,
  vegetarian: false,
  summary: ''
};

recipesVegan: number = 0;
recipesNotVegan: number = 0;
menu: Menu[] = [];
inputQuery: string = '';

priceTotal: number = 0;
ready: number[] = [];
averageReady: number = 0;
averageScore: number = 0;



  addRecipe(recipe: Menu) {
    this.recipe = recipe;
    console.log(this.recipes.length)

    if (this.recipes.length < 4) {


        if (recipe.vegan === true || recipe.vegetarian === true) {

          if (this.recipesVegan >= 2) {
            swal.fire({
              icon: 'error',
              title: 'Agregaste dos platos veganos!',
              text: 'Completa el menú con otras opciones no veganas.'
            });

          } else {

            this.recipes.push(recipe);
            this.recipesVegan += 1;
            console.log(this.recipes);
            console.log(this.recipesVegan);

            this.priceTotal = this.recipes.map(item => item.pricePerServing).reduce((counter, item) => counter + item, 0);
            this.averageReady = (this.recipes.map(item => item.readyInMinutes).reduce((counter, item) => counter + item, 0))/this.recipes.length;
            this.averageScore = (this.recipes.map(item => item.healthScore).reduce((counter, item) => counter + item, 0))/this.recipes.length;


            this.scrollToTop();

        }



      } else {

          if (this.recipesNotVegan >= 2) {
          swal.fire({
            icon: 'error',
            title: 'Agregaste dos platos no veganos!',
            text: 'Completa el menú con otras opciones veganas.'
          })
          } else {
            this.recipes.push(recipe);
            this.recipesNotVegan += 1;

            this.priceTotal = this.recipes.map(item => item.pricePerServing).reduce((counter, item) => counter + item, 0);
            this.averageReady = (this.recipes.map(item => item.readyInMinutes).reduce((counter, item) => counter + item, 0))/this.recipes.length;
            this.averageScore = (this.recipes.map(item => item.healthScore).reduce((counter, item) => counter + item, 0))/this.recipes.length;

            this.scrollToTop();

          }

        }

      } else {
        swal.fire({
          icon: 'error',
          title: 'Ya tienes el menú completo!',
          text: 'Si prefieres otra opción, elimina algún plato del menú. Gracias!'
        })
      }
  }

  deleteRecipe(recipe: Menu) {
    const id = recipe.id;
    const recipeIndex = this.recipes.findIndex(item => item.id === id);
    this.recipes.splice(recipeIndex, 1);
    this.priceTotal = this.recipes.map(item => item.pricePerServing).reduce((counter, item) => counter + item, 0);
    if (recipe.vegan === true || recipe.vegetarian === true) {
      this.recipesVegan -= 1;
    } else {
      this.recipesNotVegan -= 1;
    }
  }

  scrollToTop(){

    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Plato agregado!',
      showConfirmButton: false,
      timer: 1500
    })

    let element = document.querySelector("#top")?.scrollIntoView();

  }

}

