import { Component, OnInit } from '@angular/core';
import {  HostListener } from '@angular/core';
import * as $ from 'jquery'
import { element } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hamburgerChk=false;

  constructor() { }

  ngOnInit(): void {

  }

  checkhh()
  {
    
  }

@HostListener('window:scroll', ['$event'])
onWindowScroll(e:any) { 
    const element = document.querySelector('.navbar');
    if(element)
    {
      if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
      // console.log("works");
    } else if(window.pageYOffset != element.clientHeight && this.hamburgerChk ==false) {
      element.classList.remove('navbar-inverse');
      console.log("works else");  
    }
    }
  }
  
  hamburger()
  {
    console.log("hamburger");
    const element = document.querySelector('.navbar');
    this.hamburgerChk=!this.hamburgerChk;
    if(element)
    {
      if(this.hamburgerChk==true)
      {
              element.classList.add('navbar-inverse');
              console.log(this.hamburgerChk)
      }
      else
      {
              element.classList.remove('navbar-inverse');
              console.log(this.hamburgerChk)
      }
    }
    

  }
  //   hamburgerChk = !hamburgerChk;
  //   const element = document.querySelector('.navbar');
  //   if(element)
  //   {
  //     if (window.pageYOffset > element.clientHeight) {
  //     element.classList.add('navbar-inverse');
  //     // console.log("works");
  //   } else {
  //     element.classList.remove('navbar-inverse');
  //     // console.log("works else");  
  //   }
  //   }
  // }

  onClickk(id:string)
    {
      // var target= event.target;
      // var hash= event.target.attributes[1].value;
      // var rr=$(target).html();
      // console.log(hash);
      var elem = document.getElementById(id);
      // document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
      if(elem)
      window.scroll({ top: (elem.offsetTop - 55), left: 0, behavior: 'smooth' });

              
    }
}
