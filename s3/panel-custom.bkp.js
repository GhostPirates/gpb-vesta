$(document).ready(function () {

	console.log('loaded!');
	let editWebString = "/edit/web/";
	let currentURL = window.location.href;

	if ( currentURL.includes(editWebString) ) {
		if ( $('#aliases_textarea').length > 0 ) {
			var aliases_textarea = $('#aliases_textarea');
		}
		if ( $('#aliases_textarea_heading').length > 0 ) {
			var aliases_textarea_heading = $('#aliases_textarea_heading');
		}
		if ( $('#v_template_select').length > 0 ) {
			var v_template_select = $('#v_template_select');
		}
		function transformAliases() {
			aliases_textarea_heading.text('Enter address:port to proxy, eg "127.0.0.1:8000"');
			aliases_textarea.attr('rows', '1');
			aliases_textarea.css('height', '24px');
		}
		
		function untransformAliases() {
			aliases_textarea_heading.text('Aliases');
			aliases_textarea.attr('rows', '5');
			aliases_textarea.css('height', '90px');
		}
		if ( aliases_textarea && v_template_select.length > 0 && aliases_textarea.length > 0 ) {
			if ( v_template_select.val().indexOf("proxy") !== -1 ) {
				console.log( 'load '+ v_template_select.val() );
				transformAliases();
			}
			v_template_select.on('change', function() {
				if ( this.value.indexOf("proxy") !== -1 ) {
					console.log('toggle '+this.value)
					transformAliases();
				} else {
					untransformAliases();
				}
			});
		}
	}
});
