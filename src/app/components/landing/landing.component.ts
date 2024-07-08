import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
  images2 = [
    {
      imageSrc:
        '../../assets/img/slide2/1.jpg',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/slide2/2.jpg',
      imageAlt: 'kemistry2',
    },
    {
      imageSrc:
        '../../assets/img/slide2/3.jpg',
      imageAlt: 'kemistry3',
    },
    {
      imageSrc:
        '../../assets/img/slide2/4.jpg',
      imageAlt: 'kemistry4',
    },
  ]

  images = [
    {
      imageSrc:
        '../../assets/img/slide/1.jpg',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/slide/2.jpg',
      imageAlt: 'kemistry2',
    },
    {
      imageSrc:
        '../../assets/img/slide/3.jpg',
      imageAlt: 'kemistry3',
    },
    {
      imageSrc:
        '../../assets/img/slide/4.jpg',
      imageAlt: 'kemistry4',
    },
    {
      imageSrc:
        '../../assets/img/slide/5.jpg',
      imageAlt: 'kemistry5',
    }
  ]

}
