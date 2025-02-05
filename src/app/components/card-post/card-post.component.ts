import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
  standalone  : false
})
export class CardPostComponent implements OnInit {

  posts = [
    {
      avatar: 'https://gravatar.com/avatar/1a2b3c4d5e6f7g8h9i0j?d=identicon&f=y',
      name: 'Roberto Herrera',
      time: '1d',
      note: 'UTCV - A2 -LC3',
      image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      title: 'Card title 1',
      subtitle: 'Card subtitle 1',
      content: 'Here a small text description for the card content 1.'
    },
    {
      avatar: 'https://gravatar.com/avatar/a1b2c3d4e5f6g7h8i9j0?d=identicon&f=y',
      name: 'Maria Lopez',
      time: '2d',
      note: 'UTCV - B1 -LC4',
      image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      title: 'Card title 2',
      subtitle: 'Card subtitle 2',
      content: 'Here a small text description for the card content 2.'
    },
    {
      avatar: 'https://gravatar.com/avatar/b2c3d4e5f6g7h8i9j0a1?d=identicon&f=y',
      name: 'Juan Perez',
      time: '3d',
      note: 'UTCV - C3 -LC1',
      image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      title: 'Card title 3',
      subtitle: 'Card subtitle 3',
      content: 'Here a small text description for the card content 3.'
    },
    {
      avatar: 'https://gravatar.com/avatar/c3d4e5f6g7h8i9j0a1b2?d=identicon&f=y',
      name: 'Laura Gomez',
      time: '4d',
      note: 'UTCV - D4 -LC2',
      image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      title: 'Card title 4',
      subtitle: 'Card subtitle 4',
      content: 'Here a small text description for the card content 4.'
    },
    {
      avatar: 'https://gravatar.com/avatar/d4e5f6g7h8i9j0a1b2c3?d=identicon&f=y',
      name: 'Carlos Ramirez',
      time: '5d',
      note: 'UTCV - E5 -LC3',
      image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      title: 'Card title 5',
      subtitle: 'Card subtitle 5',
      content: 'Here a small text description for the card content 5.'
    },
    {
      avatar: 'https://gravatar.com/avatar/e5f6g7h8i9j0a1b2c3d4?d=identicon&f=y',
      name: 'Ana Torres',
      time: '6d',
      note: 'UTCV - F6 -LC1',
      image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      title: 'Card title 6',
      subtitle: 'Card subtitle 6',
      content: 'Here a small text description for the card content 6.'
    },
    {
      avatar: 'https://gravatar.com/avatar/f6g7h8i9j0a1b2c3d4e5?d=identicon&f=y',
      name: 'Pedro Castillo',
      time: '7d',
      note: 'UTCV - G7 -LC2',
      image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      title: 'Card title 7',
      subtitle: 'Card subtitle 7',
      content: 'Here a small text description for the card content 7.'
    },
    {
      avatar: 'https://gravatar.com/avatar/g7h8i9j0a1b2c3d4e5f6?d=identicon&f=y',
      name: 'Sofia Navarro',
      time: '8d',
      note: 'UTCV - H8 -LC3',
      image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      title: 'Card title 8',
      subtitle: 'Card subtitle 8',
      content: 'Here a small text description for the card content 8.'
    },
    {
      avatar: 'https://gravatar.com/avatar/h8i9j0a1b2c3d4e5f6g7?d=identicon&f=y',
      name: 'David Fernandez',
      time: '9d',
      note: 'UTCV - I9 -LC4',
      image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      title: 'Card title 9',
      subtitle: 'Card subtitle 9',
      content: 'Here a small text description for the card content 9.'
    },
    {
      avatar: 'https://gravatar.com/avatar/i9j0a1b2c3d4e5f6g7h8?d=identicon&f=y',
      name: 'Isabel Ortega',
      time: '10d',
      note: 'UTCV - J10 -LC1',
      image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      title: 'Card title 10',
      subtitle: 'Card subtitle 10',
      content: 'Here a small text description for the card content 10.'
    }
  ];


  constructor() { }

  ngOnInit() {}

}