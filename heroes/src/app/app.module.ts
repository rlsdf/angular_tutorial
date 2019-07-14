import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RankingComponent } from './ranking/ranking.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

// 애플리케이션 동작에 필요한 메타데이터는 보통 @NgModule 데코레이터에 지정
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    RankingComponent,
    HeroSearchComponent
  ],
  imports: [ // 이 배열에는 애플리케이션이 동작할 때 필요한 외부 모듈을 등록
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot( // 라우터의 동작환경을 설정하는 forRoot() 메소드
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [], // 프로바이더는 서비스의 인스턴스를 생성하거나 어딘가에서 가져오는 역할(서비스 의존성 주입)
  bootstrap: [AppComponent]
})
export class AppModule { }
