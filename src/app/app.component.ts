import { Component } from '@angular/core';
import { navigate } from "utility-router";

@Component({
  selector: 'app-basic-data-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-data';


  volver(){

    const  path : string = ``;
    navigate(path);

  }
}
