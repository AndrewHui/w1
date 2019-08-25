const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {

  it('should return an empty string when passed an empty string', function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it("should return a single name when passed a single name", function() {
    assert.equal(nameInverter("name"), "name");
  })
  it("should return a single name when passed a single name with extra spaces", function() {
    assert.equal(nameInverter(" name "), "name");
  })
  it("should return a last-name, first-name when passed a first and last-name", function() {
    assert.equal(nameInverter("Billy Talent"), "Talent, Billy");
  })
  it("should return a last-name, first-name when passed a first and last-name with extra spaces around the names", function() {
    assert.equal(nameInverter(" Billy Talent "), "Talent, Billy");
  })
  it("should throw an error when input is undefined", function() {
    assert.equal(nameInverter(), "Error");
  })
  it("should return an empty string when passed a single honorific", function() {
    assert.equal(nameInverter("Dr. "), "")
  })
  it("should return honorific first-name when passed honorific first-name", function(){
    assert.equal(nameInverter("Dr. Billy"), "Dr. Billy")
  })
  it("should return a honorific last-name, first-name when passed honorific first-name last-name", function() {
    assert.equal(nameInverter("Dr. Billy Talent"), "Dr. Talent, Billy")
  })
  it("should return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words", function() {
    assert.equal(nameInverter("  Mr. Billy Talent  "), "Mr. Talent, Billy")
  })

});