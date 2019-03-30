import { storiesOf } from '@storybook/angular';
import { CoreModule } from '../core.module';
import { TreeComponent } from './tree.component';

storiesOf(`Core/tree`, module).add(
  'Default',
  () => ({
    component: TreeComponent,
    moduleMetadata: {imports: [CoreModule]}
  }),
  { notes: 'My notes on a button with emojis' }
);
