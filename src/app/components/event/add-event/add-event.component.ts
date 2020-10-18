import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../event.service';
import {IEventCategory} from '../../../shared/models/event-category';
import {ThemePalette} from '@angular/material';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventForm: FormGroup;
  privacyList = ['private', 'public'];
  categoriesList: IEventCategory[] = [];
  public color: ThemePalette = 'primary';

  @Output() fillEventForm = new EventEmitter();
  @Output() enableJoinBtn = new EventEmitter();
  @Output() imagePreview = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private eventService: EventService) {
  }

  ngOnInit() {
    this.createEventForm();
    this.getCategories();
    this.eventForm.valueChanges
      .subscribe(() => this.fillEventForm.emit(this.eventForm.value));
  }

  createEventForm() {
    this.eventForm = this.formBuilder.group({
      privacy: [this.privacyList[0]],
      name: [''],
      startDateTime: [''],
      endDateTime: [''],
      category: ['', Validators.required],
      location: [''],
      description: [''],
      photo: [''],
      photoPreview: ['']
    });
  }

  getCategories() {
    this.eventService.getCategories().subscribe((response: any) => {
      this.categoriesList = response.data ? response.data : [];
    });
  }

  onEventFormSubmit() {
    if (!this.eventForm.valid) {
      return;
    }
    this.enableJoinBtn.emit(true);
    // submit form
  }

  photoPreview(event, remove?: boolean) {
    if (remove) {
      this.eventForm.patchValue({photoPreview: ''});
      return;
    }
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.eventForm.patchValue({
        photoPreview: reader.result as string
      });
    };
    reader.readAsDataURL(file);
  }


}
