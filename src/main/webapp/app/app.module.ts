import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { KiotManagementSharedModule } from 'app/shared/shared.module';
import { KiotManagementCoreModule } from 'app/core/core.module';
import { KiotManagementAppRoutingModule } from './app-routing.module';
import { KiotManagementHomeModule } from './home/home.module';
import { KiotManagementEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    KiotManagementSharedModule,
    KiotManagementCoreModule,
    KiotManagementHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    KiotManagementEntityModule,
    KiotManagementAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class KiotManagementAppModule {}
