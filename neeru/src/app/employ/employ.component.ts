import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { Router } from '@angular/router';
// import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {
employ : Observable<Employee>;
empno:number;
  constructor(private employeeService : EmployeeService, private router : Router) {
// this.empno = this.route.snapshot.params["empId"];
this.empno = parseInt(localStorage.getItem("empId"));
this.employ = employeeService.searchEmployee(this.empno);
   }
  ngOnInit() {
  }

}
