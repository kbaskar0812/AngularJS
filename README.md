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


--Other Angualar material components--
ng generate @angular/material:materialDashboard --name <my-dashboard>

ng generate @angular/material:materialTable --name <my-table>



Note:
ng add
Another new CLI command ng add <package> makes adding new capabilities to your project easy. 
ng add will use your package manager to download new dependencies and invoke an installation script 
(implemented as a schematic) which can update your project with configuration changes, add additional dependencies (e.g. polyfills), 
or scaffold package-specific initialization code.

Try out some of the following on your fresh ng new application:

1) ng add @angular/pwa-->Turn your application into a PWA by adding an app manifest and service worker
2) ng add @angular/material-->Install and setup Angular Material and theming and register new starter components into ng generate
3) ng add @clr/angular-->Install and setup Clarity from VMWare
4) ng add @angular/elements-->Add the needed document-register-element.js polyfill and dependencies for Angular Elements (see below)

Because ng add is built on top of schematics and the npm registry, our hope is that libraries and the community will help us build a rich ecosystem of ng add supporting packages.
