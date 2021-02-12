import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css']
})
export class PortComponent implements OnInit {

  test: boolean = true;
  welcome(e: any) {
    this.test = true;
    console.log(e)
  }
  imgTest() {
    alert("hello")
  }
  tryingout() {
    window.addEventListener("scroll", () => {
      this.test = false;

    })
  }
  constructor() {
    this.tryingout();
  }

  ngOnInit(): void {
  }

}
