<?php
  $EM_CONF[$_EXTKEY] = [
    'title' => 'Microtemplate',
    'description' => 'One page template with sections and lightbox like sub pages. Demo at: https://microtemplate.t3brightside.com',
    'category' => 'fe',
    'version' => '5.0.2',
    'state' => 'stable',
    'clearCacheOnLoad' => 1,
    'author' => 'Tanel Põld',
    'author_email' => 'tanel@brightside.ee',
    'author_company' => 'Brightside OÜ',
    'constraints' => [
      'depends' => [
        'typo3' => '12.4.0-13.4.99',
        'fluid_styled_content' => '12.4.0-13.4.99',
        'embedassets' => '1.2.0-1.99.99',
        'container' => '2.1.0-3.99.99',
        'containeritems' => '4.5.0-5.99.99',
        'content_defender' => '3.3.0-3.99.99',
        'iconpack_bootstrap' => '1.3.0-1.4.99',
      ],
    ],
  ];
