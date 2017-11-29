import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { FormComponent }     from './form/form.component';
import { ReactiveFormComponent }     from './reactive-form/reactive-form.component';
import { VersionParentComponent } from './version-parent/version-parent.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'form', component: FormComponent },
  { path: 'form/reactive', component: ReactiveFormComponent },
  { path: 'version', component: VersionParentComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
