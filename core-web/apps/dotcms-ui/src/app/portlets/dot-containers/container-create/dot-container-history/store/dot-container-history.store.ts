import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface TableColumns {
    field: string;
    header: string;
}

export interface DotContainerHistoryState {
    tableCols: TableColumns[];
    pushHistoryTableCols: TableColumns[];
    history: TableColumns[];
    pushHistory: TableColumns[];
}

interface DotContainerHistoryInitialProps {
    tableCols: TableColumns[];
    pushHistoryTableCols: TableColumns[];
    history: TableColumns[];
    pushHistory: TableColumns[];
}

@Injectable()
export class DotContainerHistoryStore extends ComponentStore<DotContainerHistoryState> {
    readonly vm$ = this.state$;

    constructor() {
        super();
    }

    /**
     * Sets initial state data from props, roles and current logged user data
     *
     * @param {DotContainerPermissionsInitialProps} props
     * @memberof DotContainerPermissionsStore
     */
    setInitialStateData(props: DotContainerHistoryInitialProps): void {
        const propsData = {
            tableCols: props.tableCols || [],
            pushHistoryTableCols: props.pushHistoryTableCols || [],
            history: props.history || [],
            pushHistory: props.pushHistory || []
        };

        this.setState({
            tableCols: propsData.tableCols,
            pushHistoryTableCols: propsData.pushHistoryTableCols,
            history: propsData.history,
            pushHistory: propsData.pushHistory
        });
    }
}
