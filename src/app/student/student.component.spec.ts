import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';
import { StudentService } from '../student.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let h1 = HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentComponent],
        providers: [StudentService],
      imports:[HttpClientModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('spy On Method', () => {
    spyOn(component, 'calculate');
    component.saveData();
    expect(component.calculate).toHaveBeenCalled();
  });

  it('spy On Method - 1', () => {
    spyOn(component, 'calculate').and.returnValues(10, 20);
    let result = component.StudentSchoolResult();
    expect(result).toEqual("Fail");
  });

  it('spy On Method - 2', () => {
    let service = fixture.debugElement.injector.get(StudentService);
    spyOn(service, "SaveDetails").and.callFake(() => {
      return of({
        "result1": 200
      })
    });

    spyOn(component, "SaveDataIntoConsole").and.stub();
    component.saveData();
    expect(component.result).toEqual({
      "result1": 200
    })
  });

  it('Verify the h1 element value',() =>{
    component.StudentSchoolResult();
    fixture.detectChanges()
    expect(h1).toBe(component.studentResult);
  })
  
});
