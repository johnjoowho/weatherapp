const OPENWEATHER_SEARCH_URL = 'http://api.openweathermap.org/data/2.5/forecast?';

function getDataFromApi(searchTerm, callback) {
  const settings = {
    url: OPENWEATHER_SEARCH_URL,
    data: {
      APPID: '12344363e742a0a237023eb80cdca95b',
      id='707860'
    },
    
    dataType: 'json',
    type: 'GET',
    success: callback
  };

  $.ajax(settings);
}

function renderResult(result) {
  return `
    ${Object.main.temp}
  `;
}

function displayResults(data) {
  $('.js-search-results').html(renderResults);
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displayResults);
  });
}

$(watchSubmit);