page.includeCSS.ge-cards = EXT:microtemplate/Resources/Public/Styles/Content/ge-cards.css
page.jsFooterInline.300 = TEXT
page.jsFooterInline.300.value ( 
	$( document ).ready(function() {
		$('.ge-cards').each(function() {
		  if ($(this).width() < 740){
		  	$(this).addClass( 'small' );
		  } else{
				$(this).removeClass('small')
			} 
		});
		$('.ge-cards').each(function() {
		  if ($(this).width() < 420){
		  	$(this).addClass( 'tiny' );
		  } else{
				$(this).removeClass('tiny')
			} 
		});
	});
	
	$(window).resize(function(){
	  $('.ge-cards').each(function() {
		  if ($(this).width() < 740){
		  	$(this).addClass( 'small' );
		  } else{
				$(this).removeClass('small')
			} 
		});
		$('.ge-cards').each(function() {
		  if ($(this).width() < 420){
		  	$(this).addClass( 'tiny' );
		  } else{
				$(this).removeClass('tiny')
			} 
		});

	});
)

tt_content.gridelements_pi1 {
	20 = COA
	20 {
		10 = USER
		10 { 
			userFunc = GridElementsTeam\Gridelements\Plugin\Gridelements->main
			setup {
				default < lib.gridelements.defaultGridSetup
		    ge-cards {
		    	wrap = <div class="frame ge-cards frame-space-before-{field:space_before_class} frame-space-after-{field:space_after_class}">|</div>
					wrap.insertData = 1
					columns {
						101 {
							renderObj = COA
							renderObj {
								10 = COA
								10 {
									wrap = <div class="ge-card">|</div><div class="ge-card-space"></div>
									20 < tt_content
								}
							}
						}
					}
				}
			}
		}
	}
}