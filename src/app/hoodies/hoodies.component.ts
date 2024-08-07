import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-hoodies',
  templateUrl: './hoodies.component.html',
  styleUrls: ['./hoodies.component.css']
})
export class HoodiesComponent implements OnInit, AfterViewInit {
    constructor( private route: ActivatedRoute, private router: Router ) {}

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

  images6= [
    {
      imageSrc:
        '../../assets/img/hoodies/slide/1.jpg',
      imageAlt: 'kemistry_hoodies1',
    },
    {
      imageSrc:
        '../../assets/img/hoodies/slide/2.jpg',
      imageAlt: 'kemistry_hoodies2',
    },
    {
      imageSrc:
        '../../assets/img/hoodies/slide/3.jpg',
      imageAlt: 'kemistry_hoodies3',
    }
      
  ]

  images6m= [
    {
      imageSrc:
        '../../assets/img/hoodies/slide/1m.jpg',
      imageAlt: 'kemistry_hoodies1',
    },
    {
      imageSrc:
        '../../assets/img/hoodies/slide/2m.jpg',
      imageAlt: 'kemistry_hoodies2',
    },
    {
      imageSrc:
        '../../assets/img/hoodies/slide/3m.jpg',
      imageAlt: 'kemistry_hoodies3',
    },

  ]

  images4 = [
    {
      imageSrc:
        '../../assets/img/store/5.png',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/store/6.png',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/store/7.png',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/store/8.png',
      imageAlt: 'kemistry1',
    }
  ]
    images5 = [
      {
        imageSrc:
          '../../assets/img/store/1.png',
        imageAlt: 'kemistry1',
      },
      {
        imageSrc:
          '../../assets/img/store/2.png',
        imageAlt: 'kemistry1',
      },
      {
        imageSrc:
          '../../assets/img/store/3.png',
        imageAlt: 'kemistry1',
      },
      {
        imageSrc:
          '../../assets/img/store/4.png',
        imageAlt: 'kemistry1',
      },
    ]

}
