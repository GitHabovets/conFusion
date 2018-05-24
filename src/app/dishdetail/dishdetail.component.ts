import { Component, OnInit, Input, Inject } from '@angular/core';
import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Comment } from '../shared/comment';

import 'rxjs/add/operator/switchMap';

import { Feedback, ContactType } from '../shared/feedback';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;

  commentForm: FormGroup;
  commentPreview: Comment;

  formErrors = {
    'author': '',
    'comment': ''
  };

  validationMessages = {
    'author': {
      'required':      'Author is required.',
      'minlength':     'Author must be at least 2 characters long.',
      'maxlength':     'Author cannot be more than 25 characters long.'
    },
    'comment': {
      'required':      'Comment is required.',
      'minlength':     'Comment must be at least 2 characters long.',
      'maxlength':     'Comment cannot be more than 255 characters long.'
    }
  };


  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) { 
      this.createForm();
    }
    

    createForm(): void  {
      
      this.commentForm = this.fb.group({
          author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
          comment: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)] ],
          rating: 5,
          date: ''
        });

      this.commentForm.valueChanges
        .subscribe(data => this.onValueChanged(data));

      this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
   
    if (!this.commentForm) { return; }
    const form = this.commentForm;

    this.commentPreview = this.commentForm.value;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    this.commentPreview = this.commentForm.value;
    console.log(this.commentPreview);

    this.commentPreview.date = new Date().toDateString();
    this.dish.comments.push(this.commentPreview);

    this.commentForm.reset({
      author: '',
      comment: '',
      rating: 5,
      date: ''
    });
  }

  ngOnInit() {

    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params
      .switchMap((params: Params) => this.dishService.getDish(+params['id']))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }

  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
  }

goBack(): void {
  this.location.back();
  }

}