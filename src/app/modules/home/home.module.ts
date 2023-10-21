import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AutheticationRoutingModule } from './authetication-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { MenuComponent } from './components/menu/menu.component';
import { ItemComponent } from './components/item/item.component';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, BannerComponent, MenuComponent, ItemComponent],
  imports: [
    CommonModule,
    AutheticationRoutingModule
  ]
})
export class HomeModule { }
