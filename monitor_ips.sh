#!/bin/sh

set -e

( ./list_ips.sh ) >> ./ips.temp 

while true
do
	( (cat ./ips.temp; ./list_ips.sh) | cat | sort | uniq ) > ./ips.temp
	sleep 600 
done
