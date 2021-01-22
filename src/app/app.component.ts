import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-finder';
  public name=" ";
  public address="";
  public keyPressed=false;

display() {
    this.keyPressed= true;
  }
}
