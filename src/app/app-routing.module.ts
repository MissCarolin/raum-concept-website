import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
    path: 'datenschutz',
    loadChildren: () => import('./views/datenschutz/datenschutz.module').then((m) => m.AppDatenschutzModule),
  },
  {
    path: 'impressum',
    loadChildren: () => import('./views/impressum/impressum.module').then((m) => m.AppImpressumModule),
  },
 {
    path: 'contact',
    loadChildren: () => import('./views/contact/contact.module').then((m) => m.AppContactModule),
  },
 {
    path: 'services',
    loadChildren: () => import('./views/services/services.module').then((m) => m.AppServicesModule),
  },
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
  imports: [RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
