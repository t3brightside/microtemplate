<?php
	defined('TYPO3_MODE') || die();
	
	$microtemplateConiguration = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['microtemplate'];
	if (!is_array($microtemplateConiguration)) {
	  $microtemplateConiguration = unserialize($microtemplateConiguration);
	}
	
	if ($microtemplateConiguration['microtemplateBackendStyles']) {
	  $GLOBALS['TBE_STYLES']['stylesheet'] = 'EXT:microtemplate/Resources/Public/Styles/Backend/microtemplate.css';
	}