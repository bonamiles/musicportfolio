import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//   onClick()
//   {
//     var x=new XMLHttpRequest();
// x.timeout=15000;
// x.open('GET','https://www.facebook.com/');
// x.onreadystatechange=function(){
//     if(this.readyState==4){
//         if(this.status==200){
//             console.log('url exists');
//         } else {
//             console.log('url does not exist');
//         }
//     }
// }
// x.send();
//   }

  onClick() {
    const xhr = new XMLHttpRequest(),
      method = "GET",
      url = "https://www.google.com/maps/reserve/v/dine/c/-_dD6xJ-TKs?source=pa&hl=en-IN&gei=_ZXPYP3wA9PZrQH4n7sI&sourceurl=https://www.google.com/maps/preview/place?authuser%3D0%26hl%3Den%26gl%3Din%26pb%3D!1m19!1s0x3bcb96d4ae0be51d:0x83b4cf799a5e189a!3m12!1m3!1d3096.113140633878!2d78.48525151418959!3d17.531183303257865!2m3!1f0!2f0!3f0!3m2!1i1366!2i625!4f13.1!4m2!3d17.423973399999998!4d78.4247463!5e0!9e0!12m4!2m3!1i360!2i120!4i8!13m65!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m50!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e3!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e3!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e9!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!2b1!4b1!9b0!14m5!1s-ZXPYNuROoz0rQGq9YKADA!4m1!2i6986!7e81!12e3!15m54!1m16!13m7!2b1!3b1!4b1!6i1!8b1!9b1!20b1!18m7!3b1!4b1!5b1!6b1!9b1!13b1!14b0!2b1!5m5!2b1!3b1!5b1!6b1!7b1!10m1!8e3!14m1!3b1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!43b1!52b1!54m1!1b1!55b1!56m2!1b1!3b1!65m5!3m4!1m3!1m2!1i224!2i298!89b1!21m28!1m6!1m2!1i0!2i0!2m2!1i458!2i625!1m6!1m2!1i1316!2i0!2m2!1i1366!2i625!1m6!1m2!1i0!2i0!2m2!1i1366!2i20!1m6!1m2!1i0!2i605!2m2!1i1366!2i625!22m1!1e81!29m0!30m1!3b1!34m2!7b1!10b1!37i560%26q%3DPlot%2BNo.%2B217,%2BCOCO%27S%2BBar%2Band%2BGrill,%2BRoad%2BNumber%2B2,%2BTDP%2Boffice,%2BPark%2BView%2BEnclave,%2BBanjara%2BHills,%2BHyderabad,%2BTelangana";

    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
      // In local files, status is 0 upon success in Mozilla Firefox
      if (xhr.readyState === XMLHttpRequest.DONE) {
        var status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          // The request has been completed successfully
          console.log(xhr.responseText);
          window.open(url, "_blank");
        } else {
          // Oh no! There has been an error with the request!
        }
      }
    };
    xhr.send();
  }
}
