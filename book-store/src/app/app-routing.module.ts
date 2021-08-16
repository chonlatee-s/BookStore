import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutMainComponent } from './shared/layout-main/layout-main.component';

const routes: Routes = [
  { 
    path: '', component: LayoutMainComponent,
    children: [
      { 
        path: '', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
      },
      { 
        path: 'book', 
        loadChildren: () => import('./pages/book/book.module').then(m => m.BookModule),
        canActivate: [AuthGuard]
      },
    ]
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
