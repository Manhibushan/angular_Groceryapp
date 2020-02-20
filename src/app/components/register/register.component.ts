import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public interests=[
 
    'Bakery','Drinks','Deserts'
 
]
public userModel=new User('', 'john@gmail.com','','','',true);


Onsubmit(dat)
{
  console.log(dat)
}
  constructor() { }

  ngOnInit(): void {
  }

}
