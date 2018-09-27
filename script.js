(function() {
    let hotels = [];

    const api = 'https://hotels-backend.now.sh/';
    fetch(api + 'api/hotels/1')
        .then(function(response) {
            console.log('Request succeeded with JSON response');
            return response.json();
        })
        .then(function(data) {
            hotels = data;
            console.log(hotels);
            renderHotels();
        });


    function renderHotels() {

    }
})();