page {
	headerData.8809091 = TEXT
	headerData.8809091.value (
		<link rel="preconnect" href="https://www.google-analytics.com/" crossorigin>
		<link rel="preconnect" href="https://www.googletagmanager.com" crossorigin>
		<script async src="https://www.googletagmanager.com/gtag/js?id={$microtemplate.googleAnalyticsCode}"></script>
  )
	jsFooterInline {
		10003346 = TEXT
		10003346.value (
			function loadGA(){
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', '{$microtemplate.googleAnalyticsCode}', { 'anonymize_ip': true });
		)
	}
	[globalVar = LIT:1 = {$microtemplate.ccactive}]
		jsFooterInline {
			10003346 = TEXT
			10003346.value (
				function loadGA(){
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '{$microtemplate.googleAnalyticsCode}', { 'anonymize_ip': true });
				}
			)
		}
	[global]
}
