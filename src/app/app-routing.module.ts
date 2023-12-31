import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeRequestsListComponent } from './change-requests-list/change-requests-list.component';
import { FormChangeRequestComponent } from './form-change-request/form-change-request.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ChangeRequestsListComponent },
  { path: 'form', component: FormChangeRequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
