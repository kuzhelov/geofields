#!/bin/sh

set -e

heroku logs | sed -E 's/^.+[ ]fwd="(.+)"[ ].+$/\1/gp;d' | sort | uniq
