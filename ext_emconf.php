<?php
  $EM_CONF[$_EXTKEY] = [
    'title' => 'Microtemplate',
    'description' => 'One page template with sections and lightbox like sub pages. Demo at: https://microtemplate.t3brightside.com',
    'category' => 'fe',
    'version' => '6.0.0',
    'state' => 'stable',
    'clearCacheOnLoad' => 1,
    'author' => 'Tanel Põld',
    'author_email' => 'tanel@brightside.ee',
    'author_company' => 'Brightside OÜ',
    'constraints' => [
      'depends' => [
        'typo3' => '14.3.0-14.99.99',
        'fluid_styled_content' => '14.3.0-14.99.99',
        'embedassets' => '1.4.0-1.99.99',
        'container' => '3.0.0-3.99.99',
        'containeritems' => '6.0.0-6.99.99',
        'iconpack_bootstrap' => '1.3.0-1.4.99',
      ],
    ],
  ];
