import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {
    DotContainerHistoryState,
    DotContainerHistoryStore,
    TableColumns
} from './store/dot-container-history.store';
@Component({
    selector: 'dot-container-history',
    templateUrl: './dot-container-history.component.html',
    styleUrls: ['./dot-container-history.component.scss'],
    providers: [DotContainerHistoryStore]
})
export class DotContainerHistoryComponent {
    vm$: Observable<DotContainerHistoryState> = this.store.vm$;
    cols: TableColumns[] = [
        { field: 'status', header: 'Status' },
        { field: 'action', header: 'Action' },
        { field: 'title', header: 'Title' },
        { field: 'author', header: 'Author' },
        { field: 'modifiedDate', header: 'Modified Date' },
        { field: 'Inode', header: 'Inode' }
    ];
    constructor(private store: DotContainerHistoryStore) {
        this.store.setInitialStateData({
            tableCols: this.cols,
            pushHistoryTableCols: [],
            history: [],
            pushHistory: []
        });
    }
}
