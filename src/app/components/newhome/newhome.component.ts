import { Component, OnInit } from '@angular/core';
import { NewserviceService } from '../../services/newservice.service';

@Component({
  selector: 'app-newhome',
  templateUrl: './newhome.component.html',
  styleUrls: ['./newhome.component.css'],
})
export class NewhomeComponent implements OnInit {
  public newdetails: any;
  public cartlist: any = [];
  constructor(private http: NewserviceService) {}
  ngOnInit(): void {
    this.newdetails = this.http.getallnews().subscribe((data: any) => {
      this.newdetails = data.articles;
      console.log(data);
    });
  }
  addtocart(item: any) {
    this.cartlist = this.http.addtocart(item);
  }
}
