import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  stories = [
    {
      avatar: 'https://gravatar.com/avatar/1a2b3c4d5e6f7g8h9i0j?d=identicon&f=y',
      name: 'Roberto'
    },
    {
      avatar: 'https://gravatar.com/avatar/a1b2c3d4e5f6g7h8i9j0?d=identicon&f=y',
      name: 'Maria'
    },
    {
      avatar: 'https://gravatar.com/avatar/b2c3d4e5f6g7h8i9j0a1?d=identicon&f=y',
      name: 'Juan'
    },
    {
      avatar: 'https://gravatar.com/avatar/c3d4e5f6g7h8i9j0a1b2?d=identicon&f=y',
      name: 'Laura'
    },
    {
      avatar: 'https://gravatar.com/avatar/d4e5f6g7h8i9j0a1b2c3?d=identicon&f=y',
      name: 'Carlos'
    },
    {
      avatar: 'https://gravatar.com/avatar/e5f6g7h8i9j0a1b2c3d4?d=identicon&f=y',
      name: 'Ana'
    },
    {
      avatar: 'https://gravatar.com/avatar/f6g7h8i9j0a1b2c3d4e5?d=identicon&f=y',
      name: 'Pedro'
    },
    {
      avatar: 'https://gravatar.com/avatar/g7h8i9j0a1b2c3d4e5f6?d=identicon&f=y',
      name: 'Sofia'
    },
    {
      avatar: 'https://gravatar.com/avatar/h8i9j0a1b2c3d4e5f6g7?d=identicon&f=y',
      name: 'David'
    },
    {
      avatar: 'https://gravatar.com/avatar/i9j0a1b2c3d4e5f6g7h8?d=identicon&f=y',
      name: 'Isabel'
    }
  ];

  constructor() {}

}