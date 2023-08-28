import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images = [
    {
      imgSrc: '/assets/img/self-titled.jpg',
      imgAlt: 'Self Titled'
    },
    {
      imgSrc: '/assets/img/rab.jpeg',
      imgAlt: 'Regional At Best'
    },
    {
      imgSrc: '/assets/img/vessel.jpg',
      imgAlt: 'Vessel'
    },
    {
      imgSrc: '/assets/img/blurryface.jpg',
      imgAlt: 'Blurryface'
    },
    {
      imgSrc: '/assets/img/trench.jpg',
      imgAlt: 'Trench'
    },
    {
      imgSrc: '/assets/img/sai.jpg',
      imgAlt: 'Scaled And Icy'
    },
  ]

}
