import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-estampados',
  templateUrl: './estampados.component.html',
  styleUrls: ['./estampados.component.css']
})
export class EstampadosComponent implements OnInit, AfterViewInit {
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
  images8= [
    {
      imageSrc:
        '../../assets/img/estampados/slide/1.jpg',
      imageAlt: 'kemistry_hoodies1',
    },
    {
      imageSrc:
        '../../assets/img/estampados/slide/2.jpg',
      imageAlt: 'kemistry_hoodies2',
    },
    {
      imageSrc:
        '../../assets/img/estampados/slide/3.jpg',
      imageAlt: 'kemistry_hoodies3',
    },
    {
      imageSrc:
        '../../assets/img/estampados/slide/4.jpg',
      imageAlt: 'kemistry_hoodies4',
    }
  ]
  images8m= [
    {
      imageSrc:
        '../../assets/img/estampados/slide/1m.jpg',
      imageAlt: 'kemistry_hoodies1',
    },
    {
      imageSrc:
        '../../assets/img/estampados/slide/2m.jpg',
      imageAlt: 'kemistry_hoodies2',
    },
    {
      imageSrc:
        '../../assets/img/estampados/slide/3m.jpg',
      imageAlt: 'kemistry_hoodies3',
    },
    {
      imageSrc:
        '../../assets/img/estampados/slide/4m.jpg',
      imageAlt: 'kemistry_hoodies4',
    }
  ]
}

