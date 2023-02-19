import { Injectable } from '@angular/core';
import { FRIENDS } from "./mock-friends";
import { Friend } from "./friend";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  constructor(private messageService: MessageService) { }
  getFriends(): Observable<Friend[]> {
    const friends = of(FRIENDS);
    this.messageService.add('FriendService: fetched friends')
    return friends;
  }
}
