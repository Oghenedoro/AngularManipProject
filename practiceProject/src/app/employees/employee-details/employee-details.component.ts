import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../share/employee.service';
import { Employee } from '../../share/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;
  private _id: number;
  constructor(private route: ActivatedRoute, private router: Router, private employeeService :EmployeeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      this._id = +p.get('id');
      this.employee = this.employeeService.getEmployeeById(this._id);
    });
    
   
  }

  nextEmployee() {
    if (this._id < 3) {
      this._id++;
    }else {
        this._id = 1;
    }
  this.router.navigate(['/employees', this._id])
  }
 
  }

