import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutMainComponent } from './shared/layout-main/layout-main.component';
import { FooterComponent } from './shared/layout-main/footer/footer.component';
import { MenuComponent } from './shared/layout-main/menu/menu.component';
import { HeaderComponent } from './shared/layout-main/header/header.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthService } from './core/services/auth.service';
import { TokenInterceptorService } from './core/interceptors/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutMainComponent,
    FooterComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuard, AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
