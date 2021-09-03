import { Component, OnInit } from '@angular/core';
import { MedilabService } from 'src/app/services/medilab.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(public medilabSrv: MedilabService) {

  }

  ngOnInit(): void {
    this.medilabSrv.getFAQ();
  }

}
