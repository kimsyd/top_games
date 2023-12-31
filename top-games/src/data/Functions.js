export {filterByGenre, filterBySystem, filterByValues, filterByYear, getYear, filterByPublisher, genresGrouped, salesByGenre };

/*
function filterByValues(array, count)
parameters: - array: array/spreadsheet to filter w/
            - count : number of entries to return
returns array w/ count number of entries
ref: https://stackoverflow.com/questions/56168771/how-to-limit-for-10-results-the-array-filter
*/

let filtered_values = [];

function filterByValues(array, count) {
  filtered_values = array.filter(function(item) {
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
  let genreFiltered = spreadsheet.filter((game) => game.Genre === genre);
  return filterByValues(genreFiltered, count);
}

/*
function filterByYear
parameters: - spreadsheet: spreadsheet to pull games form
            - year: year to filter gamess with
returns all games for the designated year
*/
function filterByYear (spreadsheet, year) {
  let yearResults = spreadsheet.filter((game) => getYear(game) === year);
  return yearResults;
}


function getYear(game){
  let exampleYear = game['Release Date'];
  return new Date(exampleYear).getFullYear();
}


function filterBySystem(spreadsheet, system, values) {
    let systemResults = spreadsheet.filter(game => game.Console === system);
    return filterByValues(systemResults, values);
}

function filterByPublisher(spreadsheet, publisher, values) {
  let publisherGames = spreadsheet.filter(game => game.Publisher === publisher);
  return filterByValues(publisherGames, values);
}

function genresGrouped(spreadsheet) {
  let genres = Object.entries(spreadsheet.reduce((allGenres, game) => {
    const genreValue = game['Genre'];

    // Create an array for the key if it doesn't exist
    if (!allGenres[genreValue]) {
      allGenres[genreValue] = [];
    }

    // Push the item into the array for the key
    allGenres[genreValue].push(game);

    return allGenres;
  }, {}));
  return genres;
}

function salesByGenre(eachGenre) {
  eachGenre[1] = eachGenre[1].reduce((sum, curr) => sum + curr["Total Sales"], 0);
  return eachGenre;
}
