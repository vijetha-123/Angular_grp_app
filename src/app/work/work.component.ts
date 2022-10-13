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

toggleContent1(){
  var content='';
  if(this.productDetail1){
    content='fa-solid fa-plus';
  }
  else{
    content='fa-solid fa-minus';
  }
  return content;
}
//222222222222222222222222222
productDetail2=true;
//Event to perform the toggle effect
showproductDetailsToggle2()
{
  this.productDetail2=!this.productDetail2;
}

toggleContent2(){
  var content='';
  if(this.productDetail2){
    content='fa-solid fa-plus';
  }
  else{
    content='fa-solid fa-minus';
  }
  return content;
}
//3333333333333333333333333333333
productDetail3=true;
//Event to perform the toggle effect
showproductDetailsToggle3()
{
  this.productDetail3=!this.productDetail3;
}

toggleContent3(){
  var content='';
  if(this.productDetail3){
    content='fa-solid fa-plus';
  }
  else{
    content='fa-solid fa-minus';
  }
  return content;
}
//444444444444444444444444444444444
productDetail4=true;
//Event to perform the toggle effect
showproductDetailsToggle4()
{
  this.productDetail4=!this.productDetail4;
}

toggleContent4(){
  var content='';
  if(this.productDetail4){
    content='fa-solid fa-plus';
  }
  else{
    content='fa-solid fa-minus';
  }
  return content;
}
//555555555555555555555555555555555
productDetail5=true;
//Event to perform the toggle effect
showproductDetailsToggle5()
{
  this.productDetail5=!this.productDetail5;
}

toggleContent5(){
  var content='';
  if(this.productDetail5){
    content='fa-solid fa-plus';
  }
  else{
    content='fa-solid fa-minus';
  }
  return content;
}
//666666666666666666666666666666666
productDetail6=true;
//Event to perform the toggle effect
showproductDetailsToggle6()
{
  this.productDetail6=!this.productDetail6;
}

toggleContent6(){
  var content='';
  if(this.productDetail6){
    content='fa-solid fa-plus';
  }
  else{
    content='fa-solid fa-minus';
  }
  return content;
}


  constructor() { }

  ngOnInit(): void {
  }

}
