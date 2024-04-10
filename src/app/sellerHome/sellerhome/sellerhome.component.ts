import { Component } from '@angular/core';
import { SellersidebarComponent } from '../sellersidebar/sellersidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sellerhome',
  standalone: true,
  imports: [SellersidebarComponent,RouterOutlet],
  templateUrl: './sellerhome.component.html',
  styleUrl: './sellerhome.component.css'
})
export class SellerhomeComponent {

}
