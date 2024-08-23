import { Component, OnInit } from '@angular/core';
declare var Swiper: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  index_img = '../../../../assets/ogban.png'
  
  ngOnInit(): void {
    this.initializeSwiper();
  }

  initializeSwiper(): void {
    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        540: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        868: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1160: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }
}
