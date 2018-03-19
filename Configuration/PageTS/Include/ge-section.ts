tx_gridelements {
	setup {
		ge-section {
	    title = Section
	    description = Content section with background color, image, video etc. Section title shows in main menu if not excluded.
	    config {
	    	colCount = 1
	    	rowCount = 1
	    	rows {
	    		1 {	
	    			columns {
	    				1 {
	    					name = Section content
	    					colPos = 101
	    					disallowed {
				          tx_gridelements_backend_layout = ge-section
				        }
	    				}
	    			}
	    		}
	    	}
	    }
      flexformDS = FILE:EXT:microtemplate/Configuration/FlexForm/gridelements/ge-section.xml
    }
	}
}