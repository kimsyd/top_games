export {filterByGenre, filterBySystem, filterByValues, filterByYear, getYear};

/*
function filterByValues(array, count)
parameters: - array: array/spreadsheet to filter w/
            - count : number of entries to return
returns array w/ count number of entries
ref: https://stackoverflow.com/questions/56168771/how-to-limit-for-10-results-the-array-filter
*/
function filterByValues(array, count) {
  let filtered_values = array.filter(function(item) {
    if (this.count < count){
      this.count++;
      return true;
    }
    return false;
  },{count: 0});
  return filtered_values;
}

/*
function filterByGenre(spreadsheet, genre, count)
paramerers: - spreadsheet: spreadsheet to pull games from
            - genre: genre in string (i.e. "Platform") to look for (refer to spreadsheets for genre names)
            - count: number of games to return
returns an array w/ count elements of the first count games in the spreadsheets w/ requested genre (each of our spreadsheets already ranked by sale #s)
*/
function filterByGenre(spreadsheet, genre, count) {
  let genreFiltered = spreadsheet.filter((game) => game.Genre == genre);
  return filterByValues(genreFiltered, count);
}

/*
function filterByYear
parameters: - spreadsheet: spreadsheet to pull games form
            - year: year to filter gamess with
returns all games for the designated year
*/
function filterByYear (spreadsheet, year) {
  let yearResults = spreadsheet.filter((game) => getYear(game) == year);
  return yearResults;
}


function getYear(game){
  let exampleyear = game.ReleaseDate;
  return new Date(exampleyear).getFullYear();
}


function filterBySystem(spreadsheet, system, values) {
    let systemResults = spreadsheet.filter(game => game.Console == system);
    return filterByValues(systemResults, values);
  }