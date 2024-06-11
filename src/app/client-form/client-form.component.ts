import { Component } from '@angular/core';
import { Client } from '../client';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']  // corrected from 'styleUrl' to 'styleUrls'
})
export class ClientFormComponent {
  submitted: boolean = false;
  model: Client;

  constructor(){
    this.model = new Client(-1, 'John Doe', 'john@doe.com', '123 Main Street', '');
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.model);
  }

  newClient() {
    this.model = new Client(-1, '', '', '', '');
    this.submitted = false;
  }
}
