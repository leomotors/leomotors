#!/bin/env bash

cd ../..
mkdir -p generated
cp apps/language-stats/data/data.json generated
cp apps/language-stats/out/lang.csv generated
