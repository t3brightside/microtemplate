tx_gridelements {
	setup {
		ge-cards {
	    title = Cards
	    description = Content elements in card list
			icon = typo3conf/ext/microtemplate/Resources/Public/Images/Backend/ge-cards.svg
	    config {
	    	colCount = 1
	    	rowCount = 1
	    	rows {
	    		1 {	
	    			columns {
	    				1 {
	    					name = Card list content
	    					colPos = 101
	    				}
	    			}
	    		}
	    	}
	    }
#      flexformDS = FILE:EXT:microtemplate/Configuration/FlexForm/gridelements/cards.xml
    }
	}
}