import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  productDetail1=true;
//Event to perform the toggle effect
showproductDetailsToggle1()
{
  this.productDetail1=!this.productDetail1;
}
productDetail2=true;
//Event to perform the toggle effect
showproductDetailsToggle2()
{
  this.productDetail2=!this.productDetail2;
}
productDetail3=true;
//Event to perform the toggle effect
showproductDetailsToggle3()
{
  this.productDetail3=!this.productDetail3;
}
productDetail4=true;
//Event to perform the toggle effect
showproductDetailsToggle4()
{
  this.productDetail4=!this.productDetail4;
}
productDetail5=true;
//Event to perform the toggle effect
showproductDetailsToggle5()
{
  this.productDetail5=!this.productDetail5;
}
productDetail6=true;
//Event to perform the toggle effect
showproductDetailsToggle6()
{
  this.productDetail6=!this.productDetail6;
}
productDetail7=true;
//Event to perform the toggle effect
showproductDetailsToggle7()
{
  this.productDetail7=!this.productDetail7;
}
productDetail8=true;
//Event to perform the toggle effect
showproductDetailsToggle8()
{
  this.productDetail8=!this.productDetail8;
}


  constructor() { }

  ngOnInit(): void {
  }

}
