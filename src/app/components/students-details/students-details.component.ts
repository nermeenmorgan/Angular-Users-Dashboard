import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})

export class StudentsDetailsComponent implements OnInit{
constructor(public myService: MyServiceService){}
Stds:any;
  ngOnInit(): void {
this.myService.getAllUsers().subscribe({
  next:(data: any) => {
    console.log(data);
this.Stds=data;
  },
  error:(error: any) => {
    console.log(error);
  }
 }
 )
}
}
