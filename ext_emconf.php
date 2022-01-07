<?php
  $EM_CONF[$_EXTKEY] = [
    'title' => 'Microtemplate',
    'description' => 'One page template with sections and lightbox like sub pages. Demo at: https://microtemplate.t3brightside.com',
    'category' => 'fe',
    'version' => '3.1.0',
    'state' => 'stable',
    'clearCacheOnLoad' => 1,
    'author' => 'Tanel Põld',
    'author_email' => 'tanel@brightside.ee',
    'author_company' => 'Brightside OÜ',
    'constraints' => [
      'depends' => [
        'typo3' => '11.5.0-11.5.99',
        'fluid_styled_content' => '11.5.0-11.5.99',
        'container' => '1.4.0-1.99.99',
        'containeritems' => '2.0.0-2.99.99',
        'content_defender' => '3.2.0-3.99.99',
      ],
    ],
  ];
