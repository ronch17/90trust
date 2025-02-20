<?php

namespace prfwp;

use StoutLogic\AcfBuilder\FieldsBuilder;

include PRFWP_PATH . "/includes/fields/partials/config.php";

$account_types = new FieldsBuilder( 'account_types' );

$account_types
    ->addRepeater( 'account_types', [
        'min'          => 1,
        'layout'       => 'block',
        'button_label' => 'Add Row',
        'instructions' => 'Hold "Shift" and hover at row in order to display duplication button',
    ] )
    ->addImage( 'image', [ 'preview_size' => 'medium', 'label' => 'Image' ] )->setWidth( 40 )
    ->addTextarea( 'title', [ 'rows' => 1, 'new_lines' => 'br' ] )->setWidth( 40 )
    ->addTextarea( 'sub-title', [ 'rows' => 1, 'new_lines' => 'br' ] )->setWidth( 40 )
    ->addTextarea( 'price', [ 'rows' => 1, 'new_lines' => 'br' ] )->setWidth( 20 )
    ->addSelect( 'group_position', [ 'allow_null' => 1 ] )
    ->addChoices(
        [
            'first-group' => 'First group',
            'second-group' => 'Second group',
            'third-group' => 'Third group'
        ]
    )->setWidth( 20 )
    ->addTrueFalse( 'popular', [
        'label'       => 'Most Popular',
        'ui'          => 1,
        'ui_on_text'  => 'yes',
        'ui_off_text' => 'no'
    ] )->setWidth( 20 )
    ->addRepeater( 'field', [ 'min' => 1, 'label' => '', 'button_label' => 'Add Field' ] )
    ->addTextarea( 'service', [ 'rows' => 1, 'new_lines' => 'br' ] )->setWidth( 70 )
    ->addTextarea( 'value', [ 'rows' => 1, 'new_lines' => 'br' ] )->setWidth( 70 )
    ->endRepeater()
    ->endRepeater();

return $account_types;