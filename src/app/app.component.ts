import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from './app.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loginForm = this.fb.group({
    username: ["", Validators.required],
    email: ["", Validators.required],
    description: ["", Validators.required]
  });
  constructor(public fb: FormBuilder, public contactService: ContactService, public notificationService: NotificationsService ) {}
  submitForm(event) {
    this.contactService.postMsg(event)
      .subscribe((val) => {
        this.loginForm.reset();
        this.notificationService.success('Success', 'Message Created Successfully');
        return val;
      }, (err) => {
        this.notificationService.error('Error', 'Failed to create message');
      });
  }
}
