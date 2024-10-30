<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://github.com/baonguyenyam/wp-best-suggestion-boxes
 * @since      1.0.0
 *
 * @package    Best_Suggestion_Boxes
 * @subpackage Best_Suggestion_Boxes/admin/partials
 */

global $table_prefix, $wpdb;
$tblGroup = $table_prefix . BEST_SUGGESTION_BOXES_PREFIX . '_suggest_group';
$tblSuggest = $table_prefix . BEST_SUGGESTION_BOXES_PREFIX . '_suggest';

$resultsGroup = $wpdb->get_results("SELECT * FROM {$tblGroup}");

if(isset($_GET['action']) && ($_GET['action'] === 'edit' || $_GET['action'] === 'delete')) {
	(!isset($_GET['id']) || $_GET['id'] == '' || $_GET['id'] == null) ? wp_redirect('./') : null;
	$resultsSuggest = $wpdb->get_results("SELECT * FROM {$tblSuggest} WHERE suggest_id = {$_GET['id']} LIMIT 1")[0];
} else {
	$resultsSuggest = $wpdb->get_results("SELECT * FROM {$tblSuggest}")[0];
}
?>
<div class="wrap">
	<h1><?php echo esc_html__('Message', BEST_SUGGESTION_BOXES_DOMAIN )?></h1>

	<div class="form-wrap">
		<form action="<?php echo esc_attr( admin_url('admin-post.php') ); ?>" id="frm" method="post">
			<input type="hidden" name="action" value="submit_data" />
			<input type="hidden" name="type" value="<?php echo esc_attr(isset($_GET['action'])?$_GET['action']:'')?>" />
			<input type="hidden" name="posttype" value="suggest" />
			<input type="hidden" name="id" value="<?php echo esc_attr(isset($resultsSuggest->suggest_id)?$resultsSuggest->suggest_id:'')?>" />

			<?php if(isset($_GET['action']) && $_GET['action'] === 'delete') { ?>
				<div class="form-required term-name-wrap">
					<label for="groupName"><?php echo esc_attr(isset($resultsSuggest->suggest_content)?$resultsSuggest->suggest_content:'')?></label>
				</div>
			<?php } else { ?>
				<div class="form-required term-name-wrap">
					<label for="groupTarget"><?php echo esc_html__('Screen', BEST_SUGGESTION_BOXES_DOMAIN )?></label>
					<select name="groupTarget" id="groupTarget">
						<?php foreach ( $resultsGroup as $item ) { ?>
							<option value="<?php echo esc_attr($item->group_id)?>"<?php echo ($resultsSuggest->group_id === $item->group_id) ? ' selected' : ''?>><?php echo esc_attr($item->group_content)?></option>
						<?php } ?>
					</select>
					<p></p>
				</div>
				<div class="form-required term-name-wrap">
					<label for="idTarget"><?php echo esc_html__('Click go to screen', BEST_SUGGESTION_BOXES_DOMAIN )?></label>
					<select name="idTarget" id="idTarget">
						<option value="0"><?php echo esc_html__('None', BEST_SUGGESTION_BOXES_DOMAIN )?></option>
						<?php foreach ( $resultsGroup as $item ) { ?>
							<option value="<?php echo esc_attr($item->group_id)?>"<?php echo ($resultsSuggest->target_id === $item->group_id) ? ' selected' : ''?>><?php echo esc_attr($item->group_content)?></option>
						<?php } ?>
					</select>
					<p></p>
				</div>
				<div class="form-required term-name-wrap">
					<label for="groupName"><?php echo esc_html__('Message', BEST_SUGGESTION_BOXES_DOMAIN )?></label>
					<?php
						$content   = esc_attr(isset($resultsSuggest->suggest_content)?$resultsSuggest->suggest_content:'');
						$editor_id = 'groupName';
						wp_editor( $content, $editor_id );
					?>
				</div>
			<?php } ?>

			<p class="submit"><button type="submit" class="button button-primary"><?php echo (isset($_GET['action']) && $_GET['action'] === 'delete') ? esc_html__('Delete', BEST_SUGGESTION_BOXES_DOMAIN ) : esc_html__('Submit', BEST_SUGGESTION_BOXES_DOMAIN )?></button></p>


			<input type="hidden" name="submitted" id="submitted" value="true" />
		</form>
	</div>
</div>
