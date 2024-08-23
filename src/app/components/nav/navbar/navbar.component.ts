import { Component } from '@angular/core';
import { footer } from 'src/app/demoData';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  courses :any = footer.courses;
  constructor(){
    console.log(footer,'footer')
  }

}
