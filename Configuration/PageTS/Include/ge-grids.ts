tx_gridelements {
	setup {
		ge-grid-1-1 {
			title = Two equal columns
			description = 
			icon = typo3conf/ext/microtemplate/Resources/Public/Images/Backend/ge-grid-1-1.svg
			config {
				colCount = 2
				rowCount = 1
				rows {
					1 {	
						columns {
							1 {
								name = Column One
								colPos = 101
							}
							2 {
								name = Column Two
								colPos = 102
							}
						}
					}
				}	
			}
		}
		ge-grid-1-1-1 {
			title = Three equal columns
			description = 
			icon = typo3conf/ext/microtemplate/Resources/Public/Images/Backend/ge-grid-1-1-1.svg
			config {
				colCount = 3
				rowCount = 1
				rows {
					1 {
						columns {
							1 {
								name = Column One
								colPos = 101
							}
							2 {
								name = Column Two
								colPos = 102
							}
							3 {
								name = Column Three
								colPos = 103
							}
						}
					}
				}
			}
		}
		ge-grid-1-2 {
			title = Two columns, wider right
			description = 
			icon = typo3conf/ext/microtemplate/Resources/Public/Images/Backend/ge-grid-1-2.svg
			config {
				colCount = 3
				rowCount = 1
				rows {
					1 {
						columns {
							1 {
								name = Column One
								colPos = 101
							}
							2 {
								name = Column Two
								colPos = 102
								colspan = 2
							}
						}
					}
				}
			}
		}
		ge-grid-2-1 {
			title = Two columns, wider left
			description = 
			icon = typo3conf/ext/microtemplate/Resources/Public/Images/Backend/ge-grid-2-1.svg
			config {
				colCount = 3
				rowCount = 1
				rows {
					1 {
						columns {
							1 {
								name = Column One
								colPos = 101
								colspan = 2
							}
							2 {
								name = Column Two
								colPos = 102
							}
						}
					}
				}
			}
		}
	}
}