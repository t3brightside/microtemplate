# loads base template from extension folder
	<INCLUDE_TYPOSCRIPT: source="FILE:EXT:pagegallery/Configuration/TypoScript/setup.ts">

# sets custom CSS file
	page.includeCSS.pagegallery = EXT:microtemplate/Extensions/pagegallery/Resources/Public/Styles/pagegallery.css

# sets custom template folder
	tt_content.defaultpagegallery.templateRootPaths.200 = EXT:microtemplate/Extensions/pagegallery/Resources/Private/Templates/