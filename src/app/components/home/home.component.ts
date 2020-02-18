import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public categories=[]
public _imgurl='http://rjtmobile.com/grocery/images/';
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.getCategories().subscribe(
      x=>this.categories=x.data

    )
  }

}
