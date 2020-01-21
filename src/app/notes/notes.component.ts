import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-notes',
	templateUrl: './notes.component.html',
	styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

	modifying: Boolean = false
	spinner: Boolean = false;
	notesForm: FormGroup;
	notes: any[] = [
	]
	colorsArray: any[] = [
		{
			name: 'Transparente',
			value: 'none'
		},
		{
			name: 'Azul',
			value: 'blue'
		},
		{
			name: 'Amarillo',
			value: 'yellow'
		},
		{
			name: 'Verde',
			value: 'green'
		},
		{
			name: 'Rojo',
			value: 'red'
		},
		{
			name: 'Violeta',
			value: 'violet'
		},
		{
			name: 'Rosa',
			value: 'pink'
		},
		{
			name: 'Celeste',
			value: 'cyan'
		},
	]
	positionNote: string;

	constructor(
		private _formBuilder: FormBuilder
	) { }

	ngOnInit() {
		this.notesForm = this._formBuilder.group({
			title: ['', Validators.required],
			description: ['', Validators.required],
			color: ['', Validators.required]
		});
	}

	addNote(value) {
		if (value == 'add') {
			if (this.notesForm.valid) {
				let confirmData = false;
				this.notesForm.disable();
				if (confirm("Desea limpiar el recuadro?")){
					confirmData = true;
				}
				this.spinner = true;
				setTimeout(() => {
					this.spinner = false;
					this.notes.push({
						title: this.notesForm.controls.title.value,
						description: this.notesForm.controls.description.value,
						color: this.notesForm.controls.color.value
					})
					this.notesForm.enable();
					if(confirmData){
						this.notesForm.reset();
					}
				}, 1000);
			}
		} else {
			if (this.notesForm.valid) {
				this.notes[this.positionNote].title = this.notesForm.controls.title.value;
				this.notes[this.positionNote].description = this.notesForm.controls.description.value;
				this.notes[this.positionNote].color = this.notesForm.controls.color.value;
				this.notesForm.reset()
				this.modifying = false;
			}
		}
	}

	modifyNote(position) {
		this.positionNote = position
		this.modifying = true;
		this.notesForm.controls.title.setValue(this.notes[position].title);
		this.notesForm.controls.description.setValue(this.notes[position].description);
		this.notesForm.controls.color.setValue(this.notes[position].color);
	}

	deleteNote(position) {
		this.notes = this.notes.filter(item => item !== this.notes[position]);
	}

}
