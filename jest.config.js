/* wiki-app */

/* 
  Jest can not parse css files which are imported to js files, 
  therefore it is needed to mock them.
*/
module.exports = {
  "moduleNameMapper": {
    ".*css$": "<rootDir>/src/__tests__/stub.css"
  }
}