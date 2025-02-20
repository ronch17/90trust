<?php

namespace prfwp;
include PRFWP_PATH . "/includes/fields/partials/config.php";

use StoutLogic\AcfBuilder\FieldsBuilder;

$meet_our_team = new FieldsBuilder( 'meet_our_team' );

$meet_our_team
    ->addSelect( 'style', [ 'allow_null' => 1 ] )
    ->addChoices(
        [
            'meet-our-team' => 'Meet our team cards',
        ]
    )->setWidth( 50 )
    ->addRepeater( 'meet_our_team', [
        'min'          => 1,
        'layout'       => 'block',
        'button_label' => 'Add List item'
    ] )
    ->setInstructions( 'Click "Add List Item" to add new Item to the List' )
    ->addImage( 'image', [ 'label' => 'Image', 'preview_size' => 'medium' ] )
    ->setWidth( 10 )
    ->addTextarea( 'title', [ 'rows' => '2', 'new_lines' => 'br' ] )
    ->setWidth( 25 )
    ->addTextarea( 'text', [ 'rows' => '2', 'new_lines' => 'br' ] )
    ->setWidth( 25 )
    ->addText( 'phone', [ 'rows' => '2', 'new_lines' => 'br' ] )
    ->setWidth( 25 )
    ->addText( 'email', [ 'rows' => '2', 'new_lines' => 'br' ] )
    ->setWidth( 25 )
    ->setWidth( 25 )
    ->addTextarea( 'modal-text', [ 'rows' => '2', 'new_lines' => 'br' ] )
    ->setWidth( 25 )
    ->addText( 'button', [ 'label' => 'Add Button text' ] )
    ->setWidth( 15 )
    ->endRepeater();

return $meet_our_team;
