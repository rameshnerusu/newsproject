import { Component, OnInit } from '@angular/core';
import { NewserviceService } from '../../services/newservice.service';

@Component({
  selector: 'app-cartcomponent',
  templateUrl: './cartcomponent.component.html',
  styleUrls: ['./cartcomponent.component.css'],
})
export class CartcomponentComponent implements OnInit {
  public products: any = [];
  constructor(private http: NewserviceService) {}
  ngOnInit(): void {
    this.http.getproducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
  removeitem(item: any) {
    this.http.removecartitem(item);
  }
}
