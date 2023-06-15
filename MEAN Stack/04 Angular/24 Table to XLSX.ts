//---------------------------------------------------------------------------------------------------------------------------//
// SHEETJS CE (XSLX):
//---------------------------------------------------------------------------------------------------------------------------//
// Instalar librería:
npm i --save https://cdn.sheetjs.com/xlsx-0.19.3/xlsx-0.19.3.tgz
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Component example:
import { Component, ViewChild, ElementRef } from '@angular/core';
import { utils, writeFileXLSX } from 'xlsx';

@Component({
    selector: 'table-example',
    template: '<div #TABLE_ID><table mat-table></table></div><button (click)="tableToExcel()">Export XLSX</button>',
})
export class TableExample {
    @ViewChild('TABLE_ID') table: ElementRef;

    tableToExcel(): void {
    	const elt = this.table.nativeElement.getElementsByTagName("TABLE")[0];
    	const wb = utils.table_to_book(elt);
    	writeFileXLSX(wb, "Example.xlsx");
    }
}
//---------------------------------------------------------------------------------------------------------------------------//
