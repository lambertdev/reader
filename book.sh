#!/bin/sh

gitbook build

echo reader.lambert.wang > _book/CNAME

cd _book
git init
git remote add origin  https://github.com/lambertdev/reader.git
