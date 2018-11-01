config {
  metaCharset = utf-8
  typolinkEnableLinksAcrossDomains = 1
  cache_period = {$microtemplate.cacheControlMaxAge}
  sendCacheHeaders=1
  absRefPrefix = {$microtemplate.domainName}
  baseURL = {$microtemplate.domainName}
  tx_realurl_enable = {$microtemplate.realurl}
	spamProtectEmailAddresses = -1
  spamProtectEmailAddresses_atSubst = @
  spamProtectEmailAddresses_lastDotSubst = .
# frontend_editing = 1
# language settings
	sys_language_uid = 0
	language = {$microtemplate.language}
	locale_all = {$microtemplate.locale_all}
  htmlTag_langKey = {$microtemplate.language}
	linkVars = L
  sys_language_overlay = hideNonTranslated
  sys_language_mode = strict
}

# header data
page {
	config {
  	headerComment (
**********************************************************************
*   Based on Microtemplate: https://mirotemplate.t3brightside.com    *
**********************************************************************
  	)
  }
	meta.viewport.value = width=device-width, initial-scale=1.0
	meta.keywords.data = page:keywords
	meta.description.data = page:description
	headerData.899 = TEXT
	headerData.899.value (
		<link rel="preconnect" href="https://cdnjs.cloudflare.com/" crossorigin>
		<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
  )
}

# fluidtemplat settings and variables
page = PAGE
page {
	typeNum = 0
	10 = FLUIDTEMPLATE
	10 {
		partialRootPath = EXT:microtemplate/Resources/Private/Partials/
		layoutRootPath = EXT:microtemplate/Resources/Private/Layouts/
		templateRootPaths = EXT:microtemplate/Resources/Private/Templates/

    dataProcessing.10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
    dataProcessing.10.references.fieldName = media
		variables {
			logoFile = TEXT
			logoFile.value = {$microtemplate.logoFile}

			rootPageId = TEXT
			rootPageId.value = {$microtemplate.rootPageId}

			contentDefault = COA
			contentDefault {
				10 = LOAD_REGISTER
				10.maxImageWidth = {$microtemplate.pageWidth}
				20 < styles.content.get
				20.select.where = colPos = 0
				30 = RESTORE_REGISTER
			}
			contentHeader = CONTENT
			contentHeader.table = tt_content
			contentHeader {
				select {
			  	orderBy = sorting
					where = colPos=5
				}
				renderObj = COA
				renderObj {
			  	10 = TEXT
					10.stdWrap.field = header
					10.stdWrap.wrap = |
				}
			}
		#	contentFooter < .contentDefault
		#	contentFooter.20.select.where = colPos = 6
		#	contentFooter.20.slide = -1
		}
    file.stdWrap.cObject = CASE
    file.stdWrap.cObject {
      key.data = levelfield:-1, backend_layout_next_level, slide
      key.override.field = backend_layout
      default = TEXT
      default.value = EXT:microtemplate/Resources/Private/Templates/Home.html
      pagets__home = TEXT
      pagets__home.value = EXT:microtemplate/Resources/Private/Templates/Home.html
      pagets__sub = TEXT
      pagets__sub.value = EXT:microtemplate/Resources/Private/Templates/Sub.html
      pagets__article = TEXT
      pagets__article.value = EXT:microtemplate/Resources/Private/Templates/Article.html
    }
  }
}

[userFunc = TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('personnel')]
  page.10.dataProcessing {
    40 = TYPO3\CMS\Frontend\DataProcessing\DatabaseQueryProcessor
    40 {
      table = tx_personnel_domain_model_person
      uidInList.field = tx_pagelist_authors
      pidInList = 0
      as = authors
      dataProcessing {
        10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
        10.references.table = tx_personnel_domain_model_person
        10.references.fieldName = images
        10.as = authorimages
      }
    }
  }
[global]
