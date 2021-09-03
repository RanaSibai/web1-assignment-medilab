import { Component, OnInit } from '@angular/core';
import { MedilabService } from 'src/app/services/medilab.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public medilabSrv: MedilabService) { }

  ngOnInit(): void {
    this.medilabSrv.getAboutUs();
  }

}
