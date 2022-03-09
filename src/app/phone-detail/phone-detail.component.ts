import { Component, Input, OnInit } from '@angular/core';
import { IPhoneDetail } from '@src/app/types/phone-detail';

@Component({
  selector: 'phone-detail-new',
  templateUrl: './phone-detail.component.html'
})
export class PhoneDetailComponent implements OnInit {
  public mainImageUrl: string = '';

  @Input() phone: IPhoneDetail;

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
