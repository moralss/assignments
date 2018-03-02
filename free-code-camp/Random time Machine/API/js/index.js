        $(document).ready(function () {
            function getQuote() {
                $.ajax({
                    type: "GET",
                    url: "https://api.forismatic.com/api/1.0/",
                    jsonp: "jsonp",
                    dataType: "jsonp",
                    data: {
                        method: "getQuote",
                        lang: "en",
                        format: "jsonp"
                    },
                    success: function (quote) {
                        $('q').html(' ' + quote.quoteText + '  ')
                        $('p').html("-" + quote.quoteAuthor)
                        console.log(quote);
                    }

                });

            }
            $('#button').click(function () {
                return getQuote();
            })
        })