#!/bin/bash
MYDIR="$(dirname "$(realpath "$0")")"
fortune | cowsay > fortune.txt
