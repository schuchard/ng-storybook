import { storiesOf } from '@storybook/angular';
import { CoreModule } from '../core.module';
import { DragDropComponent } from './drag-drop.component';

storiesOf(`Core/drag-drop`, module).add(
  'Default',
  () => ({
    component: DragDropComponent,
    moduleMetadata: {imports: [CoreModule]}
  }),
  { notes: 'My notes on a button with emojis' }
);
