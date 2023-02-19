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

  selectedFriend?: Friend;
  friends: Friend[] = [];
  constructor(private friendService: FriendService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getFriends();
  }
  onSelect(friend: Friend): void {
    this.selectedFriend = friend;
    this.messageService.add(`FriendsComponent: Selected friend id=${friend.id}`)
  }
  getFriends(): void {
    this.friendService.getFriends()
      .subscribe(friends => this.friends = friends);
  }

}
