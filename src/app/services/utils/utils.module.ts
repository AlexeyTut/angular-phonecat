import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LogNewService } from '@src/app/services/utils/log-new.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [LogNewService]
})
export class UtilsModule {
}
