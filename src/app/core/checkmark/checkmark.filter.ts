import { coreModule } from "../core.module";

coreModule.
  filter('checkmark', () => (input: boolean) => input ? '\u2713' : '\u2718');
