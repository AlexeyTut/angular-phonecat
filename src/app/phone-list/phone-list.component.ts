import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'phone-list-new',
  templateUrl: './phone-list.component.html'
})
export class PhoneListNewComponent implements OnInit {
  public orderProp: string = 'age';
  public query: string = '';

  @Input() phones: any[]

  ngOnInit(): void {
    console.log(this);
  }

  getPhoneHref(phone: any): string {
    return `#!/phones/${phone.id}`;
  }

  getPhoneImage(phone: any): string {
    return `assets/${phone.imageUrl}`;
  }


}
