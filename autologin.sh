#!/bin/bash

cd "$(dirname "$0")"

nvm use
yarn cypress:run
