# Microtemplate

**TYPO3 CMS template extension for one page templates with light box like sub pages.**

Ready for building a smaller scale website for a company, startup or an event. 

- **[Demo](https://microtemplate.t3brightside.com/)**

## System requirements

- TYPO3 8.7 LTS
- fluid_styled_content
- gridelements

## Features

It's a plug & play template extension that works out of the box. It's based on TYPO3 FLUID templates. It uses jQuery but no CSS frameworks.

- Can be installed in multi domain setup or just for a sub page
- Modular architecture
- Lightweight
- Configurable color schemes
- Automatic main menu of section titles
- Section background manipulation (color, image with effects, video)
- IE 9 friendly except Cards layout that uses display: flex

## Install
- Install from TER **microtemplate** or composer **t3brightside/microtemplate**, include static templates you need, adjust template constants.
- **Note:** Include fluid_styled_content as the first static template in the list.
- **Edit home page** to set _'Appearance -> Page layout -> Backend layout -> Home'_ **and** _'Resources -> Include Page TSConfig -> Microtemplate – Main'_

## Editors
- Logo can be added to home page _'Resources -> Media'_.
- To exclude content section from main menu uncheck _'Appearance -> Show in Section Menus'_ in section settings.

## Admins
- Back end language flag, title and other settings can be altered in: _Configuration/TypoScript/PageTS/setup.ts_

## Recommended
These extensions are preconfigured and tested in Microtemplate package.
- personnel – Contact persons information with vCard support
- pagelist – Page teasers, article lists etc
- youtubevideo – YouTube videos with cover images and cover text
- metaplus – Page title prefix, suffix, favicon and OpenGraph image

## Sources

- [GitHub](https://github.com/t3brightside/microtemplate)
- [Packagist](https://packagist.org/packages/t3brightside/microtemplate)
- [TER](https://extensions.typo3.org/extension/microtemplate/)

## Development and maintenance

[Brightside OÜ](https://t3brightside.com/) – TYPO3 specialized web agency
