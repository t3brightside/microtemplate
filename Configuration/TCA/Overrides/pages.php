<?php
defined('TYPO3_MODE') || die();

call_user_func(function()
{
  /**
   * Temporary variables
   */
  $extensionKey = 'microtemplate';

  /**
   * Default PageTS for Microtemplate
   */
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    $extensionKey,
    'Configuration/PageTS/setup.ts',
    'Microtemplate - Main'
  );
  /**
   * Custom PageTS for subpage types
   */
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    $extensionKey,
    'Configuration/PageTS/article_page.ts',
    'Microtemplate – Article page'
  );
});