import { Injectable } from '@angular/core';

@Injectable()
export class LogNewService {
  public log() {
    console.log('LOG NEW SERVICE', new Date().getTime());
  }
}
