import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users$: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users$ = this.db.list('users').valueChanges();
  }
}
