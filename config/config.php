<?php
session_start(); date_default_timezone_set("Africa/Cairo");
const DB_HOST="127.0.0.1"; const DB_NAME="retailflow"; const DB_USER="root"; const DB_PASS="";
function db(){static $p;if(!$p)$p=new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME.";charset=utf8mb4",DB_USER,DB_PASS,[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC,PDO::ATTR_EMULATE_PREPARES=>false]);return $p;}
function e($v){return htmlspecialchars((string)$v,ENT_QUOTES,"UTF-8");} function redirect($u){header("Location: $u");exit;}
function csrf(){return $_SESSION["csrf"]??($_SESSION["csrf"]=bin2hex(random_bytes(32)));} function check_csrf($x){if(!hash_equals($_SESSION["csrf"]??"",(string)$x))throw new Exception("Invalid CSRF token.");}
function lang(){return ($_SESSION["lang"]??"ar")==="en"?"en":"ar";} function t($ar,$en){return lang()==="ar"?$ar:$en;}
