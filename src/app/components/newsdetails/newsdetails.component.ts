import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
  styleUrls: ['./newsdetails.component.css'],
})
export class NewsdetailsComponent implements OnInit {
  public author: string | null = '';
  public newdetail: any[] = [];
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.author = this.route.snapshot.paramMap.get('author');
    fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2024-03-11&sortBy=publishedAt&apiKey=8d6ce255a16240e5ada6cff95571fab3/${this.author}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.newdetail = data;
        console.log(this.newdetail);
      });
  }
}
