# customsubcategory=microtemplate=Microtemplate setup
# cat=Microtemplate/microtemplate; type=int; label= Home page ID (Has to be set if Home is a sub page)
	microtemplate.rootPageId = 
# cat=Microtemplate/microtemplate; type=string; label= Domain name with https(s) and ending /:Example: https://emaple.com/;
	microtemplate.domainName = /
# cat=Microtemplate/microtemplate; type=string; label=Language code:Two letter ISO code like: en, de, fr...
	microtemplate.language = en
# cat=Microtemplate/microtemplate; type=string; label=Locale (en_UK, de_DE...)	
	microtemplate.locale_all = en_UK
# cat=Microtemplate/microtemplate; type=int; label=Cache max age in seconds	
	microtemplate.cacheControlMaxAge = 3600
# cat=Microtemplate/microtemplate; type=string; label=jQuery version number
	microtemplate.jQueryVersion = 3.3.1
# cat=Microtemplate/microtemplate; type=boolean; label=Enable realURL:RealURL extension has to be installed
	microtemplate.realurl = 1

# customsubcategory=microtemplatestyles=Microtemplate styles & design
# cat=Microtemplate/microtemplatestyles; type=string; label=Logo file location: Or add file in home page settings 'Resources' -> 'Media'
	microtemplate.logoFile = typo3conf/ext/microtemplate/Resources/Public/Images/brightside_logo.svg
# cat=Microtemplate/microtemplatestyles; type=color; label=Default text color: Body, headers, main menu
	microtemplate.text-default = #111111
# cat=Microtemplate/microtemplatestyles; type=color; label=Default background color: <body>
	microtemplate.body-background = #ffffff
# cat=Microtemplate/microtemplatestyles; type=color; label=Accent color:Link color & button background
	microtemplate.accentColor = #db0500
# cat=Microtemplate/microtemplatestyles; type=color; label=Light text:Used on dark background or if set in section settings
	microtemplate.text-light = #fff
# cat=Microtemplate/microtemplatestyles; type=color; label=Dark text:Used on light background or if set in section settings
	microtemplate.text-dark = #000
# cat=Microtemplate/microtemplatestyles; type=color; label=Default section background
	microtemplate.ge-section.bg-default = #ffffff
# cat=Microtemplate/microtemplatestyles; type=color; label=Light section background
	microtemplate.ge-section.bg-light = #f2f2f2
# cat=Microtemplate/microtemplatestyles; type=color; label=Dark section background
	microtemplate.ge-section.bg-dark = #353535
# cat=Microtemplate/microtemplatestyles; type=color; label=Header background
	microtemplate.header-bg = #fff
# cat=Microtemplate/microtemplatestyles; type=string; label=Maximum home page width (px, em or %)
	microtemplate.pageWidth = 100%
# cat=Microtemplate/microtemplatestyles; type=string; label=Maximum home page content width (px, em or %)
	microtemplate.contentWidth = 1240px
# cat=Microtemplate/microtemplatestyles; type=string; label=Maximum sub page content width (px, em or %)
	microtemplate.subpageContentWidth = 860px
# cat=Microtemplate/microtemplatestyles; type=int; label=Content section background image width (px)
	microtemplate.ge-section.bg-width = 1400
# cat=Microtemplate/microtemplatestyles; type=int[10-100]; label=Content section background jpg quality
	microtemplate.ge-section.bg-quality = 80
# cat=Microtemplate/microtemplatestyles; type=boolean; label=Enable 3 degree angled edges between content sections:Experimental, fixed backgrounds won't work in some browsers if activated
	microtemplate.ge-section-angeled-edges = 0

# cat=Microtemplate/microtemplatestyles; type=int; label=Maximum image width (px)
	styles.content.textmedia.maxW = 1200
# cat=Microtemplate/microtemplatestyles; type=int; label=Maximum image width in text (px)
	styles.content.textmedia.maxWInText = 600

# Sets default header type for sub pages
	styles.content.defaultHeaderType = 2
# Sets default header type for home page
	[globalVar = TSFE:page|backend_layout = pagets__home]
		styles.content.defaultHeaderType = 1
	[global]