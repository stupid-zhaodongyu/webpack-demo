import _ from 'lodash'
import { cube } from './math';

if (process.env.NODE_ENV !== 'production') {
  console.log('development mode');
}
function component() {

  const element = document.createElement('pre');

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to' + cube(5)
  ].join('\n\n');

  return element;
}


document.body.appendChild(component());