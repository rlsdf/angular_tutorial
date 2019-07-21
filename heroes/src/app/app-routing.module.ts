import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], // forRoot 메서드는 전반적인 라우팅 서비스를 동작하게 해준다
  exports: [ RouterModule ] // AppModule 안에 있는 AppComponent에서도 RouterOutlet 디렉티브(routerLink)를 사용할 수 있다
})
export class AppRoutingModule { }
