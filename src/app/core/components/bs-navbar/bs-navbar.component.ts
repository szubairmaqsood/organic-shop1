import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  menuClass:string="menuListHidden";
  constructor() { }

  ngOnInit(): void {
  }

  showMenu(){
    //alert("Named Clicked");
    if(this.menuClass=="menuListHidden")
    {
      this.menuClass="menuListshow";
    }else{
      this.menuClass="menuListHidden";
    }
  }

}
