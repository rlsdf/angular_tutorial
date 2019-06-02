import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

// 애플리케이션 동작에 필요한 메타데이터는 보통 @NgModule 데코레이터에 지정
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [ // 이 배열에는 애플리케이션이 동작할 때 필요한 외부 모듈을 등록
    BrowserModule,
    FormsModule
  ],
  providers: [], // 프로바이더는 서비스의 인스턴스를 생성하거나 어딘가에서 가져오는 역할(서비스 의존성 주입)
  bootstrap: [AppComponent]
})
export class AppModule { }
