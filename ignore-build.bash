#!/bin/env bash

lastCommitMsg=$(git log -1 --format=%s)

if [[ $lastCommitMsg == *"[SKIP BUILD]"* ]]
then
    exit 0
else
    exit 1
fi
