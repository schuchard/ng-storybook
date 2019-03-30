import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NavbarComponent } from './navbar.component';
import { AppModule } from 'src/app/app.module';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../core.module';

storiesOf(`Core/Navbar`, module).add(
  'Default',
  () => ({
    component: NavbarComponent,
    moduleMetadata: {imports: [CoreModule]}
  }),
  { notes: 'My notes on a button with emojis' }
);
