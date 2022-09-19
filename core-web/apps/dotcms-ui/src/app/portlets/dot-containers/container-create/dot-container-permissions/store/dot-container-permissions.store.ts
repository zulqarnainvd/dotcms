import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface TableColumns {
    field: string;
    header: string;
}

export interface Permission {
    name: string;
    view: boolean;
    addTo: boolean;
    edit: boolean;
    publish: boolean;
    publishPermissions: boolean;
}

export interface User {
    name: string;
    code: string;
}

export interface Role {
    label: string;
    data: string;
    expandedIcon?: string;
    icon?: string;
    collapsedIcon?: string;
    children?: Role[];
}

export interface DotContainerPermissionsState {
    roles: Role[];
    permissions: Permission[];
    users: User[];
    selectedRole: Role;
    selectedUser: User;
    tableCols: TableColumns[];
}

interface DotContainerPermissionsInitialProps {
    roles: Role[];
    permissions: Permission[];
    users: User[];
    selectedRole: Role;
    selectedUser: User;
    tableCols: TableColumns[];
}

@Injectable()
export class DotContainerPermissionsStore extends ComponentStore<DotContainerPermissionsState> {
    readonly vm$ = this.state$;

    // SELECTORS
    public readonly permissions$ = this.select(({ permissions }) => permissions);
    public readonly roles$ = this.select(({ roles }) => roles);
    public readonly users$ = this.select(({ users }) => users);

    public readonly selectedRole$ = this.select(({ selectedRole }) => selectedRole);
    public readonly selectedUser$ = this.select(({ selectedUser }) => selectedUser);

    // Updates
    readonly addPermission = this.updater((state, permission: Permission) => ({
        ...state,
        permissions: [...state.permissions, permission]
    }));

    readonly updatePermissions = this.updater((state, permissions: Permission[]) => ({
        ...state,
        permissions
    }));

    constructor() {
        super();
    }

    /**
     * Sets initial state data from props, roles and current logged user data
     *
     * @param {DotContainerPermissionsInitialProps} props
     * @memberof DotContainerPermissionsStore
     */
    setInitialStateData(props: DotContainerPermissionsInitialProps): void {
        const propsData = {
            roles: props.roles,
            permissions: props.permissions,
            users: props.users,
            selectedRole: props.selectedRole || null,
            selectedUser: props.selectedUser || null,
            tableCols: props.tableCols || []
        };

        this.setState({
            roles: propsData.roles,
            permissions: propsData.permissions,
            users: propsData.users,
            selectedRole: propsData.selectedRole,
            selectedUser: propsData.selectedUser,
            tableCols: propsData.tableCols
        });
    }
}
