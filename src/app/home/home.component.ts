import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any[]=[
    {
      id:'1',
      name:"Piyush",
      username:'Piyush123',
      email:'piyush@gmail.com'
    },
    {
      id:'2 ',
      name:"Jaydeep",
      username:'Jaydeep123',
      email:'Jaydeep@gmail.com'
    },
    {
      id:'3',
      name:"Kunal",
      username:'Kunal123',
      email:'Kunal@gmail.com'
    }
  ]
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  //  this.route.paramMap.subscribe(qa=>{
  //    console.log(qa);
  //  })
  // alert('hello');

  }

}
