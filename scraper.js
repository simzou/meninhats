links = document.getElementsByTagName('a');
image_links = [];
for (var i = 11; i < links.length; i++) {
	var possible_link = links[i].href.split('/')[4];
	if (possible_link) {
		var num = links[i].href.split('/')[4].split('.')[0];
		var image_link = "http://www.meninhats.com/comics/" + num + ".gif";
		//image_links.push(image_link);
		console.log(image_link);
		image_links.push('<a href = "' + image_link + '">' + i + '</a>');
	}
}