import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sellersidebar',
  standalone: true,
  imports: [MatIconModule,NgClass,RouterLink,RouterLinkActive,],
  templateUrl: './sellersidebar.component.html',
  styleUrl: './sellersidebar.component.css'
})
export class SellersidebarComponent {
  sidebarToggle = true;

  sidebarToggleHandler(){
    this.sidebarToggle = !this.sidebarToggle;
  }
}
