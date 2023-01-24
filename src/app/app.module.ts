import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContadorModule } from './components/contador/contador.module';
import { HeroesModule } from './components/herores/heroes.module';
import { DbzModule } from "./components/dbz/dbz.module";

// const routes: Routes = [
//   { path: '', redirectTo: '/inicio', pathMatch: 'full' },
//   { path: 'inicio', component: ContadorComponent },
//   { path: 'heroe', component: HeroeComponent },
//   { path: 'lista', component: ListadoComponent }
// ];

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        //RouterModule.forRoot(routes),
        HeroesModule,
        ContadorModule,
        DbzModule
    ]
})
export class AppModule { }
