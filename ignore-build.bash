#!/bin/env bash

npx turbo-ignore leomotors.net
status1=$?

npx turbo-ignore portfolio.leomotors.net
status2=$?

npx turbo-ignore resume.leomotors.net
status3=$?

if [[ $status1 = 1 || $status2 = 1 || $status3 = 1 ]]
then
    echo "::set-output name=run_jobs::true"
else
    echo "::set-output name=run_jobs::false"
fi
