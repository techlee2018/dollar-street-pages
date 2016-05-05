import {Component, Inject} from '@angular/core';
import {RouteParams, RouterLink} from '@angular/router-deprecated';
import {HeaderWithoutSearchComponent} from '../common/headerWithoutSearch/header.component';
import {FooterComponent} from '../common/footer/footer.component';

let tpl = require('./sitemap.template.html');
let style = require('./sitemap.css');

@Component({
  selector: 'sitemap',
  template: tpl,
  styles: [style],
  directives: [RouterLink, HeaderWithoutSearchComponent, FooterComponent]
})

export class SitemapComponent {
  private title:string = 'Sitemap';
  private routeParams:RouteParams;

  constructor(@Inject(RouteParams) routeParams) {
    this.routeParams = routeParams;
  }

}
