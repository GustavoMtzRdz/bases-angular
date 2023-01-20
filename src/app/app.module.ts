import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContadorModule } from './components/contador/contador.module';
import { HeroesModule } from './components/herores/heroes.module';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  //{ path: 'inicio', component: ContadorComponent },
  // { path: 'heroe', component: HeroeComponent },
  // { path: 'lista', component: ListadoComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
