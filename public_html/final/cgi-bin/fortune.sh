#!/bin/bash
MYDIR="$(dirname "$(realpath "$0")")"
fortune > $MYDIR/fortune.txt
