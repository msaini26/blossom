var params = {
   'api_key_public': 'pub_0c68dae5600f4caaa2ac79eddab193b3',
    'venue_id': 'ven_3065424e737a57706274645267593946384866793133574a496843',
    'day_int': 3
}

$.ajax({
"url": "https://besttime.app/api/v1/forecasts/day?" + new URLSearchParams(params),
"method": "GET"
}).done(function (response) {
    console.log(response);
    $("#results3").html("The peak time is " + response["analysis"]["hour_analysis"][0]["hour"]);
});