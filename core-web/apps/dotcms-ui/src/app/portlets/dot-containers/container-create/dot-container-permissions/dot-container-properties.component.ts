import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import {
    DotContainerPermissionsState,
    DotContainerPermissionsStore,
    TableColumns,
    Permission,
    Role,
    User
} from './store/dot-container-permissions.store';

@Component({
    selector: 'dot-container-permissions',
    templateUrl: './dot-container-permissions.component.html',
    styleUrls: ['./dot-container-permissions.component.scss'],
    providers: [DotContainerPermissionsStore]
})
export class DotContainerPermissionsComponent {
    vm$: Observable<DotContainerPermissionsState> = this.store.vm$;

    constructor(private store: DotContainerPermissionsStore) {
        this.store.setInitialStateData({
            roles: this.roles,
            permissions: [],
            users: this.users,
            selectedRole: this.selectedRole,
            selectedUser: this.selectedUser,
            tableCols: this.cols
        });
    }

    selectedRole: Role;
    roles: Role[] = [
        {
            label: 'Documents',
            data: 'Documents Folder',
            expandedIcon: 'pi pi-folder-open',
            collapsedIcon: 'pi pi-folder',
            children: [
                {
                    label: 'Work',
                    data: 'Work Folder',
                    expandedIcon: 'pi pi-folder-open',
                    collapsedIcon: 'pi pi-folder',
                    children: [
                        { label: 'Expenses.doc', icon: 'pi pi-file', data: 'Expenses Document' },
                        { label: 'Resume.doc', icon: 'pi pi-file', data: 'Resume Document' }
                    ]
                },
                {
                    label: 'Home',
                    data: 'Home Folder',
                    expandedIcon: 'pi pi-folder-open',
                    collapsedIcon: 'pi pi-folder',
                    children: [
                        {
                            label: 'Invoices.txt',
                            icon: 'pi pi-file',
                            data: 'Invoices for this month'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Pictures',
            data: 'Pictures Folder',
            expandedIcon: 'pi pi-folder-open',
            collapsedIcon: 'pi pi-folder',
            children: [
                { label: 'barcelona.jpg', icon: 'pi pi-image', data: 'Barcelona Photo' },
                { label: 'logo.jpg', icon: 'pi pi-file', data: 'PrimeFaces Logo' },
                { label: 'primeui.png', icon: 'pi pi-image', data: 'PrimeUI Logo' }
            ]
        },
        {
            label: 'Movies',
            data: 'Movies Folder',
            expandedIcon: 'pi pi-folder-open',
            collapsedIcon: 'pi pi-folder',
            children: [
                {
                    label: 'Al Pacino',
                    data: 'Pacino Movies',
                    children: [
                        { label: 'Scarface', icon: 'pi pi-video', data: 'Scarface Movie' },
                        { label: 'Serpico', icon: 'pi pi-file-video', data: 'Serpico Movie' }
                    ]
                },
                {
                    label: 'Robert De Niro',
                    data: 'De Niro Movies',
                    children: [
                        { label: 'Goodfellas', icon: 'pi pi-video', data: 'Goodfellas Movie' },
                        { label: 'Untouchables', icon: 'pi pi-video', data: 'Untouchables Movie' }
                    ]
                }
            ]
        }
    ];
    selectedUser: User;
    users: User[] = [{ name: 'Zulqarnain', code: 'NY' }];

    rows: Permission[] = [];

    cols: TableColumns[] = [
        { field: 'name', header: '' },
        { field: 'view', header: 'View' },
        { field: 'addTo', header: 'Add to' },
        { field: 'edit', header: 'Edit' },
        { field: 'publish', header: 'Publish' },
        { field: 'publishPermissions', header: 'Publish Permissions' }
    ];
    onPermissionChange = async (col, idx, { checked }) => {
        let permissions = await this.store.permissions$.pipe(take(1)).toPromise();
        permissions = [...permissions];
        if (col === 'publishPermissions') {
            permissions[idx][col] = checked;
            permissions[idx]['view'] = checked;
            permissions[idx]['edit'] = checked;
            permissions[idx]['publish'] = checked;
        } else if (col === 'publish') {
            permissions[idx][col] = checked;
            permissions[idx]['view'] = checked;
            permissions[idx]['edit'] = checked;
            permissions[idx]['publishPermissions'] = false;
        } else if (col === 'edit') {
            permissions[idx][col] = checked;
            permissions[idx]['view'] = checked;
            permissions[idx]['publish'] = false;
            permissions[idx]['publishPermissions'] = false;
        } else {
            permissions[idx][col] = checked;
        }

        this.store.updatePermissions(permissions);
    };

    onAddRole = () => {
        this.store.addPermission({
            name: this.selectedRole.label,
            view: false,
            addTo: false,
            edit: false,
            publish: false,
            publishPermissions: false
        });
        this.selectedRole = null;
    };
    onAddUser = () => {
        this.store.addPermission({
            name: this.selectedUser.name,
            view: false,
            addTo: false,
            edit: false,
            publish: false,
            publishPermissions: false
        });
        this.selectedUser = null;
    };
}
