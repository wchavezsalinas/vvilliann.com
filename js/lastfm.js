var info = $.ajax({
    url: 'http://ws.audioscrobbler.com/2.0/',
    type: 'GET',
    data: 'method=user.getrecenttracks&user=wchavezsalinas&api_key=ccc64d1610c1a21331b136ec7af0b0c4&format=json&limit=2',
    success: function() { 
		var lastTrackArtist = info.responseJSON.recenttracks.track[0].artist["#text"];
		var lastTrackName =  info.responseJSON.recenttracks.track[0].name;
		var lastTrackAlbumName = info.responseJSON.recenttracks.track[0].album["#text"];
		var songURL = info.responseJSON.recenttracks.track[0].url;
		$(".lastFMInfo").append("<p><a href='http://www.last.fm/user/wchavezsalinas' target='_blank' class='icon-link'><i class='fa fa-lastfm-square'></i></a> Last Track Played: \"" + "<a href='" + songURL+ "' target='_blank'>" + lastTrackName + "</a>\" by " + lastTrackArtist + "</p>");
    }
});


jQuery(function ($) {
    var $active = $('#accordion .panel-collapse.in').prev().addClass('active');
    
    $active.find('a').prepend('<i class="glyphicon glyphicon-minus"></i>');
    
    $('#accordion .panel-heading').not($active).find('a').prepend('<i class="glyphicon glyphicon-plus"></i>');
    
    $('#accordion').on('show.bs.collapse', function (e) {
        $('#accordion .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
        $(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
    })
});
