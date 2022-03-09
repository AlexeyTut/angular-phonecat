import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhoneInfo } from '@src/app/types/phone-info';
import { IPhoneDetail } from "@src/app/types/phone-detail";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getPhones(): Promise<IPhoneInfo[]> {
    return this.http.get('assets/phones/phones.json').toPromise().then(response => {
      return response as IPhoneInfo[];
    });
  }

  getPhone(id: string): Promise<IPhoneDetail> {
    return this.http.get('assets/phones/' + id + '.json').toPromise().then(response => {
      return response as IPhoneDetail;
    });
  }
}
