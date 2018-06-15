page.includeJSFooterlibs.section_menu = EXT:microtemplate/Resources/Public/JavaScript/Menus/section_menu.js

# applied on main page template only

page {
	includeCSS.section_menu = EXT:microtemplate/Resources/Public/Styles/Menus/section_menu.css	
	headerData {
		1013 = TEXT
		1013.value (
			<style>
				#menu a {color: {$microtemplate.text-default}}
				.hmbrgr i {background: {$microtemplate.text-default}}
			</style>
		)
	}
}

[globalVar = TSFE:page|backend_layout = pagets__home]	
# create menu items out of top most content elements, gridelements page secrions in this template
	menuLinks = COA
	menuLinks {
		10 = CONTENT
		10 {
		  wrap = <nav><ul>|</ul></nav>
      table = tt_content
      select.where = colPos=0 AND sectionIndex=1
      select.orderBy = sorting
      renderObj = COA
      renderObj {
				10 = TEXT
				10 {
					dataWrap = <li class="m{field:uid}">|</li>
	        field = header
					typolink.parameter.field = pid
					typolink.section.field = uid
					required = 1
				}
			}
    }
	}
	mainMenu = COA
	mainMenu {
		wrap = <a class="hmbrgr" aria-label="menu" href="javascript:void(0)"><b><i class="f"></i><i class="m"></i><i class="l"></i></b></a><div id="menu">|</div>
		10 < menuLinks
	#	20 < menuContentForExample
	}
[global]