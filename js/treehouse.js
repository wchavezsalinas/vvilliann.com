$.ajax({
    url: 'https://teamtreehouse.com/williamchavezsalinas.json',
    type: 'GET',
    success: function(data) {
        console.log(data.badges[data.badges.length - 1]);
		$(".treehouse").append("<p><a href='http://teamtreehouse.com/williamchavezsalinas' target='_blank' class='icon-link'><i class='fa fa-home'></i></a> TTH Points: " + data.points.total + ", Last Badge Achieved: <a target='_blank' href='" + data.badges[data.badges.length - 1].url + "'>" + data.badges[data.badges.length - 1].name + "</a> in <a target='_blank' href='" + data.badges[data.badges.length - 1].courses[0].url + "'>" + data.badges[data.badges.length - 1].courses[0].title + "</a></p>");
    }
});
