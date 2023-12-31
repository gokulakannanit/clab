import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'add/patient',
    loadChildren: () =>
      import('./pages/patients/patients.module').then((m) => m.PatientsModule),
  },
  {
    path: 'add/doctor',
    loadChildren: () =>
      import('./pages/doctor/doctor.module').then((m) => m.DoctorModule),
  },
  {
    path: 'new/test',
    loadChildren: () =>
      import('./pages/test-form/test-form.module').then((m) => m.TestFormModule),
  },
  //Wild Card Route for 404 request 
  { 
    path: '**',
    loadChildren: () =>
      import('./pages/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
