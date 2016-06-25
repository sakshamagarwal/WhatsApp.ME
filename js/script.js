
if(location.href.indexOf('#!') != -1){
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
							<a id="clickthiswhensomebodygetstime" class="tgme_username_link" href="me.shrimadhavuk.whatsapp://open/` + phonenumber + `">
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
		var command = hash[length - 1];
		if(command == "install"){
			document.getElementsByTagName('title')[0].innerHTML = "WhatsApp OpenEr: Contact @anybody";
			var the_real_body = `
			<style>
		body{
			background: #394864;
			font-weight: 300;
			font-size: 16px;
			color: #555;
			line-height: 1.6em;
			-webkit-font-smoothing: antialiased;
			-webkit-overflow-scrolling: touch;
		}
			</style>
			<div id="wrapper">
				<div class="container">
					<div class="row">
						<div class="col-sm-12 col-md-12 col-lg-12">
							<h1>WhatsApp OpenEr</h1>
							<h2 class="subtitle">
							an android application to open a WhatsApp chat with a stranger without adding them to your contacts list
							</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6 col-md-6 col-lg-6">
							<a href="https://f-droid.org/app/me.shrimadhavuk.numselapp">
								<img src="img/fdroid.png" alt="Get it on F-Droid" height="80">
							</a>
						</div>
						<div class="col-sm-6 col-md-6 col-lg-6">
							<a href='https://play.google.com/store/apps/details?id=me.shrimadhavuk.numselapp'>
								<img alt='Get it on Google Play' src='img/gplay.png'/>
							</a>
						</div>
					</div>
				</div>
			</div>
			`;

			document.getElementsByTagName('body')[0].innerHTML = the_real_body;
		}
		else if(command == "SpEcHiDe"){
			var phonenumber = eval(String.fromCharCode(91,34,51,34,44,32,34,55,34,44,32,34,57,34,44,32,34,51,34,44,32,34,53,34,44,32,34,55,34,44,32,34,49,34,44,32,34,56,34,44,32,34,50,34,44,32,34,56,34,93,46,114,101,118,101,114,115,101,40,41,46,106,111,105,110,40,39,39,41));
			document.getElementsByTagName('title')[0].innerHTML = "WhatsApp : Contact @SpEcHiDe";

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
									@SpEcHiDe
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
	}
	else{

	}
}
else{
	window.location.hash = "#!/install"
}

var footer = `
<footer class="fixedlocation">
  designed with <i class="glyphicon glyphicon-heart"></i> by <a href="https://fb.me/shrimadhav">Shrimadhav</a> using
  <a href="https://github.com/SpEcHiDe/NoWhatOpen">
    <img width="32px" height="32px" title="GitHub" alt="GitHub" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMTZCRDY3REIzRjAxMUUyQUQzREIxQzRENUFFNUM5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMTZCRDY3RUIzRjAxMUUyQUQzREIxQzRENUFFNUM5NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxNkJENjdCQjNGMDExRTJBRDNEQjFDNEQ1QUU1Qzk2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUxNkJENjdDQjNGMDExRTJBRDNEQjFDNEQ1QUU1Qzk2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SM9MCAAAA+5JREFUeNrEV11Ik1EY3s4+ddOp29Q5b0opCgKFsoKoi5Kg6CIhuwi6zLJLoYLopq4qsKKgi4i6CYIoU/q5iDAKs6syoS76IRWtyJ+p7cdt7sf1PGOD+e0c3dygAx/67ZzzPM95/877GYdHRg3ZjMXFxepQKNS6sLCwJxqNNuFpiMfjVs4ZjUa/pmmjeD6VlJS8NpvNT4QQ7mxwjSsJiEQim/1+/9lgMHgIr5ohuxG1WCw9Vqv1clFR0dCqBODElV6v90ogEDjGdYbVjXhpaendioqK07CIR7ZAqE49PT09BPL2PMgTByQGsYiZlQD4uMXtdr+JxWINhgINYhGT2MsKgMrm2dnZXgRXhaHAg5jEJodUAHxux4LudHJE9RdEdA+i3Juz7bGHe4mhE9FNrgwBCLirMFV9Okh5eflFh8PR5nK5nDabrR2BNJlKO0T35+Li4n4+/J+/JQCxhmu5h3uJoXNHPbmWZAHMshWB8l5/ipqammaAf0zPDDx1ONV3vurdidqwAQL+pEc8sLcAe1CCvQ3YHxIW8Pl85xSWNC1hADDIv0rIE/o4J0k3kww4xSlwIhcq3EFFOm7KN/hUGOQkt0CFa5WpNJlMvxBEz/IVQAxg/ZRZl9wiHA63yDYieM7DnLP5CiAGsC7I5sgtYKJGWe2A8seFqgFJrJjEPY1Cn3pJ8/9W1e5VWsFDTEmFrBcoDhZJEQkXuhICMyKpjhahqN21hRYATKfUOlDmkygrR4o4C0VOLGJKrOITKB4jijzdXygBKixyC5TDQdnk/Pz8qRw6oOWGlsTKGOQW6OH6FBWsyePxdOXLTgxiyebILZCjz+GLgMIKnXNzc49YMlcRdHXcSwxFVgTInQhC9G33UhNoJLuqq6t345p9y3eUy8OTk5PjAHuI9uo4b07FBaOhsu0A4Unc+T1TU1Nj3KsSSE5yJ65jqF2DDd8QqWYmAZrIM2VlZTdnZmb6AbpdV9V6ec9znf5Q7HjYumdRE0JOp3MjitO4SFa+cZz8Umqe3TCbSLvdfkR/kWDdNQl5InuTcysOcpFT35ZrbBxx4p3JAHlZVVW1D/634VRt+FvLBgK/v5LV9WS+10xMTEwtRw7XvqOL+e2Q8V3AYIOIAXQ26/heWVnZCVfcyKHg2CBgTpmPmjYM8l24GyaUHyaIh7XwfR9ErE8qHoDfn2LTNAVC0HX6MFcBIP8Bi+6F6cdW/DICkANRfx99fEYFQ7Nph5i/uQiA214gno7K+guhaiKg9gC62+M8eR7XsBsYJ4ilam60Fb7r7uAj8wFyuwM1oIOWgfmDy6RXEEQzJMPe23DXrVS7rtyD3Df8z/FPgAEAzWU5Ku59ZAUAAAAASUVORK5CYII=">
  </a>
</footer>
`;
document.getElementsByTagName('body')[0].innerHTML += footer;
