tt_content.gridelements_pi1 {
	10 =< lib.stdheader
	20 = COA
	20 {
		10 = USER
		10 { 
			userFunc = GridElementsTeam\Gridelements\Plugin\Gridelements->main
			setup {
				default < lib.gridelements.defaultGridSetup
		    ge-section < .default
		    ge-section {
			    cObject = FLUIDTEMPLATE
	        cObject.file = EXT:microtemplate/Resources/Private/Templates/Content/ge-section.html
	        cObject {
		        dataProcessing.10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
				    dataProcessing.10.references.fieldName = assets
		        variables {
					    ge-section-angeled-edges = TEXT
							ge-section-angeled-edges.value = {$microtemplate.ge-section-angeled-edges}
					    
					    sectionBg = FILES
							sectionBg  {
								begin = 0
								maxItems = 1
								references.fieldName = image
								renderObj = COA
								renderObj {
									# first get the image cropped and scaled
									5 = LOAD_REGISTER
									5.theImage.cObject = IMG_RESOURCE
									5.theImage.cObject.file {
							    	import.data = file:current:publicUrl
							    	crop.data = file:current:crop
							    	width = {$microtemplate.ge-section.bg-width}
										width.override.field = flexform_bgimagewidth
									}	
									10 = IMG_RESOURCE
									10 {
										file = GIFBUILDER
										file {
									    format = jpg
									    XY = [5.w],[5.h]
									    5 = IMAGE
									    5.file.import.data = REGISTER:theImage
									    
									    # predefined image effects
									    									   
									    10 = SCALE
									    10.params = -fill white -colorize 40%
									    10.if.value = 10
									    10.if.equals.field = flexform_bgimgeffect
									    
									    20 = SCALE
									    20.params = -fill black -colorize 70%
									    20.if.value = 20
									    20.if.equals.field = flexform_bgimgeffect
									    
									    30 = SCALE
									    30.params = -filter Gaussian -define filter:sigma=10
									    30.if.value = 30
									    30.if.equals.field = flexform_bgimgeffect
									    
									    40 = SCALE
									    40.params = -filter Gaussian -define filter:sigma=20
									    40.if.value = 40
									    40.if.equals.field = flexform_bgimgeffect
									   
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}