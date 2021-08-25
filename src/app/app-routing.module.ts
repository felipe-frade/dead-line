import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import(`./pages/home/home.module`).then(
      module => module.HomeModule
    )
  },
  { 
    path: 'character', 
    loadChildren: () => import(`./pages/character/character.module`).then(
      module => module.CharacterModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
