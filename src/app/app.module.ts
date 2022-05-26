import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { NabvarComponent } from './dashboard/nabvar/nabvar.component';
import { ListusuariosComponent } from './dashboard/listusuarios/listusuarios.component';
import { LayoutComponent } from './layout/layout.component';
import { CardUsuarioComponent } from './dashboard/listusuarios/card-usuario/card-usuario.component';
import { InfoGameComponent } from './info-game/info-game.component';
import { LoadingComponent } from './dashboard/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    NabvarComponent,
    ListusuariosComponent,
    LayoutComponent,
    CardUsuarioComponent,
    InfoGameComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
