var params = {
   'api_key_public': 'pub_0c68dae5600f4caaa2ac79eddab193b3',
    'venue_id': 'ven_4d6f4554787a38336536755267593947775447744d7a554a496843',
    'day_int': 3
}

$.ajax({
"url": "https://besttime.app/api/v1/forecasts/day?" + new URLSearchParams(params),
"method": "GET"
}).done(function (response) {
    console.log(response);
    $("#results2").html("The peak time is " + response["analysis"]["hour_analysis"][0]["hour"]);
});