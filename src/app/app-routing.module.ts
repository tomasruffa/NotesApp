import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component'


const routes: Routes = [
	{
		path:'inicio',
		component: NotesComponent,
	},
	{
        path: '**',
        redirectTo: 'inicio',
        pathMatch: 'full'
    }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
