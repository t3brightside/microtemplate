<?php
  $EM_CONF[$_EXTKEY] = [
    'title' => 'Microtemplate',
    'description' => 'One page template with sections and lightbox like sub pages. Demo at: https://microtemplate.t3brightside.com',
    'category' => 'fe',
    'version' => '4.1.0',
    'state' => 'stable',
    'clearCacheOnLoad' => 1,
    'author' => 'Tanel Põld',
    'author_email' => 'tanel@brightside.ee',
    'author_company' => 'Brightside OÜ',
    'constraints' => [
      'depends' => [
        'typo3' => '11.5.0-12.4.99',
        'fluid_styled_content' => '11.5.0-12.4.99',
        'embedassets' => '1.2.0-1.99.99',
        'container' => '2.1.0-2.99.99',
        'containeritems' => '4.2.0-4.99.99',
        'content_defender' => '3.3.0-3.99.99',
      ],
    ],
  ];
