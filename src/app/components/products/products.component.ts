import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public subCategory: any;
  constructor( private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.getSubCategory(1).subscribe(
      x=>this.subCategory=x.data
    )
  }

}
