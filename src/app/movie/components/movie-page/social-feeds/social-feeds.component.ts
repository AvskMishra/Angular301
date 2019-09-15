import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-feeds',
  templateUrl: './social-feeds.component.html',
  styleUrls: ['./social-feeds.component.scss']
})
export class SocialFeedsComponent implements OnInit {
anytext: any = 'social-feeds works!';
  constructor() { }

  ngOnInit() {
  }

}
