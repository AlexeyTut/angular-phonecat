import { Component, Input, OnInit } from '@angular/core';
import { IPhoneInfo } from '@src/app/types/phone-info';

@Component({
  selector: 'phone-list-new',
  templateUrl: './phone-list.component.html',
})
export class PhoneListComponent implements OnInit {
  public orderProp: string = 'age';
  public query: string = '';

  @Input() phones: IPhoneInfo[]

  ngOnInit(): void {
  }

  getPhoneHref(phone: IPhoneInfo): string {
    return `#!/phones/${phone.id}`;
  }

  getPhoneImage(phone: IPhoneInfo): string {
    return `assets/${phone.imageUrl}`;
  }
}
