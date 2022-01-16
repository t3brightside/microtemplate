<?php
defined('TYPO3_MODE') || die();

call_user_func(function()
{
  /**
   * Temporary variables
   */
  $extensionKey = 'microtemplate';

  /**
   * Default TypoScript for Microtemplate
   */
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript',
    'Microtemplate - Main'
  );
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript/Menus/SectionMenu',
    'Microtemplate - menu: Sections'
  );
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript/DarkMode',
    'Microtemplate - Dark Mode'
  );
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Extensions/magnificpopup/Configuration/TypoScript',
    'Microtemplate - Magnificpopup'
  );
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Extensions/umami/Configuration/TypoScript',
    'Microtemplate - Umami'
  );
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Extensions/google_analytics/Configuration/TypoScript',
    'Microtemplate - Google Analytics'
  );
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Extensions/cookie_consent/Configuration/TypoScript',
    'Microtemplate - Cookie Consent'
  );
});
