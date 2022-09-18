import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './website/components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ImgComponent } from './website/components/img/img.component' ;
import { RecipeComponent } from './website/components/recipe/recipe.component';
import { HomeComponent } from './website/pages/home/home.component';
import { NavComponent } from './website/components/nav/nav.component';
import { LoginComponent } from './website/pages/login/login.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CoreModule } from './core/core.module';
import { SearchComponent } from './website/components/search/search.component';
import { TitleComponent } from './website/components/title/title.component';
import { FooterComponent } from './website/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImgComponent,
    RecipeComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    SearchComponent,
    TitleComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
