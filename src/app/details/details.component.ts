import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  //    this.route.paramMap.subscribe(qa=>{
  //    console.log(qa);
  //    alert("id is: "+qa.get('id'));
  //  })
   this.route.paramMap.subscribe(qa=>{
    console.log(qa);
    alert("username is: "+qa.getAll('username'));
  })
  }
}
