# Microtemplate
[![License](https://poser.pugx.org/t3brightside/microtemplate/license)](LICENSE.txt)
[![Packagist](https://img.shields.io/packagist/v/t3brightside/microtemplate.svg?style=flat)](https://packagist.org/packages/t3brightside/microtemplate)
[![Downloads](https://poser.pugx.org/t3brightside/microtemplate/downloads)](https://packagist.org/packages/t3brightside/microtemplate)
[![Brightside](https://img.shields.io/badge/by-t3brightside.com-orange.svg?style=flat)](https://t3brightside.com)

**TYPO3 CMS template extension for one page sites with light box like sub pages.**

- **[Demo](https://microtemplate.t3brightside.com)**
- **[Microtemplate in TYPO3 Now Package](https://t3brightside.com/typo3-now)**

## Be aware...
Quite likely most major versions introduce breaking changes, without describing every single one.
This is a place for us to try out and learn about new ways of doing things. Always trying to improve the speed, usability and SEO.

## System requirements

- TYPO3
- fluid_styled_content
- containeritems

## Features
- Can be installed in multi domain setup or just for a sub page
- Configurable color schemes
- Automatic menu of section titles
- Automatic language menu
- Social links in menu
- Content columns & accordions
- Section background (colour, image with effects, video)
- Section scroll in effect
- Dark mode support
- GDPR friendly

## Install
- `composer req t3brightside/microtemplate` or from TYPO3 extension repository **[microtemplate](https://extensions.typo3.org/extension/microtemplate/)** or try [this composer file](https://github.com/t3brightside/microtemplate_composer)
- Include static templates in that order: **fluid_styled_content**, advancedpagetitle, personnel, pagelist, youtubevideo, etc, **containeritems section**, **microtemplate scripts**, **microtemplate**
- Use TypoScript constant editor for customisation
- **Edit home page** to set _'Resources -> Include Page TSConfig -> Microtemplate – Main'_ and save
- **Edit home page** to set _'Appearance -> Page layout -> Backend layout  (this page only) -> Home'_ and _'Appearance -> Page layout (subpages of this page) -> Backend layout -> Sub'_

## Editors
- To exclude content section from main menu uncheck _'Appearance -> Show in Section Menus'_ in section settings.

## Admins
- To alter back end settings see: _Configuration/TypoScript/PageTS/setup.ts_

## Recommended
These extensions are preconfigured and tested in Microtemplate
- [pagelist](https://github.com/t3brightside/pagelist) – Page teasers, articles, events etc
- [personnel](https://github.com/t3brightside/personnel) – Contact persons information with vCard support
- [gallerycontent](https://github.com/t3brightside/gallerycontent) – Gallery with preset crop ratios
- [youtubevideo](https://github.com/t3brightside/youtubevideo) – YouTube videos with cover images and cover text
- [favicon](https://github.com/t3brightside/favicon) – Favicon extension
- [advancedtitle](https://github.com/t3brightside/advancedtitle) – Page title prefix and suffix

To speed things up
- [staticfilecache](https://github.com/lochmueller/staticfilecache) - Write pages into HTML files to save chunk of time
## Sources
- [GitHub](https://github.com/t3brightside/microtemplate)
- [Packagist](https://packagist.org/packages/t3brightside/microtemplate)
- [TER](https://extensions.typo3.org/extension/microtemplate/)

## Development and maintenance
[Brightside OÜ – TYPO3 development and hosting specialised web agency](https://t3brightside.com/)
