import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  test: boolean = false;
  scrollfunction() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        this.test = true;
      }
      else {
        this.test = false;
      }
    })
  }

  constructor() {
    this.scrollfunction();
  }

  ngOnInit(): void {
  }

}
