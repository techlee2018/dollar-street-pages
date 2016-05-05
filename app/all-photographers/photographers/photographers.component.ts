import {Component, OnInit, OnDestroy, Inject} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';

import {PhotographersFilter} from './photographers-filter.pipe.ts';
import {LoaderComponent} from '../../common/loader/loader.component';

let tpl = require('./photographers.template.html');
let style = require('./photographers.css');

@Component({
  selector: 'photographers-list',
  template: tpl,
  styles: [style],
  directives: [RouterLink, LoaderComponent],
  pipes: [PhotographersFilter]
})

export class PhotographersComponent implements OnInit, OnDestroy {
  private photographersService:any;
  private photographersByCountry:any[] = [];
  private photographersByName:any[] = [];
  private search:any = {text: ''};
  private loader:boolean = false;
  private photographersServiceSubscribe:any;

  constructor(@Inject('PhotographersService') photographersService:any) {
    this.photographersService = photographersService;
  }

  ngOnInit():void {
    this.photographersServiceSubscribe = this.photographersService.getPhotographers({})
      .subscribe((res:any) => {
        if (res.err) {
          return res.err;
        }
        this.photographersByCountry = res.data.countryList;
        this.photographersByName = res.data.photographersList;
        this.loader = true;
      });
  }

  ngOnDestroy() {
    this.photographersServiceSubscribe.unsubscribe();
  }

  toggleLeftSide(e) {
    e.target.parentNode.classList.toggle('show');
  }
}
