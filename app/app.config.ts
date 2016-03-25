import {MainComponent} from './main/main.component';
import {MatrixComponent} from './matrix/matrix.component';
import {PlaceComponent} from './place/place.component';
import {MapComponent} from './map/map.component';
import {AllPhotographersComponent} from './all-photographers/all-photographers.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { AmbassadorsComponent } from './ambassadors/ambassadors.component';
import { SitemapComponent } from './sitemap/sitemap.component';

export module config {
  export let api='http://128.199.60.70';
  export let routes = [
    {
      path: '/main',
      name: 'Main',
      component: MainComponent,
      useAsDefault: true
    },
    {
      path: '/matrix',
      name: 'Matrix',
      component: MatrixComponent
    },
    {
      path: '/place',
      name: 'Place',
      component: PlaceComponent
    },
    {
      path: '/map',
      name: 'Map',
      component: MapComponent
    },
    {
      path: '/photographers',
      name: 'Photographers',
      component: AllPhotographersComponent
    },
    {
      path: '/photographer',
      name: 'Photographer',
      component: PhotographerComponent
    },
    {
      path: '/ambassadors',
      name: 'Ambassadors',
      component: AmbassadorsComponent
    },
    {
      path: '/sitemap',
      name: 'Sitemap',
      component: SitemapComponent
    }
  ]
}
