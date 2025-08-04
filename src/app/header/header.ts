import{ Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone:false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected readonly title = 'Header Component';
  protected readonly subtitle = 'Welcome to the Header Section';
}