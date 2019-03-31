import { sandboxOf } from 'angular-playground';
import { TableComponent } from './table.component';
import { CoreModule } from '../core.module';

export default sandboxOf(TableComponent, {imports: [CoreModule]})
  .add('default', {
    template: `<app-table></app-table>`
  });
