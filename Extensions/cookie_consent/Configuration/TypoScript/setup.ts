page.includeCSS.cookie_consent = EXT:microtemplate/Extensions/cookie_consent/Resources/Public/Styles/cookie_concent.css

#page.jsInline {
#  8809091 = TEXT
#  8809091.value = window.cookieconsent_options = {"message":"{$ccMessage}","dismiss":"{$ccAccept}","learnMore":"{$ccMore}","link":"{$ccLink}","theme":""};
#}

page.includeJSFooterlibs.cookieconsent = //cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js
page.includeJSFooterlibs.cookieconsent {
	external = 1
	async = 1
	excludeFromConcatenation = 1
	disableCompression = 1
}

page.jsFooterInline {
	1000334 = TEXT
	1000334.value (
		window.addEventListener("load", function(){
		window.cookieconsent.initialise({
		  "palette": {
		    "popup": {
		      "background": "#000",
		      "text": "#fff"
		    },
		    "button": {
		      "background": "{$microtemplate.accentColor}",
		      "text": "#fff"
		    }
		  },
			"type": "opt-in",
			revokable: "false",
		  "content": {
			  "message": "{$microtemplate.ccmessage}",
		    "dismiss": "{$microtemplate.ccdismiss}",
				"allow": "{$microtemplate.ccallow}",
		    "link": "{$microtemplate.ccmore}",
		    "href": "{$microtemplate.cchref}",
		  },
		  elements: {
			  messagelink: '<div id="cookieconsent:desc" class="cc-message">{{message}} <a class="cc-link" href="{{href}}">{{link}}</a></div>',
			  dismiss: '<a class="cc-opt-link cc-btn cc-dismiss">{{dismiss}}</a>',
				allow: '<a class="btn cc-opt-link cc-btn cc-allow">{{allow}}</a>',
			},
			onInitialise: function (status) {
			  if (status == cookieconsent.status.allow) {
			    loadGA();
			  }
			},
			onStatusChange: function(status, chosenBefore) {
			  if (status == cookieconsent.status.allow) {
			    loadGA();
			  }
			},
			onRevokeChoice: function() {
			  var type = this.options.type;
			  if (type == 'opt-in') {
			    window['ga-disable-{$microtemplate.googleAnalyticsCode}'] = true;
			  }
			},
		})});
	)
}
