import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>; // $접미사는 옵져버블을 표현
  private searchTerms = new Subject<string>(); // Subject 객체는 Observable이기도 하기때문에 구독할 수 있다.

  constructor(private heroService: HeroService) { }

  search(term: string): void { // 입력값을 옵져버블 스트림으로 보낸다.
    this.searchTerms.next(term); // next(value) 메소드를 사용하면 Observable로 데이터를 보낼 수 있다.
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(), // 이전 입력값과 같으면 무시
      switchMap((term: string) => this.heroService.searchHero(term)) // 새로운 옵져버블 생성
    );
  }
}
