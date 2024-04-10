import { Component, OnInit, inject } from '@angular/core';
import { CreatelistingComponent } from '../createlisting/createlisting.component';
import { ApiService } from '../../../service/http.service'

@Component({
  selector: 'app-listedproduct',
  standalone: true,
  imports: [CreatelistingComponent],
  templateUrl: './listedproduct.component.html',
  styleUrl: './listedproduct.component.css'
})
export class ListedproductComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  product:any[] = [];
  
  
  getData() {

    this.apiService.get('product/getproduct').subscribe(data => {
      this.product = data.product
      console.log(data.product);
    });
  }

  ngOnInit(): void {

    this.getData()
  }

 


}

