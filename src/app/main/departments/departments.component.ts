import { Component, OnInit } from '@angular/core';
import { MedilabService } from 'src/app/services/medilab.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(public medilabSrv: MedilabService) { }

  ngOnInit(): void {
    this.medilabSrv.getDepartments();
  }

}
