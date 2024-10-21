import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-raglan',
  templateUrl: './raglan.component.html',
  styleUrls: ['./raglan.component.css']
})
export class RaglanComponent implements OnInit, AfterViewInit {
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
    }
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
    }
  ]

  images4 = [
    {
      imageSrc:
        '../../assets/img/store/22.png',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/store/26.png',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/store/12.png',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/store/24.png',
      imageAlt: 'kemistry1',
    },
  ]
  images5 = [
    {
      imageSrc:
        '../../assets/img/store/27.png',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/store/13.png',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/store/9.png',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/store/11.png',
      imageAlt: 'kemistry1',
    },
  ]
}
