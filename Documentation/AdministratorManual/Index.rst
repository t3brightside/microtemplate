.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../Includes.txt


.. _admin-manual:

Administrator Manual
====================

Describes how to manage the extension from an administrator’s point of
view. That relates to Page/User TSconfig, permissions, configuration
etc., which administrator level users have access to.

Language should be non/semi-technical, explaining, using small
examples.

Installation
^^^^^^^^^^^^
Install extensions
------------------

**Mandatory**

* fluid_styled_content – TYPO3 system extension
* `gridelements <https://extensions.typo3.org/extension/gridelements/>`_ – Extension for page sections and grid layouts
* `microtemplate <https://extensions.typo3.org/extension/microtemplate/>`_– That's it yes...

**Preconfigured for Microtemplate**

- `pagegallery <https://extensions.typo3.org/extension/pagegallery/>`_ – Page teasers, news lists, galleries etc (custom Microtemplate available)
- `personnel <https://extensions.typo3.org/extension/personnel/>`_ – Contact lists and single person records with vCard support (custom Microtemplate available)
- `metaplus <https://extensions.typo3.org/extension/metaplus/>`_ – Page title prefix and sufix, favicon and OpenGraph image
- `youtubevideo <https://extensions.typo3.org/extension/youtubevideo/>`_ – YouTube video element with settings and cover image control

Connect template to page
------------------------

Create a template record for 'Home' page. In template record "Includes -> Include static (from extensions)" select:

1. Fluid Content Elements
2. Microtemplate – Main
3. Others by what you need ...
4. Edit template constants in constant editor

**Please note:** 

* 'Home page ID' has to be set if home page is not a domain root.
* Domain name constant has to be set in order to make ext:Personnel vCard images function properly.

Make sure to remove "Hello world" script from template Setup field.