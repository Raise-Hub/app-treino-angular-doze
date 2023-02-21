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

  getFriend(id: number): Observable<Friend> {
    const friend = FRIENDS.find(h => h.id === id)!;
    this.messageService.add(`FriendService: fetched friend id=${id}`);
    return of(friend);
  }
}
