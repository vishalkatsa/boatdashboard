import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/http.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{

  userId: any;

  constructor(private apiService:ApiService){}
  ngOnInit(){
    console.log(this.userId);
    try {
      this.apiService.get(`order/getorderseller/${this.userId}`).subscribe((data)=>{
        if (data?.message === "Getgetorder_201") {
          
        } 
      })
    } catch (error) {
      
    }
    this.getUserData() 
  }
  getUserData() {
    const localData: string | null = localStorage.getItem('sellerData');
    if (localData) {
      let user = JSON.parse(localData);
      this.userId = user?._id
      console.log(this.userId);
    }
  }
}
