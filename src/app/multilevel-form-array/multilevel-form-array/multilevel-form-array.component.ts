import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multilevel-form-array',
  templateUrl: './multilevel-form-array.component.html',
  styleUrls: ['./multilevel-form-array.component.css']
})
export class MultilevelFormArrayComponent implements OnInit {
  addQuestionsForm: FormGroup;

  constructor(
    private fb:FormBuilder
  ) { 

    this.initForm();
  }

  ngOnInit() {
  }

  initForm(){
    this.addQuestionsForm = this.fb.group({
      questions: this.fb.array([]),
    });
    this.addQuestion();
  }

  questions() : FormArray {
    return this.addQuestionsForm.get('questions') as FormArray;
  }
  newQuestion(): FormGroup {
    return this.fb.group({
      ques: ['',[Validators.required, Validators.maxLength(120)]],
      options: this.fb.array([this.newOption()])
    });
  }
  addQuestion() {
    this.questions().push(this.newQuestion());
  }
  removeQuestion(i:number) {
    this.questions().removeAt(i);
  }


  options(quesIndex) : FormArray {
    return this.questions().at(quesIndex).get("options") as FormArray
  }
  newOption(): FormGroup {
    return this.fb.group({
      option: ['',[Validators.required, Validators.maxLength(50)]],
    });
  }
  addOption(quesIndex) {
    if(this.options(quesIndex).length == 4){
      return;
    }
    this.options(quesIndex).push(this.newOption());
  }
  removeOption(quesIndex) {
    if(this.options(quesIndex).length == 2){
      return;
    }
    this.options(quesIndex).removeAt(quesIndex);
  }

  onSubmit(){
    console.log(this.addQuestionsForm.value)
  }
} 
