import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-camisetas',
  templateUrl: './camisetas.component.html',
  styleUrls: ['./camisetas.component.css']
})
export class CamisetasComponent implements OnInit, AfterViewInit {
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
  images4 = [
    {
      imageSrc:
        '../../assets/img/store/33.png',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/store/31.png',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/store/29.png',
      imageAlt: 'kemistry1',
    },
  ]
  images5 = [
    {
      imageSrc:
        '../../assets/img/store/32.png',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/store/30.png',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/store/28.png',
      imageAlt: 'kemistry1',
    },
  ]
}
