import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../share/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee: Employee;
    private selectedId: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedId = +this.route.snapshot.paramMap.get('id');
  }

}
