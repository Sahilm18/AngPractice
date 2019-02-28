import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveDetails } from '../leave-details';
import { LeaveDetailsService } from '../leave-details.service';


@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {
  empNo : string;
  leavedetails : Observable<LeaveDetails[]>;

  constructor(private leaveDetailsService : LeaveDetailsService) { 
    this.empNo = localStorage.getItem("empId")
    this.leavedetails = leaveDetailsService.getHistory(this.empNo);
  }

 
  ngOnInit() {
  }

}
