import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

// eslint-disable-next-line no-console
console.log(example, renderItems(data), data);
