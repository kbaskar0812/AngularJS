# AngularJS
ng new <file-name>
ng add @angular/material
--create navigation component
ng generate @angular/material:materialNav --name <myComponentName>


--Route config--app. module.ts
import { RouterModule, Routes } from '@angular/router';

--add
const appRoutes: Routes = [
{ path: 'first-page', component: FirstPageComponent }
];

--add in @NgModule
RouterModule.forRoot(appRoutes)

--In navigation Html add
<router-outlet></router-outlet>


