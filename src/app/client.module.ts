import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './client-form/client-form.component';
import { MeetingComponent } from './meeting/meeting.component';

@NgModule({
  declarations: [
    //ClientFormComponent,
    MeetingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    //ClientFormComponent,
    MeetingComponent
  ]
})
export class ClientModule {}