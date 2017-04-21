import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlmanacService } from "./almanac.service";
import { AlmanacComponent, AlmanacRowComponent } from './almanac.component';

@NgModule({
    declarations: [AlmanacComponent, AlmanacRowComponent],
    imports: [CommonModule],
    exports: [AlmanacComponent, AlmanacRowComponent],
    providers: [AlmanacService]
})
export class AlmanacModule { }
