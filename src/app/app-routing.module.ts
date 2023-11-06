import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperheroesModule } from './superheroes/superheroes.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./transformacion-digital/transformacion-digital.module').then((m) => m.TransformacionDigitalModule),
  },
  {
    path: 'superheroes',
    loadChildren: () => import('./superheroes/superheroes.module').then((m) => m.SuperheroesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
