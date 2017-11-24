import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friend: Friend = {
    id: 283,
    name: 'Imran'
  };

  selectedFriend: Friend;

  friends: Friend[];

    selectedHero: Friend;

    onSelect(friend: Friend): void {
      this.selectedFriend = friend;
      console.log(friend);
    }

    constructor(private friendService: FriendService) { }

    getMockFriends(): void {
      this.friends = this.friendService.getMockFriends();
      console.log('in getMockFriends');
    }

    getFriends(): void {
      this.friendService.getFriends()
          .subscribe(friends => this.friends = friends);
       console.log('in getFriends');
    }

    ngOnInit() {
        this.getFriends();
    }

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.friendService.addFriend({ name } as Friend)
        .subscribe(friend => {
          this.friends.push(friend);
        });
    }

    delete(friend: Friend): void {
      this.friends = this.friends.filter(f => f !== friend);
      this.friendService.deleteFriend(friend).subscribe();
    }
}
