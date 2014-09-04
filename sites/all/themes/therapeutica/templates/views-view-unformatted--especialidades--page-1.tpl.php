<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<div class="menu">
  <ul>
  <?php foreach ($view->result as $id => $result) : ?>
    <?php $paths[$id] = drupal_get_path_alias('node/'.$result->nid)?>
    <li><a class="views-row-<?php print $id+1; ?>"><?php print $result->node_title; ?></a></li>
  <?php endforeach; ?>
  </ul>
</div>
<div class="content-details">
<?php foreach ($rows as $id => $row): ?>
  <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?> id="<?php print $paths[$id]; ?>">
    <?php print $row; ?>
  </div>
<?php endforeach; ?>
<a href="javascript:history.go(-1);" class="back">Voltar</a>
</div>
