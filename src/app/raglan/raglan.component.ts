import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-raglan',
  templateUrl: './raglan.component.html',
  styleUrls: ['./raglan.component.css']
})
export class RaglanComponent implements OnInit, AfterViewInit {
  ngOnInit() {}

  ngAfterViewInit() {
    this.playVideos();
  }

  playVideos() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.play().catch(error => {
        console.log("Auto-play was prevented");
        // Puedes mostrar un botón de play aquí si lo deseas
      });
    });
  }

  images7 = [
    {
      imageSrc:
        '../../assets/img/raglan/slide/1.jpg',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/raglan/slide/2.jpg',
      imageAlt: 'kemistry2',
    },
    {
      imageSrc:
        '../../assets/img/raglan/slide/3.jpg',
      imageAlt: 'kemistry3',
    },
    {
      imageSrc:
        '../../assets/img/raglan/slide/4.jpg',
      imageAlt: 'kemistry4',
    },
  ]
  images7m = [
    {
      imageSrc:
        '../../assets/img/raglan/slide/1m.jpg',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/raglan/slide/2m.jpg',
      imageAlt: 'kemistry2',
    },
    {
      imageSrc:
        '../../assets/img/raglan/slide/3m.jpg',
      imageAlt: 'kemistry3',
    },
    {
      imageSrc:
        '../../assets/img/raglan/slide/4m.jpg',
      imageAlt: 'kemistry4',
    },
  ]

}
