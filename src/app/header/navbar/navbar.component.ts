import { Component, OnInit } from '@angular/core';
import { MedilabService } from 'src/app/services/medilab.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public medilabSrv: MedilabService) { }

  ngOnInit(): void {
    this.medilabSrv.getNavbar();
  }

}
