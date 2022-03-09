import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'phone-detail-new',
  templateUrl: './phone-detail.component.html'
})
export class PhoneDetailComponent implements OnInit {
  public mainImageUrl: string = '';

  @Input() phone: any;

  public ngOnInit(): void {
    this.setImage(this.phone.images[0]);
  }

  public setImage(imageUrl) {
    this.mainImageUrl = imageUrl;
  };

  public onDblclick(imageUrl) {
    alert('You double-clicked image: ' + imageUrl);
  };
}
