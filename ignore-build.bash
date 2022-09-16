#!/bin/env bash

npx turbo-ignore $1

if [ $? ]
then
    echo "::set-output name=run_jobs::true"
else
    echo "::set-output name=run_jobs::false"
fi
