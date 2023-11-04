import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuemSouComponent } from './quem-sou/quem-sou.component';
import { QueFacoComponent } from './que-faco/que-faco.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

const routes: Routes = [
    { path: 'quem-sou', component: QuemSouComponent },
    { path: 'o-que-faco', component: QueFacoComponent },
    { path: 'meus-hobbies', component: HobbiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
