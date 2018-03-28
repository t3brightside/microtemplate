# CSS includes and inline dynamic parametres from template constants
config {
	concatenateCss = 1
	compressCss = 1
	removePageCss = 1
}
page {
	includeCSS {
		microtemplate = EXT:microtemplate/Resources/Public/Styles/Page/microtemplate.css
	}
	headerData {
		1001 = TEXT
		1001.value (
			<style>
				body {color: {$microtemplate.text-default}; background-color: {$microtemplate.body-background}}
				.header-bg {background: {$microtemplate.header-bg}}
				.pageWidth {max-width: {$microtemplate.pageWidth}}
				.contentWidth {max-width: {$microtemplate.contentWidth}}
				.subpageContentWidth {max-width: {$microtemplate.subpageContentWidth}}
				a, a:visited, #menu a:hover, #menu .active a {color: {$microtemplate.accentColor}}
				.btn:visited, .btn, .closelink:hover i, input[type="radio"]:checked, input[type="checkbox"]:checked {background-color: {$microtemplate.accentColor}}
				.youtubeVideo:hover .customplaybutton polygon {fill: {$microtemplate.accentColor}}
			
				.ge-section {background-color: {$microtemplate.ge-section.bg-default}}
				.ge-section.bg-light {background-color: {$microtemplate.ge-section.bg-light}}
				.ge-section.bg-dark {background-color: {$microtemplate.ge-section.bg-dark}; color: {$microtemplate.text-light}}
				.ge-section.text-light {color: {$microtemplate.text-light}}
				.ge-section.text-dark {color: {$microtemplate.text-dark}}
				
				.subpage {color: {$microtemplate.text-dark}}
			</style>
		)
	}
}
[globalVar = LIT:0<{$microtemplate.ge-section-angeled-edges}]
	page.includeCSS.enable-ge-section-angeled-edges = EXT:microtemplate/Resources/Public/Styles/Page/ge-section-angeled-edges.css
[global]
[globalVar = LIT:0<{$microtemplate.scroll-effects}]
	page.includeCSS.scroll-effects = EXT:microtemplate/Resources/Public/Styles/Page/scroll-effects.css
[global]