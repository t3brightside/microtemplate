page.includeJSFooterlibs.ge-accordion = EXT:microtemplate/Resources/Public/JavaScript/Content/ge-accordion.js
page {
	includeCSS.ge-accordion = EXT:microtemplate/Resources/Public/Styles/Content/ge-accordion.css
	headerData {
		10011 = TEXT
		10011.value (
			<style>
				.ge-accordion-section-title {color: {$microtemplate.text-default}}
				.ge-pagesection.text-light .accordion-section-title {color: {$microtemplate.text-light}}
				.ge-pagesection.text-dark .accordion-section-title {color: {$microtemplate.text-dark}}
			</style>
		)
	}
}

tt_content.gridelements_pi1 {
	10 =< lib.stdheader
	20 = COA
	20 {
		10 = USER
		10 { 
			userFunc = GridElementsTeam\Gridelements\Plugin\Gridelements->main
			setup {
				default < lib.gridelements.defaultGridSetup
		    ge-accordion {
		    	wrap = <div class="frame frame-default ge-accordion frame-space-before-{field:space_before_class} frame-space-after-{field:space_after_class}">|</div>
					wrap.insertData = 1
					columns {
						101 {
							renderObj = COA
							renderObj {
								10 = COA
								10 {
									wrap = <div class="ge-accordion-section">|</div>
									10 = TEXT
									10.field = header
									10.wrap = <a href="#acc{field:uid}" class="ge-accordion-section-title">|</a>
									10.wrap.insertData = 1
									15 = TEXT
									15.value = <div id="acc{field:uid}" class="ge-accordion-section-content">
									15.value.insertData = 1
									20 < tt_content
									25 = TEXT
									25.value = <div class="clear"></div></div>
								}
							}
						}
					}
				}
			}
		}
	}
}