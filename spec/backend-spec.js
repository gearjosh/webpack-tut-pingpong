import { backEnd } from './../src/backend.js';

describe('backEnd', function() {

  it('should return 0 as output', function() {
    let result = backend();
    let control = 0;
    expect(result).toEqual(control);
  })
