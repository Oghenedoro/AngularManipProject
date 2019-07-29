import { Component, OnInit } from '@angular/core';
import { Employee } from '../../share/employee.model';
import { Router } from '@angular/router';
import { EmployeeService } from '../../share/employee.service';


@Component({
  selector: 'app-list-emplotees',
  templateUrl: './list-emplotees.component.html',
  styleUrls: ['./list-emplotees.component.css']
})
export class ListEmploteesComponent implements OnInit {

  employees: Employee[];

  constructor(private router: Router, private employeeService: EmployeeService) { }

  
  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

  onClick(employeeid: number) {
    this.router.navigate(['/employees', employeeid])
  }
}
