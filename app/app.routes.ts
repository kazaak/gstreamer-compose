import { provideRouter, RouterConfig } from '@angular/router';
import { VideoSourcesComponent } from './videosources.component';

export const routes: RouterConfig = [
    {
        path: ''
       ,redirectTo: '/video-sources'
    },
    {
        path: 'video-sources'
       ,component: VideoSourcesComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
