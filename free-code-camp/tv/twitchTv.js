   $(document).ready(function () {
            var names = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "quin69"];

            names.forEach(function (element) {
                var url = 'https://wind-bow.glitch.me/twitch-api/streams/' + element + '?callback=?'
                $.ajax({
                    type: 'GET',
                    url: url,
                    success: function (data) {
                        element;
                        if (data.stream === null) {                        
                            $("#streamers").append(`<li>twitch.tv member: <a target ='_blank' href=https://go.twitch.tv/${element}> ${element}</a></li>  Status: Offline `)
                        } else {
                            var views = data.stream.viewers;
                            var vGame = data.stream.game;
                            $("#streamers").append(`<li>twitch.tv member: <a target ='_blank' href=https://go.twitch.tv/${element}>${element}</a></li> Status: Online  <p>Currently Streaming: ${vGame} <br> Viewers:${views}</p>`)
                        }

                    }, dataType: "jsonp"
                });
            });
        });

        function getRequest() {
            var userInput = document.getElementById("input").value;
            $.ajax({
                type: 'GET',
                url: 'https://wind-bow.glitch.me/twitch-api/streams/' + userInput + '?callback=?',
                success: function (data) {
                    if (data.stream === null) {
                        $("#searchResults").html(`<h4>twitch.tv member: <a target =' _blank' href=https://go.twitch.tv/${userInput}> ${userInput} </a></h4> Status: Offline`)
                    } else {
                        var views = data.stream.viewers;
                        var vGame = data.stream.game;
                        $("#searchResults").html(`<h4>twitch.tv member: <a href=https://go.twitch.tv/${typeUser}>${userInput}</a></h4> Status: Online <br> <p>Currently Streaming: ${vGame} <br> Viewers:${views}</p>`)
                    }
                    console.log(data);
                }, dataType: "jsonp"
            })
        };