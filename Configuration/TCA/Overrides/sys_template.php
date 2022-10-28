<?php
defined('TYPO3_MODE') || defined('TYPO3') || die('Access denied.');

use \TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

call_user_func(function()
{
  /**
   * Temporary variables
   */
  $extensionKey = 'microtemplate';

  /**
   * Default TypoScript for Microtemplate
   */
  ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript',
    'Microtemplate - Main'
  );
  ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript/DarkMode',
    'Microtemplate - Dark Mode'
  );
  ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/Extensions/Umami/TypoScript',
    'Microtemplate - Umami'
  );
});
