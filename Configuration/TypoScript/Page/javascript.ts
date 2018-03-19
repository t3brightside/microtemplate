# javascript for menus can be found in deticated typoscript files (Menus/sectionMenu.ts for example)
config {
	concatenateJs = 0
	compressJs = 0
	moveJsFromHeaderToFooter = 1
	removeDefaultJS = 
} 
page.javascriptLibs {
	jQuery = 1
	jQuery.version = {$microtemplate.jQueryVersion}
	jQuery.source = cloudflare
	jQuery.noConflict = 0
}

# applied to all pages
page.includeJSFooterlibs.all = EXT:microtemplate/Resources/Public/JavaScript/Page/all.js

# applied to home page only
[globalVar = TSFE:page|backend_layout = pagets__home]
	page.includeJSFooterlibs.home = EXT:microtemplate/Resources/Public/JavaScript/Page/home.js
[global]

