#!/bin/sh

set -e

while true
do
	( (cat ./inbound_ips; ./list_ips.sh) | cat | sort | uniq ) > ./inbound_ips.temp 2>/dev/null
	mv ./inbound_ips.temp ./inbound_ips
	sleep 30 
done
