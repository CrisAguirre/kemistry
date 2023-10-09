import { Component, Input, OnInit } from '@angular/core';

interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.css']
})
export class Carousel2Component implements OnInit {

  @Input() images: carouselImage[] = []
  @Input() images2: carouselImage[] = []
  @Input() images3: carouselImage[] = []
  @Input() images4: carouselImage[] = []
  @Input() images5: carouselImage[] = []

  @Input() indicators = false;
  @Input() controls = false;
  @Input() autoSlide = true;
  @Input() slideInterval = 500;

  selectedIndex = 0;
  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  ngOnInit(): void {
    if(this.autoSlide) {
    this.autoSlideImages();
    }
  }
    
  autoSlideImages(): void {
    setInterval(() => { 
      this.onNextClick();    
    }, this.slideInterval);
  }

  onPrevClick():void {
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    }else{
      this.selectedIndex--;
    }
  }

  onNextClick():void {
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }

}
