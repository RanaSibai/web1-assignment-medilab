import { Component, OnInit } from '@angular/core';
import { MedilabService } from 'src/app/services/medilab.service';
import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor(public medilabSrv: MedilabService) { }

  ngOnInit(): void {

    /**
 * Testimonials slider
 */
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },

        1200: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    });

    this.medilabSrv.getTestimonials();
  }

}
