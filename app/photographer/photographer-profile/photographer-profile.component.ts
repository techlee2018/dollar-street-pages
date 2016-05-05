import {Component, OnInit, OnDestroy, Input, Inject, Output, EventEmitter} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';

let tpl = require('./photographer-profile.template.html');
let style = require('./photographer-profile.css');

@Component({
  selector: 'photographer-profile',
  template: tpl,
  styles: [style],
  directives: [RouterLink]
})

export class PhotographerProfileComponent implements OnInit, OnDestroy {
  @Input()
  private photographerId:string;
  @Output()
  private getPhotographer:EventEmitter<any> = new EventEmitter();

  private photographer:any = {};
  private photographerProfileService:any;
  private photographerProfileServiceSubscribe:any;
  private isShowInfo:boolean = false;

  constructor(@Inject('PhotographerProfileService') photographerProfileService) {
    this.photographerProfileService = photographerProfileService;
  }

  ngOnInit():void {
    let query = `id=${this.photographerId}`;

    this.photographerProfileServiceSubscribe = this.photographerProfileService.getPhotographerProfile(query)
      .subscribe((res:any) => {
        if (res.err) {
          return res.err;
        }

        this.photographer = res.data;
        this.getPhotographer.emit(`${this.photographer.firstName} ${this.photographer.lastName}`);
      });
  }

  ngOnDestroy():void {
    this.photographerProfileServiceSubscribe.unsubscribe();
  }

  isShowInfoMore(photographer:any):boolean {
    return photographer.company ||
      photographer.description ||
      photographer.google ||
      photographer.facebook ||
      photographer.twitter ||
      photographer.linkedIn;
  }

  isShowDescription(company:any):boolean {
    return company && (company.name || company.link);
  }
}
