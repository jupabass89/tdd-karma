import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainViewComponent } from './main-view.component';
import { FormsModule } from '@angular/forms';

describe('MainViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;
  let compiled;
  let app;
  let debugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainViewComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    debugElement = fixture.debugElement;
    app = debugElement.componentInstance;
  });

  it('should create the main-view component', () => {
    expect(component).toBeTruthy();
  });

  it('should call toRoman() function on button clicked', () => {
    const toRoman = spyOn(app, 'toRoman');
    const button = compiled.querySelector('#convert_button');
    button.click();
    fixture.detectChanges();
    expect(toRoman).toHaveBeenCalled();
  });

  it('should return V when input is 5', () => {
    component.arabicNumber = 5;
    const button = compiled.querySelector('#convert_button');
    button.click();
    fixture.detectChanges();
    expect(component.response).toEqual('V');
  });

  it('should return X when input is 10', () => {
    component.arabicNumber = 10;
    const button = compiled.querySelector('#convert_button');
    button.click();
    fixture.detectChanges();
    expect(component.response).toEqual('X');
  });

  it('should return MM when input is 2000', () => {
    component.arabicNumber = 2000;
    const button = compiled.querySelector('#convert_button');
    button.click();
    fixture.detectChanges();
    expect(component.response).toEqual('MM');
  });

  it('should return XI when input is 11', () => {
    component.arabicNumber = 11;
    const button = compiled.querySelector('#convert_button');
    button.click();
    fixture.detectChanges();
    expect(component.response).toEqual('XI');
  });

  it('should return MCCXXXIV when input is 1234', () => {
    component.arabicNumber = 1234;
    const button = compiled.querySelector('#convert_button');
    button.click();
    fixture.detectChanges();
    expect(component.response).toEqual('MCCXXXIV');
  });

  it('should show an error message when input is 0', () => {
    component.arabicNumber = 0;
    const button = compiled.querySelector('#convert_button');
    button.click();
    fixture.detectChanges();
    expect(component.response).toEqual('El cero no existe en romano');
  });
});
