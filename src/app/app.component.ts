import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	url = [];
  
  @ViewChild('text') text: ElementRef;

  onAdd() {
    var x = this.text.nativeElement.value.length * Math.random();
    x = x - Math.floor(x) - Math.random();
    this.url.push({
    	orig: this.text.nativeElement.value,
    	short: "too.pp/" + x.toString(36).substr(4,7)
    });
  }

}

