import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';

export const routes: Routes = [
    // {path:'',component:AppComponent,pathMatch:'full'},
    {path:'parent',component:ParentComponent,children:[{
        path:'child',component:ParentComponent
    }]}
];
