import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlmanacService } from "./almanac.service";
import { AlmanacComponent, AlmanacRowComponent,AlmanacDayComponent, CustomSlicePipe } from './almanac.component';

@NgModule({
    declarations: [AlmanacComponent, AlmanacRowComponent,AlmanacDayComponent, CustomSlicePipe],
    imports: [CommonModule],
    exports: [AlmanacComponent, AlmanacRowComponent,AlmanacDayComponent],
    providers: [AlmanacService]
})
export class AlmanacModule { }
