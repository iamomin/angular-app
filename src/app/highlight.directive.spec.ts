import { HighlightDirective } from './highlight.directive';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";

describe('HighlightDirective', () => {

    let component: TestHoverFocusComponent;
    let fixture: ComponentFixture<TestHoverFocusComponent>;
    let inputEl: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ TestHoverFocusComponent, HighlightDirective ], // declare the test component
        });

        fixture = TestBed.createComponent(TestHoverFocusComponent);
        component = fixture.componentInstance;
        inputEl = fixture.debugElement.query(By.css('div'));
    }));

  it('should create an instance', () => {
    const directive = new HighlightDirective(inputEl);
    expect(directive).toBeTruthy();
  });

  it('hovering over input', () => {
      inputEl.triggerEventHandler('mouseenter', null);
      fixture.detectChanges();
      console.log('MOUSE ENTER: ' + inputEl.nativeElement.style.backgroundColor);
      expect(inputEl.nativeElement.style.backgroundColor).toBe('lightgray');

      inputEl.triggerEventHandler('mouseleave', null);
      fixture.detectChanges();
      console.log('MOUSE LEAVE: ' + inputEl.nativeElement.style.backgroundColor);
      expect(inputEl.nativeElement.style.backgroundColor).toBe('gray');
  });

});

@Component({
  template: `<div appHighlight>Test</div>`
})

class TestHoverFocusComponent {
}