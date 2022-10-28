<?php
defined('TYPO3_MODE') || defined('TYPO3') || die('Access denied.');

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
    'Configuration/PageTS/setup.typoscript',
    'Microtemplate - Main'
  );
});
