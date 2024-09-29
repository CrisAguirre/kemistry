import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-estampados',
  templateUrl: './estampados.component.html',
  styleUrls: ['./estampados.component.css']
})
export class EstampadosComponent implements OnInit, AfterViewInit {
  constructor( private route: ActivatedRoute, private router: Router ) {}
  ngOnInit() {
    AOS.init();
    this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });
  }

  ngAfterViewInit() {
    this.playVideos();
  }

  playVideos() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.muted = true;
      video.playsInline = true;
      
      const playVideo = () => {
        video.play().catch(error => {
          console.log("Auto-play was prevented", error);
        });
      };

      video.addEventListener('loadedmetadata', playVideo);
      video.addEventListener('canplay', playVideo);
      
      // Reiniciar el video cuando termine
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        playVideo();
      });

      // Intenta reproducir inmediatamente
      playVideo();
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

