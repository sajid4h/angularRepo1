import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FormeeventComponent } from './formeevent/formeevent.component';
import { IntervaltiemrComponent } from './intervaltiemr/intervaltiemr.component';

import { ToarrayComponent } from './toarray/toarray.component';
import path from 'path';
import { OblistComponent } from './oblist/oblist.component';


export const routes: Routes = [

   { path: '',   redirectTo: 'allob', pathMatch: 'full' },
   {path:'allob',component:OblistComponent},

   {path:'fromevent',component:FormeeventComponent},
   {path:'intervaltimer',component:IntervaltiemrComponent},
   {path:'toarray',component:ToarrayComponent},


   
];
