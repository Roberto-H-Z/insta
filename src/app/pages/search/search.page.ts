import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: false,
})
export class SearchPage implements OnInit {

  images: any[] = [
    { img: 'https://randomuser.me/api/portraits/men/1.jpg', size: '6' },
    { img: 'https://randomuser.me/api/portraits/women/2.jpg', size: '6' },
    { img: 'https://randomuser.me/api/portraits/men/3.jpg', size: '4' },
    { img: 'https://randomuser.me/api/portraits/women/4.jpg', size: '4' },
    { img: 'https://randomuser.me/api/portraits/men/5.jpg', size: '4' },
    { img: 'https://randomuser.me/api/portraits/women/6.jpg', size: '6' },
    { img: 'https://randomuser.me/api/portraits/men/7.jpg', size: '6' },
    { img: 'https://randomuser.me/api/portraits/women/8.jpg', size: '6' },
    { img: 'https://randomuser.me/api/portraits/men/9.jpg', size: '6' },
    { img: 'https://randomuser.me/api/portraits/women/10.jpg', size: '3' },
    { img: 'https://randomuser.me/api/portraits/men/11.jpg', size: '3' },
    { img: 'https://randomuser.me/api/portraits/women/12.jpg', size: '3' },
    { img: 'https://randomuser.me/api/portraits/men/13.jpg', size: '3' },
    { img: 'https://randomuser.me/api/portraits/women/14.jpg', size: '6' },
    { img: 'https://randomuser.me/api/portraits/men/15.jpg', size: '6' },
    { img: 'https://randomuser.me/api/portraits/women/16.jpg', size: '4' },
    { img: 'https://randomuser.me/api/portraits/men/17.jpg', size: '4' },
    { img: 'https://randomuser.me/api/portraits/women/18.jpg', size: '4' },
];

  

  constructor() { }

  ngOnInit() {
  }

}
