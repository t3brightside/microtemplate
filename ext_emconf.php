<?php
  $EM_CONF[$_EXTKEY] = [
    'title' => 'Microtemplate',
    'description' => 'One page template with sections and lightbox like sub pages. Demo at: https://microtemplate.t3brightside.com',
    'category' => 'templates',
    'constraints' => [
      'depends' => [
        'typo3' => '8.7.0-8.7.99',
        'fluid_styled_content' => '8.7.0-8.7.99',
        'rte_ckeditor' => '8.7.0-8.7.99',
        'gridelements' => '8.0.0-8.99.99',
      ],
      'conflicts' => [
      ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Tanel Põld',
    'author_email' => 'tanel@brightside.ee',
    'author_company' => 'Brightside OÜ',
    'version' => '1.0.0',
  ];
