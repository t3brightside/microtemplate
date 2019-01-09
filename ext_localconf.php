<?php
	defined('TYPO3_MODE') || die();

	$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['microtemplate'] = 'EXT:microtemplate/Configuration/RTE/Default.yaml';

	# Check if ext:personnel is loaded and add TS constant
		if (TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('personnel')){
	  	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('
	  		microtemplate.personnelIsLoaded = 1
	  	');
	  } else {
	  	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('
	  		microtemplate.personnelIsLoaded = 0
	  	');
	  }
		if (TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('pagelist')){
			\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('
				microtemplate.pagelistIsLoaded = 1
			');
		} else {
			\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('
				microtemplate.pagelistIsLoaded = 0
			');
		}
