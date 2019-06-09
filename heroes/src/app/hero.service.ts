import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mock_heroes';

// 서비스가 최상위 인젝터에 등록되면 Angular는 HeroService의 인스턴스를 하나만 생성하며, 이 클래스가 주입되는 모든 곳에서 같은 인스턴스를 공유합니다.
// 그리고 @Injectable() 데코레이터는 이 데코레이터가 등록된 클래스가 실제로 사용되지 않으면 이 클래스를 최종 빌드 결과물에서 제거하는 대상으로 등록하는 역할도 합니다.
@Injectable({ // 의존성 주입 시스템에 포함되는 클래스에는 Injectable 데코레이터 사용
  providedIn: 'root' // 'root'이므로 최상위 인젝터에 등록됨
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => id === hero.id));
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES); // of() 함수는 HEROES 목데이터를 Observable<Hero[]> 형태로 반환해준다.
  }
}
