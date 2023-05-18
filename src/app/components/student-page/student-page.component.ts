import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {
id:any;
pageElem:any
  constructor(myRoute:ActivatedRoute, public myService:MyServiceService){
this.id = myRoute.snapshot.params['id'];
}
  ngOnInit(): void {
    this.myService.GetUserByID(this.id).subscribe(
      {next: (data) =>
        this.pageElem=data
      ,
      error:(err)=>console.log(err)
    }
    )
  }
}
