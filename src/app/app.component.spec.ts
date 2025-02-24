import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxToggleModule, IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxNavigationDrawerModule, IgxListModule, IgxAvatarModule } from '@infragistics/igniteui-angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [NoopAnimationsModule, FormsModule, RouterTestingModule, IgxToggleModule, IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxNavigationDrawerModule, IgxListModule, IgxAvatarModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
