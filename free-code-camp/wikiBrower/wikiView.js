$('#search').click(function () {
    var searchTerm = document.getElementById("searchTerm").value;

    var wikiSearchUrl = 'https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm;


    $.getJSON(wikiSearchUrl, function (data) {
        $("#output").html("");
        for (i = 0; i < data[1].length; i++) {
            console.log(data[1][i]);
            var keyWord = list = "<li><b>  " + data[1][i] + " </b></li>";
            var description = "<li>" + data[2][i] + "</li>";
            var link = "<li> <a href='" + data[3][i] + "'>link To Site</a></li>";


            $("#output").append(keyWord + description + link);
        }

    });


});