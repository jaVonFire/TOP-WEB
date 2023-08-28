import { Component, Input, OnInit } from '@angular/core';

import { SliderImage } from '../../interfaces/home.interface';

@Component({
  selector: 'home-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{

  @Input()
  imgs: SliderImage[] = []

  @Input()
  indicators = true;

  @Input()
  controls = true;

  @Input()
  autoSlide = true;

  selectIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages()
    }
  }

  autoSlideImages(): void {
    setInterval(()=>{
      this.onPostClick();
    }, 3000)
  }

  selectImage(index: number): void {
    this.selectIndex = index;
  }

  onPrevClick(): void {
    if (this.selectIndex === 0){
      this.selectIndex = this.imgs.length -1;
    } else {
      this.selectIndex--;
    }
  }

  onPostClick(): void {
    if (this.selectIndex === this.imgs.length - 1){
      this.selectIndex = 0;
    } else {
      this.selectIndex++;
    }
  }
}
