import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AboutUs } from '../classes/about-us';
import { Counts } from '../classes/counts';
import { Deepdropdown } from '../classes/deepdropdown';
import { Departments } from '../classes/departments';
import { Doctors } from '../classes/doctors';
import { Dropdown } from '../classes/dropdown';
import { Faq } from '../classes/faq';
import { Gallery } from '../classes/gallery';
import { Navbar } from '../classes/navbar';
import { Services } from '../classes/services';
import { Testimonials } from '../classes/testimonials';
import { Topbar } from '../classes/topbar';
import { WhyUs } from '../classes/why-us';

@Injectable({
  providedIn: 'root'
})
export class MedilabService {

  doctors: Doctors[] = [];
  services: Services[] = [];
  departments: Departments[] = [];
  counts: Counts[] = [];
  whyUs: WhyUs[] = [];
  aboutUs: AboutUs[] = [];
  testimonials: Testimonials[] = [];
  gallery: Gallery[] = [];
  faqs: Faq[] = [];
  navbar: Navbar[] = [];
  dropdown: Dropdown[] = [];
  deepdropdown: Deepdropdown[] = [];
  topbar: Topbar[] = [];

  constructor(
    public apiCaller: HttpClient
  ) {
  }

  getDoctors = (): void => {
    this.apiCaller.get('https://medilab-api.herokuapp.com/getDoctors')
      .subscribe((json: any) => {
        for (let i = 0; i < json.length; i++) {
          const doctor = new Doctors(
            json[i].Name,
            json[i].Title,
            json[i].Description,
            json[i].Image
          );
          this.doctors.push(doctor);
        }
      })
  }

  getDepartments = (): void => {
    this.apiCaller.get('https://medilab-api.herokuapp.com/getDepartments')
      .subscribe((json: any) => {
        for (let i = 0; i < json.length; i++) {
          const department = new Departments(
            json[i].Department,
            json[i].Brief,
            json[i].Title,
            json[i].Description,
            json[i].Image
          );
          this.departments.push(department);
        }
      })
  }

  getServices = (): void => {
    this.apiCaller.get('https://medilab-api.herokuapp.com/getServices')
      .subscribe((json: any) => {
        for (let i = 0; i < json.length; i++) {
          const service = new Services(
            json[i].ServiceName,
            json[i].Description,
            json[i].Icon
          );
          this.services.push(service);
        }
      })
  }

  getCounts = (): void => {
    this.apiCaller.get('https://medilab-api.herokuapp.com/getCounts')
      .subscribe((json: any) => {
        for (let i = 0; i < json.length; i++) {
          const count = new Counts(
            json[i].countName,
            json[i].Icon,
            json[i].Class,
            json[i].dataCounterEnd
          );
          this.counts.push(count);
        }
      })
  }

  getWhyUs = (): void => {
    this.apiCaller.get('https://medilab-api.herokuapp.com/getWhyUs')
      .subscribe((json: any) => {
        for (let i = 0; i < json.length; i++) {
          const whyUsDetail = new WhyUs(
            json[i].Title,
            json[i].Description,
            json[i].IconClass,
          );
          this.whyUs.push(whyUsDetail);
        }
      })
  }

  getAboutUs = (): void => {
    this.apiCaller.get('https://medilab-api.herokuapp.com/getAboutUs')
      .subscribe((json: any) => {
        for (let i = 0; i < json.length; i++) {
          const aboutUsDetail = new AboutUs(
            json[i].Title,
            json[i].Description,
            json[i].IconClass,
          );
          this.aboutUs.push(aboutUsDetail);
        }
      })
  }

  getTestimonials = (): void => {
    this.apiCaller.get('https://medilab-api.herokuapp.com/getTestimonials')
      .subscribe((json: any) => {
        for (let i = 0; i < json.length; i++) {
          const testimonial = new Testimonials(
            json[i].Name,
            json[i].Title,
            json[i].Details,
            json[i].Image
          );
          this.testimonials.push(testimonial);
        }
      })
  }

  getGallery = (): void => {
    this.apiCaller.get('https://medilab-api.herokuapp.com/getGallery')
      .subscribe((json: any) => {
        for (let i = 0; i < json.length; i++) {
          const gallery = new Gallery(
            json[i].ImagePath
          );
          this.gallery.push(gallery);
        }
      })
  }

  getFAQ = (): void => {
    this.apiCaller.get('https://medilab-api.herokuapp.com/getFAQ')
      .subscribe((json: any) => {
        for (let i = 0; i < json.length; i++) {
          const faq = new Faq(
            json[i].Question,
            json[i].Answer
          );
          this.faqs.push(faq);
        }
      })
  }

  getNavbar = (): void => {
    this.apiCaller.get('https://medilab-api.herokuapp.com/getNavbar')
      .subscribe((json: any) => {
        for (let i = 0; i < json.length; i++) {
          const navbar = new Navbar(
            json[i].Title,
            json[i].Link
          );
          this.navbar.push(navbar);
        }
      })
  }

  getDropDown = (): void => {
    this.apiCaller.get('https://medilab-api.herokuapp.com/getDropDown')
      .subscribe((json: any) => {
        for (let i = 0; i < json.length; i++) {
          const dropdownitem = new Dropdown(
            json[i].DropDownItem,
          );
          this.dropdown.push(dropdownitem);
        }
      })
  }

  getDeepDropDown = (): void => {
    this.apiCaller.get('https://medilab-api.herokuapp.com/getDeepDropDown')
      .subscribe((json: any) => {
        for (let i = 0; i < json.length; i++) {
          const deepdropdownitem = new Deepdropdown(
            json[i].DropDownItem,
          );
          this.deepdropdown.push(deepdropdownitem);
        }
      })
  }

  getTopbar = (): void => {
    this.apiCaller.get('https://medilab-api.herokuapp.com/getTopbar')
      .subscribe((json: any) => {
        for (let i = 0; i < json.length; i++) {
          const topbar = new Topbar(
            json[i].SocialMediaPlatform,
            json[i].Icon
          );
          this.topbar.push(topbar);
        }
      })
  }
}