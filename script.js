$(document).ready(function () {
            var colors = ['#000000','#ffffff','#4286f4', '#828dfe', '#6d58f3'];

            var quote;
            var author;
            qgen();

            function qgen() {
                var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=600000&format=jsonp&lang=en&jsonp=?";


                $.getJSON(url, function (data) {
                    quote = data.quoteText;
                    author = data.quoteAuthor;
                    $("#quote p").text(quote);
                    if (author == "") {
                        $("#author").text("Unknown");
                    } else {
                        $("#author").text(author);
                    };

                });
            }
            $("#tweet-btn").on("click", function () {
                window.open("https://twitter.com/intent/tweet?text=" + '"' + quote + '"' + " By " + author)
            })

            $("#quotebutton").on("click", function () {
                qgen();
                var color = Math.floor(Math.random() * colors.length);
                
                $("h1").animate({
                    color: colors[color]
                }, 500);
                $("body").toggleClass('gradiento');
            })
        })