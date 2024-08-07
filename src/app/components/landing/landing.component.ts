import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit, AfterViewInit {
  constructor( private route: ActivatedRoute, private router: Router ) {}

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
  
  onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )
      if ( element ) element.scrollIntoView(true)
    });
  }
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
  imagesm = [
    {
      imageSrc:
        '../../assets/img/slide/1m.jpg',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/slide/2m.jpg',
      imageAlt: 'kemistry2',
    },
    {
      imageSrc:
        '../../assets/img/slide/3m.jpg',
      imageAlt: 'kemistry3',
    },
    {
      imageSrc:
        '../../assets/img/slide/4m.jpg',
      imageAlt: 'kemistry4',
    },
    {
      imageSrc:
        '../../assets/img/slide/5m.jpg',
      imageAlt: 'kemistry5',
    }
  ]

}
