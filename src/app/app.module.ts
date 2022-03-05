import { NgModule, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from "@angular/upgrade/static";
import { appModuleAngularJS } from "./app.angularjs.module";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, [appModuleAngularJS.name]);
  }
}
