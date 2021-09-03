import { Component, OnInit } from '@angular/core';
import { MedilabService } from 'src/app/services/medilab.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public medilabSrv: MedilabService) { }

  ngOnInit(): void {
    this.medilabSrv.getServices();
  }

}
