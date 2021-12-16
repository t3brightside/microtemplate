<?php

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'containerAccordion',
            'Accordion',
            'Each element inside will be shown as an accordion item',
            [
                [
                    ['name' => 'Content', 'colPos' => 101],
                ]
            ]
        )
    )
    ->setIcon('EXT:container/Resources/Public/Icons/container-2col.svg')
);
