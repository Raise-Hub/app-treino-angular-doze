import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend'
import { FriendService } from "../friend.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: Friend[] = [];
  constructor(private friendService: FriendService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getFriends();
  }
  getFriends(): void {
    this.friendService.getFriends()
      .subscribe(friends => this.friends = friends);
  }

}
