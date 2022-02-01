import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
