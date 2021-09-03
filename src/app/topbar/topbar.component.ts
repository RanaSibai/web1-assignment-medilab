import { Component, OnInit } from '@angular/core';
import { MedilabService } from '../services/medilab.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(public medilabSrv: MedilabService) { }

  ngOnInit(): void {
    this.medilabSrv.getTopbar();
  }

}
