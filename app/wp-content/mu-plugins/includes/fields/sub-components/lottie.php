<?php

namespace prfwp;

use StoutLogic\AcfBuilder\FieldsBuilder;

include PRFWP_PATH . "/includes/fields/partials/config.php";

$lottie = new FieldsBuilder( 'lottie', [ 'title' => 'Lottie animation' ] );

$lottie
    ->addSelect( 'lottie', [ 'label' => 'Lottie Animation', 'allow_null' => 1 ] )
    ->setWidth( 25 )
    ->addChoices(
        [
            'lotties.mockup1' => 'Mockup 1 Animation',
            'lotties.mockup2' => 'Mockup 2 Animation',
            'lotties.coins' => 'Coins Animation',
        ]
    );

return $lottie;
