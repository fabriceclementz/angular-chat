import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-add-message-form',
  templateUrl: './add-message-form.component.html',
  styleUrls: ['./add-message-form.component.css']
})
export class AddMessageFormComponent implements OnInit {
  public newMessage: FormGroup;

  private currentUser;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.newMessage = this.fb.group({
      text: ['', Validators.required]
    });

    this.getCurrentUser();
  }

  onSubmit({ value, valid }) {
    if (!valid || this.currentUser === null) {
      return false;
    }

    this.db.list('messages').push({
      text: value.text,
      email: this.currentUser.email
    });

    this.newMessage.reset();
  }

  getCurrentUser() {
    this.afAuth.authState.subscribe(user => {
      this.currentUser = user;
    });
  }
}
