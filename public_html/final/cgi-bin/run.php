#!/usr/bin/php
<?php
# $old_path = getcwd();
# chdir('/my/path/');
$output = shell_exec('./bash_test.sh');
echo $output;
//chdir($old_path);
?>
