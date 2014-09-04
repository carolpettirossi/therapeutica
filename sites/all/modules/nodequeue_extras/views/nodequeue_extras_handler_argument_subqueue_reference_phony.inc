<?php
class nodequeue_extras_handler_argument_subqueue_reference_phony extends views_handler_argument_string {
  /**
   * Build the query based upon the formula
   */
  function query($group_by = FALSE) {
    $argument = $this->argument;
    if (!empty($this->options['transform_dash'])) {
      $argument = strtr($argument, '-', ' ');
    }
    $this->placeholder_length = $this->placeholder();

    if (!empty($this->options['break_phrase'])) {
      views_break_phrase_string($argument, $this);
    }
    else {
      $this->value = array($argument);
      $this->operator = 'or';
    }

    if (!empty($this->definition['many to one'])) {
      if (!empty($this->options['glossary'])) {
        $this->helper->formula = TRUE;
      }
      $this->helper->ensure_my_table();

      $this->helper->placeholders = array($this->placeholder_length => intval($this->options['limit']));
      $this->helper->add_filter();
      return;
    }

    $this->ensure_my_table();
  }
}