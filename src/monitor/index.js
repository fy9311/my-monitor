import {
    injectJsError
} from './lib/jsError';
import {
    injectXhr
} from './lib/xhr';
import {
    blank
} from './lib/blank';
import {
  loadTime
} from './lib/loadTime';

injectJsError();
injectXhr();
blank();
loadTime();