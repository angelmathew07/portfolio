import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerMenuItems: string[];
    footerMenuIcons: any[];
  constructor() { }

  ngOnInit() {
    this.footerMenuItems = ['Privacy and Security', 'Legal', 'Accessibility', 'About Us', 'Careers'];
        this.footerMenuIcons = [
            { item: 'facebook', value: 'facebook-f', type: "fab", href: "https://facebook.com/tdbankgroup/" },
            { item: 'twitter', value: 'twitter', type: "fab", href: "https://twitter.com/td_canada" },
            { item: 'youtube', value: 'youtube', type: "fab", href: "https://youtube.com/td_canada" },
            { item: 'wifi', value: 'wifi', type: "fas", href: "https://td.com" }];

    }

  

}
