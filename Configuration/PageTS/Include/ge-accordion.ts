tx_gridelements {
	setup {
		ge-accordion {
	    title = Accordion
	    description = Content elements as accordion
	    config {
	    	colCount = 1
	    	rowCount = 1
	    	rows {
	    		1 {	
	    			columns {
	    				1 {
	    					name = Accordion content
	    					colPos = 101
	    					disallowed {
				          tx_gridelements_backend_layout = ge-section,ge-accordion,ge-grid-1-1-1,ge-grid-1-1,ge-grid-1-2,ge-grid-2-1
				        }
	    				}
	    			}
	    		}
	    	}
	    }
    }
	}
}