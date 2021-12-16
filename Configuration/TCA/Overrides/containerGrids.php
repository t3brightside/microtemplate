<?php

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'containerGrid-1-1',
            'Two Columns 50/50',
            'Dividing the content area into two equal columns',
            [
                [
                    ['name' => 'Left', 'colPos' => 101],
                    ['name' => 'Right', 'colPos' => 102]
                ]
            ]
        )
    )
    ->setIcon('EXT:container/Resources/Public/Icons/container-2col.svg')
);


\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'containerGrid-2-1',
            'Two Columns 60/40',
            'Dividing the content area into two columns with left column being wider',
            [
                [
                    ['name' => 'Left', 'colPos' => 101],
                    ['name' => 'Right', 'colPos' => 102]
                ]
            ]
        )
    )
    ->setIcon('EXT:container/Resources/Public/Icons/container-2col-left.svg')
);

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'containerGrid-1-2',
            'Two Columns 40/60',
            'Dividing the content area into two columns with right column being wider',
            [
                [
                    ['name' => 'Left', 'colPos' => 101],
                    ['name' => 'Right', 'colPos' => 102]
                ]
            ]
        )
    )
    ->setIcon('EXT:container/Resources/Public/Icons/container-2col-right.svg')
);

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'containerGrid-1-1-1',
            'Three Columns 33/33/33',
            'Dividing the content area into three equal columns',
            [
                [
                    ['name' => 'Left', 'colPos' => 101],
                    ['name' => 'Middle', 'colPos' => 102],
                    ['name' => 'Right', 'colPos' => 103]
                ]
            ]
        )
    )
    ->setIcon('EXT:container/Resources/Public/Icons/container-3col.svg')
);
