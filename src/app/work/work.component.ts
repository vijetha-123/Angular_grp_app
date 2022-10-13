import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  //11111111111111111111111111111111
productDetail1=true;
//Event to perform the toggle effect
showproductDetailsToggle1()
{
  this.productDetail1=!this.productDetail1;
}


//222222222222222222222222222
productDetail2=true;
//Event to perform the toggle effect
showproductDetailsToggle2()
{
  this.productDetail2=!this.productDetail2;
}


//3333333333333333333333333333333
productDetail3=true;
//Event to perform the toggle effect
showproductDetailsToggle3()
{
  this.productDetail3=!this.productDetail3;
}


//444444444444444444444444444444444
productDetail4=true;
//Event to perform the toggle effect
showproductDetailsToggle4()
{
  this.productDetail4=!this.productDetail4;
}


//555555555555555555555555555555555
productDetail5=true;
//Event to perform the toggle effect
showproductDetailsToggle5()
{
  this.productDetail5=!this.productDetail5;
}


//666666666666666666666666666666666
productDetail6=true;
//Event to perform the toggle effect
showproductDetailsToggle6()
{
  this.productDetail6=!this.productDetail6;
}


  constructor() { }

  ngOnInit(): void {
  }

}
