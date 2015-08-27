$(document).ready(function() {

    var request;

    $.ajax({
        url: '../ig/instagram.php',
        type: 'GET',
        dataType: 'json',
        success: function(data, textStatus, xhr)
        {
            var counter = 0;
            for (var i = 1; i < 4; i++)
            {
                for(var j = 1; j < 5; j++)
                {
                    var url = data.data[counter].images.standard_resolution.url;
                    var urlPic = data.data[counter].link;
                    $(".row" + i + "col" + j).attr("src", url);
                    $(".arow" + i + "col" + j).attr("src", urlPic);
                    counter++;
                }

            }
        }

    });
});
