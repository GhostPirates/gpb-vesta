<?php
error_reporting(NULL);
$TAB = 'SERVER';
header('Content-Type: application/json');

// Main include
include($_SERVER['DOCUMENT_ROOT']."/inc/main.php");

// Check user
if ($_SESSION['user'] != 'admin') {
    exit;
}

// Check POST request
if (!empty($_POST['save'])) {

    // Check token
    if ((!isset($_POST['token'])) || ($_SESSION['token'] != $_POST['token'])) {
        exit();
    }

    // Set restart flag
    $v_restart = 'yes';
    if (empty($_POST['v_restart'])) $v_restart = 'no';

    // Update config
    if (!empty($_POST['v_config'])) {
        exec ('mktemp', $mktemp_output, $return_var);
        $new_conf = $mktemp_output[0];
        $fp = fopen($new_conf, 'w');
        fwrite($fp, str_replace("\r\n", "\n",  $_POST['v_config']));
        fclose($fp);
        exec (VESTA_CMD."v-change-sys-service-config ".$new_conf." httpd ".$v_restart, $output, $return_var);
        check_return_code($return_var,$output);
        unset($output);
        unlink($new_conf);
    }

    // Set success message
    if (empty($_SESSION['error_msg'])) {
        $_SESSION['ok_msg'] = __('Changes has been saved.');
    }

}

$v_config_path = '/etc/httpd/conf/httpd.conf';
$v_service_name = strtoupper('httpd');

// Read config
$v_config = shell_exec(VESTA_CMD."v-open-fs-config ".$v_config_path);

$result = array(
    'config_path' => '/etc/httpd/conf/httpd.conf',
    'service_name' => $v_service_name,
    'config' => $v_config,
    'error_msg' => $_SESSION['error_msg'],
    'ok_msg' => $_SESSION['ok_msg']
);

echo json_encode($result);

// Flush session messages
unset($_SESSION['error_msg']);
unset($_SESSION['ok_msg']);