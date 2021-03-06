0.14.1 / 2016-06-11
===================

  * Bug fix - Use a ref at `input` editor over `this.getDOMNode()` given latter was deprecated in React 15.

0.14.0 / 2016-06-09
===================

  * Breaking - Force `rowKey` to be set. This helps with performance so better set that. #135
  * Improvement - Drop dependency on `react/lib/update`. Smaller bundle this way too.
  * Improvement - Drop dependency on `lodash/merge`.

0.13.0 / 2016-06-07
===================

  * Feature - Support for multiple saerch filters. #138 @szdc

0.12.1 / 2016-04-08
===================

  * Expand React peer dependency range to include React 15.

0.12.0 / 2016-03-22
===================

  * Breaking - Bump lodash minimum version to 4.0.
  * Feature - Import only specific lodash functions. #134 @callahad

0.11.2 / 2016-02-23
===================

  * Bug fix - Don't attempt to merge table cell values. #132 @trun

0.11.1 / 2016-02-18
===================

  * Feature - Allow `Search` "all" to be translated. #130

0.11.0 / 2016-02-14
===================

  * Bug fix - Cell functions could be skipped when two columns shared the same property. #129 @MrOrz

0.10.4 / 2016-02-13
===================

  * Feature - Relaxed about lodash peer version, now < 5. #128 @FredericHeem

0.10.3 / 2016-01-31
===================

  * Feature - Support multi-column sorts a la react-datagrid (cycle through ascending, descending, none independently). #127 @JeffSanchez

0.10.2 / 2016-01-22
===================

  * Bug Fix - ”formatter shortcut” logic in cell function. #125 @MrOrz

0.10.1 / 2016-01-21
===================

  * Bug Fix - Do not show React elements at search dropdown Only strings and numbers are allowed. #124

0.10.0 / 2016-01-19
===================

  * Bug Fix - Merge props & values of cell functions correctly. #53, #122 @MrOrz
  * Documentation - Correct usage from props.header to props.columnNames. #121 @goldensunliu
  * Documentation - Fix object protocol example. #117 @arkon
  * Demo - Updated react-pagify
  * Demo - Add double click example for cell
  * Breaking - Replaced `className` with `headerClass`. #113 @goldensunliu

0.9.2 / 2015-11-10
==================

  * Feature - Support Node 0.10 again. #112 @bjrmatos
