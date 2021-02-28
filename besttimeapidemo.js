var params = {
   'api_key_public': 'pub_0c68dae5600f4caaa2ac79eddab193b3',
    'venue_id': 'ven_306b70434161475172435f526b6f776278354d6d6838644a496843',
    'day_int': 3
}

$.ajax({
"url": "https://besttime.app/api/v1/forecasts/day?" + new URLSearchParams(params),
"method": "GET"
}).done(function (response) {
    console.log(response);
    $("#results").html("The peak time is " + response["analysis"]["hour_analysis"][0]["hour"]);
});