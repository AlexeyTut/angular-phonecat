import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getPhones(): Promise<unknown> {
    return this.http.get('assets/phones/phones.json').toPromise().then(response => {
      return response;
    });
  }

  getPhone(id: string): Promise<unknown> {
    return this.http.get('assets/phones/' + id + '.json').toPromise().then(response => {
      return response;
    });
  }
}
