import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewserviceService {
  public newdetails: any[] = [];
  public cartitemlist: any = [];
  public productlist = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {}

  public getallnews(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://newsapi.org/v2/everything?q=tesla&from=2024-03-12&sortBy=publishedAt&apiKey=8d6ce255a16240e5ada6cff95571fab3'
    );
  }
  addtocart(item: any) {
    this.cartitemlist.push(item);
    this.productlist.next(this.cartitemlist);
    console.log(this.cartitemlist);
  }
  getproducts() {
    return this.productlist.asObservable();
  }
  removecartitem(item: any) {
    this.cartitemlist.map((a: any, index: any) => {
      if (item.author == a.author) {
        this.cartitemlist.splice(index, 1);
      }
    });
  }
}
