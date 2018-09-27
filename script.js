(function() {
    const api = 'https://typeahead-backend-crgxcwsytz.now.sh/';
    fetch(api + 'api/hotels/1')
        .then(function(response) {
            console.log('Request succeeded with JSON response');
            return response.json();
        })
})();