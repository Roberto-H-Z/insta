import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {

  userProfile = {
    avatar: 'assets/images/usuario.png',
    username: 'cammskyy_',
    posts: 0,
    followers: 950,
    following: 43,
    isFollowing: true
  };


  toggleFollow() {
    this.userProfile.isFollowing = !this.userProfile.isFollowing;
  }

  constructor() { }

  ngOnInit() {
  }

}
