import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-4db5aae1.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"last":[1],"initialValue":[2,"initial-value"],"amountOfIncrease":[2,"amount-of-increase"],"value":[32]}]]]], options);
});
