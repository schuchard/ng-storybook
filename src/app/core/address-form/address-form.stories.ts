import { storiesOf } from '@storybook/angular';
import { CoreModule } from '../core.module';
import { AddressFormComponent } from './address-form.component';

storiesOf(`Core/address-form`, module).add(
  'Default',
  () => ({
    component: AddressFormComponent,
    moduleMetadata: {imports: [CoreModule]}
  }),
  { notes: 'My notes on a button with emojis' }
);
