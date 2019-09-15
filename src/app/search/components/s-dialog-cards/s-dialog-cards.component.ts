import { Component, OnInit, Input, AfterContentChecked, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import * as UserState from '../../../reducers/index';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-s-dialog-cards',
  templateUrl: './s-dialog-cards.component.html',
  styleUrls: ['./s-dialog-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SDialogCardsComponent implements AfterContentChecked, DoCheck, OnInit {
  @Input() movieList;
  @Input() movieFilter;
  @Input() languageList;
  @Input() selectedLanguage;
  userPreference: any = [];
  constructor(private userStore: Store<UserState.State>) { }
  ngOnInit(): void {
    this.userStore.select(UserState.userSelector).subscribe(result => {
      this.userPreference = result.preference;
    });
  }

  ngAfterContentChecked() { }

  ngDoCheck(): void { }
  track(_index, item) {
    return item;
  }

}
