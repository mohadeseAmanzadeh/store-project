import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', loadComponent: () => import('./components/watch-list/watch-list.component').then((a) => a.WatchListComponent) },
            // { path: '/watch', loadComponent: () => import('./components/watch/watch.component').then((a) => a.WatchComponent) }
        ]
    }
];
