page {
	headerData.8809091 = TEXT
	headerData.8809091.value (
		<link rel="preconnect" href="https://www.google-analytics.com/" crossorigin>
		<link rel="preconnect" href="https://www.googletagmanager.com" crossorigin>
		<script async src="https://www.googletagmanager.com/gtag/js?id={$microtemplate.googleAnalyticsCode}"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());
		  gtag('config', '{$microtemplate.googleAnalyticsCode}', { 'anonymize_ip': true });
		</script>
		<!-- Global site tag (gtag.js) - Google Analytics -->

  )
}
