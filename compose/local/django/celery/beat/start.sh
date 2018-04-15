#!/bin/sh

set -o errexit
set -o pipefail
set -o nounset
set -o xtrace

rm -f './celerybeat.pid'
# TODO: Fix this. There will likely not be a 'taskapp'.
# celery -A smevirtual.taskapp beat -l INFO
