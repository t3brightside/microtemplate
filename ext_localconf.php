<?php
defined('TYPO3_MODE') || defined('TYPO3') || die('Access denied.');

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Information\Typo3Version;

if (empty($GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['microtemplate'])) {
    $versionInformation = GeneralUtility::makeInstance(Typo3Version::class);
    if ($versionInformation->getMajorVersion() >= 12) {
        $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['microtemplate'] = 'EXT:microtemplate/Configuration/RTE/Microtemplate.yaml';
    } else {
        $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['microtemplate'] = 'EXT:microtemplate/Configuration/RTE/Microtemplate_11LTS.yaml';
    }
}

# Check if ext:personnel is loaded and add TS constant
if (TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('personnel')) {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('
		microtemplate.personnelIsLoaded = 1
	');
} else {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('
		microtemplate.personnelIsLoaded = 0
	');
}
if (TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('pagelist')) {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('
		microtemplate.pagelistIsLoaded = 1
	');
} else {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('
		microtemplate.pagelistIsLoaded = 0
	');
}
