import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { MeetingComponent } from './meeting/meeting.component';

const routes: Routes = [
  { path: 'client-form', component: ClientFormComponent },
  { path: 'meeting', component: MeetingComponent },
  { path: '', redirectTo: '/client-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
