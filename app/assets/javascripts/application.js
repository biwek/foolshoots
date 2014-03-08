// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var tag = 'canon';
var count = 5;
var access_token = '2994756.3b20e6c.5029eb8613314357b6739a886a6d85e0';
var access_parameters = {access_token:access_token};
var client_id = '3b20e6c61d2a4438ad17b901eb2f1cca';

function grabImages(access_parameters) {  
	var instagramUrlBiwek = 'https://api.instagram.com/v1/users/self/media/recent/?callback=?&count=20';
	$.getJSON(instagramUrlBiwek, access_parameters, onDataLoaded);
}

function grabYImages(access_parameters) {
	var instagramUrlYugal = 'https://api.instagram.com/v1/users/32476095/media/recent/?callback=?&count=20';
	$.getJSON(instagramUrlYugal, access_parameters, onDataLoaded)
}

function onDataLoaded(instagram_data) {  
		if(instagram_data.meta.code == 200) {
			var photos = instagram_data.data;
			if(photos.length > 0) {
				for (var key in photos ){
  				var photo = photos[key];
          try {
  				  $('.images').append("<img class='small' src=" + photo.images.thumbnail.url + ">");
          } catch(err) {}
				}
			} else {   					
				$('.images').append('Sorry no snaps!');
			}
		} else  {
			var error = instagram_data.meta.error_message;
			$('.images').append("Oops. Error occurred: " + error);
		}
}


$(document).ready(function(){
	grabYImages(access_parameters);
	grabImages(access_parameters);
});
