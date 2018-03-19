mod.web_layout.BackendLayouts {
	home {
		title = Home
		config {
			backend_layout {
				colCount = 1
				rowCount = 2
				rows {
					1 {
						columns {
							1 {
								name = Page content
								colPos = 0
								allowedGridTypes = ge-section
								allowed.CType = gridelements_pi1
							}
						}
					}
				}
			}
		}
	}
  sub {
    title = Sub page
    config {
			backend_layout {
				colCount = 1
				rowCount = 2
				rows {
				  1 {
				    columns {
				      1 {
				        name = Content title (overrides automatic title)
				        allowed = header
				        colPos = 5
				      }
				    }
				  }
				  2 {
				    columns {
				      1 {
				        name = Page content
				        disabledGridTypes = grid-pagesection
				        colPos = 0
				        disallowed {
				          tx_gridelements_backend_layout = ge-section
				        }
				      }
				    }
				  }
				}
			}
    }
  }
  article {
    title = Article page
    config {
			backend_layout {
				colCount = 1
				rowCount = 2
				rows {
				  1 {
				    columns {
				      1 {
				        name = Article title (overrides automatic title)
				        allowed = header
				        colPos = 5
				      }
				    }
				  }
				  2 {
				    columns {
				      1 {
				        name = Article content
				        disabledGridTypes = grid-pagesection
				        colPos = 0
				        disallowed {
				          tx_gridelements_backend_layout = ge-section
				        }
				      }
				    }
				  }
				}
			}
    }
  }
}