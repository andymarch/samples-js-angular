


/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.



/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.



/***************************************************************************************************
 * APPLICATION IMPORTS
 */
 // polyfill TextEncoder for IE Edge
 import { TextEncoder } from 'text-encoding';
 if (typeof (window as any).TextEncoder === 'undefined') {
   (window as any).TextEncoder = TextEncoder;
 }
