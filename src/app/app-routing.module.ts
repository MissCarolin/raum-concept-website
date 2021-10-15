import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'projects',
    loadChildren: () => import('./views/projects/projects.module').then((m) => m.AppProjectsModule),
  },
  {
    path: '',
    loadChildren: () => import('./views/home/home.module').then((m) => m.AppHomeModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
