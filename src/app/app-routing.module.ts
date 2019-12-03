import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

// { path: '', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule) },
//   { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
