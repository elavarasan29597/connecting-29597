import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModelModule } from './material/app-material.module';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { FigureContainerComponent } from './components/figure-container/figure-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { EventsComponent } from './components/events/events.component';
import { OuterHeaderComponent } from './components/header/outer-header/outer-header.component';
import { InnerHeaderComponent } from './components/header/inner-header/inner-header.component';
import { OuterFooterComponent } from './components/footer/outer-footer/outer-footer.component';
import { InnerFooterComponent } from './components/footer/inner-footer/inner-footer.component';
import { DashboardContentComponent } from './components/dashboard/dashboard-content/dashboard-content.component';
import { OuterContentComponent } from './components/main-content/outer-content/outer-content.component';
import { InnerContentComponent } from './components/main-content/inner-content/inner-content.component';
import { SidebarMenuComponent } from './components/common/sidebar-menu/sidebar-menu.component';
import { ScreenOptionComponent } from './components/common/screen-option/screen-option.component';
import { DashboadTimelineComponent } from './components/dashboard/dashboad-timeline/dashboad-timeline.component';
import { DashboadTabsComponent } from './components/dashboard/dashboad-tabs/dashboad-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    FigureContainerComponent,
    DetailsComponent,
    LoginComponent,
    EventsComponent,
    OuterFooterComponent,
    InnerFooterComponent,
    OuterHeaderComponent,
    InnerHeaderComponent,
    DashboardContentComponent,
    OuterContentComponent,
    InnerContentComponent,
    SidebarMenuComponent,
    ScreenOptionComponent,
    DashboadTimelineComponent,
    DashboadTabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
