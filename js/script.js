
var hash = location.href.split('#!')[1].split('/');
var length = hash.length;

if(length == 3){
	var command = hash[length - 2];
	var phonenumber = hash[length - 1];
	document.getElementsByTagName('title')[0].innerHTML = "WhatsApp : Contact @" + phonenumber;

	var the_real_body = `
	<div class="tgme_page_wrap">
		<div class="tgme_head_wrap">
				<div class="tgme_head">
						<a href="//www.whatsapp.com/" class="tgme_head_brand">
								<i class="tgme_logo"></i>
						</a>
				</div>
		</div>
		<a class="tgme_head_dl_button" href="//www.whatsapp.com/dl">
				<i class="tgme_icon_arrow"></i> Don't have <strong>WhatsApp</strong> yet? Try it now!
		</a>
		<div class="tgme_page">
				<div class="tgme_page_icon">
						<i class="tgme_icon_user"></i>
				</div>
				<div class="tgme_page_description">
						If you have <strong>WhatsApp</strong>, you can contact
						<a id="clickthiswhensomebodygetstime" title="the PlugIn developer" class="tgme_username_link" href="me.shrimadhavuk.whatsapp://open/` + phonenumber + `">
							@` + phonenumber +`
						</a> right away.
				</div>
				<div class="tgme_page_action">
					<a class="tgme_action_button" href="whatsapp://send?text=Download%20this%20application%20to%20use%20this%20service%0D%0Ahttps%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dme.shrimadhavuk.numselapp%0D%0ATo%20know%20more%3A%20https%3A%2F%2Fshrimadhavuk.me%2Fblog%2Fwhy-telegram%2F%20%0D%0A%20android%20application%20by%20Shrimadhav%20U%20K">
						Send Message
					</a>
				</div>
		</div>

		<div class="tgme_footer">
				<div class="tgme_footer_description">Don't have <strong>WhatsApp</strong> yet? Try it now:</div>
				<div class="tgme_footer_action">
						<a class="tgme_action_button tgme_footer_dl_button" href="//www.whatsapp.com/dl">
								Get WhatsApp
						</a>
				</div>
		</div>
	</div>
	`;

	document.getElementsByTagName('body')[0].innerHTML = the_real_body;

	var protoUrl = "me.shrimadhavuk.whatsapp:\/\/open\/" + phonenumber;
	if (false) {
		var iframeContEl = document.getElementById('tgme_frame_cont') || document.body;
		var iframeEl = document.createElement('iframe');
		iframeContEl.appendChild(iframeEl);
		var pageHidden = false;
		window.addEventListener('pagehide', function () {
			pageHidden = true;
		}, false);
		window.addEventListener('blur', function () {
			pageHidden = true;
		}, false);
		if (iframeEl !== null) {
			iframeEl.src = protoUrl;
		}
		setTimeout(function() {
			if (!pageHidden) {
				window.location = protoUrl;
			}
		}, 2000);
	}
	else if (protoUrl) {
		setTimeout(function() {
			window.location = protoUrl;
		}, 100);
	}
}
else if(length == 2){
	var command = hash[length - 2];
	document.getElementsByTagName('title')[0].innerHTML = "WhatsApp : Contact @anybody";
	var the_real_body = `
	<div class="tgme_page_wrap">
		<div class="tgme_head_wrap">
				<div class="tgme_head">
						<a href="//www.whatsapp.com/" class="tgme_head_brand">
								<i class="tgme_logo"></i>
						</a>
				</div>
		</div>

		<a class="tgme_head_dl_button" href="https://play.google.com/store/apps/details?id=me.shrimadhavuk.numselapp">
				<i class="tgme_icon_arrow"></i> Don't have <strong>NWO</strong> yet? Try it now!
		</a>

		<div class="tgme_footer">
				<div class="tgme_footer_description">Don't have <strong>WhatsApp</strong> yet? Try it now:</div>
				<div class="tgme_footer_action">
						<a class="tgme_action_button tgme_footer_dl_button" href="//www.whatsapp.com/dl">
								Get WhatsApp
						</a>
						<br>
						<a class="tgme_action_button tgme_footer_dl_button" href="https://play.google.com/store/apps/details?id=me.shrimadhavuk.numselapp">
								Get NWO on G-Play
						</a>
						<br>
						<a class="tgme_action_button tgme_footer_dl_button" href="https://f-droid.org/app/me.shrimadhavuk.numselapp">
								Get NWO on F-Droid
						</a>
						<a class="tgme_action_button tgme_footer_dl_button" href="https://raw.githubusercontent.com/SpEcHiDe/NoWhatOpen/master/app/app-release.apk">
								Get NWO on GitHub-R
						</a>
				</div>
		</div>
	</div>
	`;

	document.getElementsByTagName('body')[0].innerHTML = the_real_body;

}
else{

}
