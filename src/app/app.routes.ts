import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', loadComponent: () => import('./components/watch-list/watch-list.component').then((a) => a.WatchListComponent) },
            { path: 'watch/:id', loadComponent: () => import('./components/watch/watch.component').then((a) => a.WatchComponent) },
            { path: 'cart', loadComponent: () => import('./components/cart/cart.component').then((a) => a.CartComponent) },
            { path: 'comparison', loadComponent: () => import('./components/comparison/comparison.component').then((a) => a.ComparisonComponent) },
            { path: 'interest', loadComponent: () => import('./components/interest/interest.component').then((a) => a.InterestComponent) }
        ]
    }
];
