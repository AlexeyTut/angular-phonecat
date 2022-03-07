import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '@src/app/services/api/api.service';


@NgModule({
  imports: [HttpClientModule],
  providers: [ApiService]
})
export class ApiModule {

}
