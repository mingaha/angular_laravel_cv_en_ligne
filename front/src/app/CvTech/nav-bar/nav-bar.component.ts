import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  header_variable = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop >200){
      this.header_variable=true;
    }
    else{
      this.header_variable=false;
    }
  }
}
