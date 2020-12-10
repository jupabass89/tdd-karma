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
});
