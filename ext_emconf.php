<?php
  $EM_CONF[$_EXTKEY] = [
    'title' => 'Microtemplate',
    'description' => 'One page template with sections and lightbox like sub pages. Demo at: https://microtemplate.t3brightside.com',
    'category' => 'templates',
    'constraints' => [
      'depends' => [
        'typo3' => '9.5.0-9.5.99',
        'fluid_styled_content' => '9.5.0-9.5.99',
        'rte_ckeditor' => '9.5.0-9.5.99',
        'gridelements' => '9.0.0-9.99.99',
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
    'version' => '2.0.0',
  ];
