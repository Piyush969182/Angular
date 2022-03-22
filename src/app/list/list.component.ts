import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
