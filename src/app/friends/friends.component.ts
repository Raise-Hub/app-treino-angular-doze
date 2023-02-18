import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend'
import { FRIENDS } from "../mock-friends";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends = FRIENDS;

  selectedFriend?: Friend;
  onSelect(friend: Friend): void {
    this.selectedFriend = friend;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
