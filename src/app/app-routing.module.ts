import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListusuariosComponent } from './dashboard/listusuarios/listusuarios.component';
import { InfoGameComponent } from './info-game/info-game.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full',
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ListusuariosComponent,
      },
      {
        path: 'info/:valor',
        component: InfoGameComponent,
      }
    ],
  },
  {
    path: 'layout',
    component: LayoutComponent,
  },

  {
    path: '**',
    redirectTo: 'layout',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
