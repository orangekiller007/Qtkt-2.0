import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { CreateincidentComponent } from './createincident/createincident.component';
import { EditComponent } from './edit/edit.component';
import { ShowincidentComponent } from './showincident/showincident.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
    {
        path: 'home', component:HomeComponent,canActivate:[AuthGuard]

    },
    {
        path:'createincident', component:CreateincidentComponent,canActivate:[AuthGuard]
    },
    {
        path:'edit/:id',component:EditComponent,canActivate:[AuthGuard]
    },
    {
        path:'showincident',component:ShowincidentComponent,canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];