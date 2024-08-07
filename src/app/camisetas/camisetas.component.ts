import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-camisetas',
  templateUrl: './camisetas.component.html',
  styleUrls: ['./camisetas.component.css']
})
export class CamisetasComponent implements OnInit, AfterViewInit {
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
  
  images9= [
    {
      imageSrc:
        '../../assets/img/camisetas/slide/1.jpg',
      imageAlt: 'kemistry_hoodies1',
    },
    {
      imageSrc:
        '../../assets/img/camisetas/slide/2.jpg',
      imageAlt: 'kemistry_hoodies2',
    },
    {
      imageSrc:
        '../../assets/img/camisetas/slide/3.jpg',
      imageAlt: 'kemistry_hoodies3',
    },
    {
      imageSrc:
        '../../assets/img/camisetas/slide/4.jpg',
      imageAlt: 'kemistry_hoodies4',
    }
  ]
  images9m= [
    {
      imageSrc:
        '../../assets/img/camisetas/slide/1m.jpg',
      imageAlt: 'kemistry_hoodies1',
    },
    {
      imageSrc:
        '../../assets/img/camisetas/slide/2m.jpg',
      imageAlt: 'kemistry_hoodies2',
    },
    {
      imageSrc:
        '../../assets/img/camisetas/slide/3m.jpg',
      imageAlt: 'kemistry_hoodies3',
    },
    {
      imageSrc:
        '../../assets/img/camisetas/slide/4m.jpg',
      imageAlt: 'kemistry_hoodies4',
    }
  ]
}
