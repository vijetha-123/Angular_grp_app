import { Component, OnInit } from '@angular/core';
import * as loadCardsa from '../blog/blogcol1.json';
import * as loadCardsb from '../blog/blogcol2.json';
import * as loadCardsc from '../blog/blogcol3.json';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cardsa:any = (loadCardsa as any).default;
 cardsb:any = (loadCardsb as any).default;
  cardsc:any = (loadCardsc as any).default;
  loadcard=true;
  showloadcard(){
    this.loadcard=!this.loadcard;
  }
}
