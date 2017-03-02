/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorPageComponent } from './errorpage.component';

describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorPageComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'app works!'`, async(() => {
    const errorpage = fixture.debugElement.componentInstance;
    expect(errorpage.title).toEqual('An Error Has Occurred!');
  }));

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('An Error Has Occurred');
  }));

  it('should link back to home page', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("a").href).toBe("http://localhost:9876/");
  }));

});
