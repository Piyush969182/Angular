import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(qa=>{
      console.log(qa);
      alert("id is: "+qa.get('id'));
    })
  }
}
