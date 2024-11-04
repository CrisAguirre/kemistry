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
  images3 = [
    {
      imageSrc:
        '../../assets/img/store/1/1.png',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/store/1/2.png',
      imageAlt: 'kemistry2',
    },
    {
      imageSrc:
        '../../assets/img/store/1/3.png',
      imageAlt: 'kemistry3',
    },
    {
      imageSrc:
        '../../assets/img/store/1/4.png',
      imageAlt: 'kemistry4',
    },
    {
      imageSrc:
        '../../assets/img/store/1/5.png',
      imageAlt: 'kemistry5',
    },
    {
      imageSrc:
        '../../assets/img/store/1/6.png',
      imageAlt: 'kemistry6',
    },
    {
      imageSrc:
        '../../assets/img/store/1/7.png',
      imageAlt: 'kemistry7',
    },
    {
      imageSrc:
        '../../assets/img/store/1/8.png',
      imageAlt: 'kemistry8',
    },
    {
      imageSrc:
        '../../assets/img/store/1/9.png',
      imageAlt: 'kemistry9',
    },
    {
      imageSrc:
        '../../assets/img/store/1/10.png',
      imageAlt: 'kemistry10',
    },
    {
      imageSrc:
        '../../assets/img/store/1/11.png',
      imageAlt: 'kemistry11',
    },
    {
      imageSrc:
        '../../assets/img/store/1/12.png',
      imageAlt: 'kemistry12',
    },
    {
      imageSrc:
        '../../assets/img/store/1/13.png',
      imageAlt: 'kemistry13',
    },
    {
      imageSrc:
        '../../assets/img/store/1/14.png',
      imageAlt: 'kemistry14',
    },
    {
      imageSrc:
        '../../assets/img/store/1/15.png',
      imageAlt: 'kemistry15',
    },
    {
      imageSrc:
        '../../assets/img/store/1/16.png',
      imageAlt: 'kemistry6',
    },
    {
      imageSrc:
        '../../assets/img/store/1/17.png',
      imageAlt: 'kemistry17',
    },
    {
      imageSrc:
        '../../assets/img/store/1/18.png',
      imageAlt: 'kemistry18',
    },
    {
      imageSrc:
        '../../assets/img/store/1/19.png',
      imageAlt: 'kemistry19',
    },
    {
      imageSrc:
        '../../assets/img/store/1/20.png',
      imageAlt: 'kemistry20',
    }
  ]
  images4 = [
    {
      imageSrc:
        '../../assets/img/store/2/1.png',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/store/2/2.png',
      imageAlt: 'kemistry2',
    },
    {
      imageSrc:
        '../../assets/img/store/2/3.png',
      imageAlt: 'kemistry2',
    },
    {
      imageSrc:
        '../../assets/img/store/2/4.png',
      imageAlt: 'kemistry4',
    },
    {
      imageSrc:
        '../../assets/img/store/2/5.png',
      imageAlt: 'kemistry5',
    },
    {
      imageSrc:
        '../../assets/img/store/2/6.png',
      imageAlt: 'kemistry6',
    },
    {
      imageSrc:
        '../../assets/img/store/2/7.png',
      imageAlt: 'kemistry7',
    },
    {
      imageSrc:
        '../../assets/img/store/2/8.png',
      imageAlt: 'kemistry8',
    },
    {
      imageSrc:
        '../../assets/img/store/2/9.png',
      imageAlt: 'kemistry9',
    },
    {
      imageSrc:
        '../../assets/img/store/2/10.png',
      imageAlt: 'kemistry10',
    },
    {
      imageSrc:
        '../../assets/img/store/2/11.png',
      imageAlt: 'kemistry11',
    },
    {
      imageSrc:
        '../../assets/img/store/2/12.png',
      imageAlt: 'kemistry12',
    },
    {
      imageSrc:
        '../../assets/img/store/2/13.png',
      imageAlt: 'kemistry12',
    },
    {
      imageSrc:
        '../../assets/img/store/2/14.png',
      imageAlt: 'kemistry14',
    },
    {
      imageSrc:
        '../../assets/img/store/2/15.png',
      imageAlt: 'kemistry15',
    },
    {
      imageSrc:
        '../../assets/img/store/2/16.png',
      imageAlt: 'kemistry6',
    },
    {
      imageSrc:
        '../../assets/img/store/2/17.png',
      imageAlt: 'kemistry17',
    },
    {
      imageSrc:
        '../../assets/img/store/2/18.png',
      imageAlt: 'kemistry18',
    },
    {
      imageSrc:
        '../../assets/img/store/2/19.png',
      imageAlt: 'kemistry19',
    },
    {
      imageSrc:
        '../../assets/img/store/2/20.png',
      imageAlt: 'kemistry20',
    },
    {
      imageSrc:
        '../../assets/img/store/2/21.png',
      imageAlt: 'kemistry20',
    },
    {
      imageSrc:
        '../../assets/img/store/2/22.png',
      imageAlt: 'kemistry20',
    }
  ]
  images5 = [
    {
      imageSrc:
        '../../assets/img/store/3/1.png',
      imageAlt: 'kemistry1',
    },
    {
      imageSrc:
        '../../assets/img/store/3/2.png',
      imageAlt: 'kemistry2',
    },
    {
      imageSrc:
        '../../assets/img/store/3/3.png',
      imageAlt: 'kemistry3',
    },
    {
      imageSrc:
        '../../assets/img/store/3/4.png',
      imageAlt: 'kemistry4',
    },
    {
      imageSrc:
        '../../assets/img/store/3/5.png',
      imageAlt: 'kemistry5',
    },
    {
      imageSrc:
        '../../assets/img/store/3/6.png',
      imageAlt: 'kemistry6',
    },
    {
      imageSrc:
        '../../assets/img/store/3/7.png',
      imageAlt: 'kemistry7',
    },
    {
      imageSrc:
        '../../assets/img/store/3/8.png',
      imageAlt: 'kemistry8',
    },
    {
      imageSrc:
        '../../assets/img/store/3/9.png',
      imageAlt: 'kemistry9',
    },
    {
      imageSrc:
        '../../assets/img/store/3/10.png',
      imageAlt: 'kemistry10',
    },
    {
      imageSrc:
        '../../assets/img/store/3/11.png',
      imageAlt: 'kemistry11',
    },
    {
      imageSrc:
        '../../assets/img/store/3/12.png',
      imageAlt: 'kemistry12',
    },
    {
      imageSrc:
        '../../assets/img/store/3/13.png',
      imageAlt: 'kemistry13',
    },
    {
      imageSrc:
        '../../assets/img/store/3/14.png',
      imageAlt: 'kemistry14',
    },
    {
      imageSrc:
        '../../assets/img/store/3/15.png',
      imageAlt: 'kemistry15',
    },
    {
      imageSrc:
        '../../assets/img/store/3/16.png',
      imageAlt: 'kemistry6',
    },
    {
      imageSrc:
        '../../assets/img/store/3/17.png',
      imageAlt: 'kemistry17',
    },
    {
      imageSrc:
        '../../assets/img/store/3/18.png',
      imageAlt: 'kemistry18',
    },
    {
      imageSrc:
        '../../assets/img/store/3/19.png',
      imageAlt: 'kemistry19',
    },
    {
      imageSrc:
        '../../assets/img/store/3/20.png',
      imageAlt: 'kemistry20',
    },
    {
      imageSrc:
        '../../assets/img/store/3/21.png',
      imageAlt: 'kemistry19',
    },
    {
      imageSrc:
        '../../assets/img/store/3/22.png',
      imageAlt: 'kemistry20',
    }
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
