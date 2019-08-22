import { NgModule } from '@angular/core';

import {
    MatSelectModule,
    MatMenuModule,
    MatButtonModule
    
} from '@angular/material';

@NgModule({
    imports: [
        MatSelectModule,
        MatMenuModule,
        MatButtonModule
       
    ], 
    exports: [
        MatSelectModule,
        MatMenuModule,
        MatButtonModule
       
    ]
})
export class MaterialModule { }