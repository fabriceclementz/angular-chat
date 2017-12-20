import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  public messages$: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages() {
    this.messages$ = this.db.list('messages').valueChanges();
  }
}
