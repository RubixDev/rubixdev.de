#!/bin/bash

# Push to deploy branch
echo -e "\033[1;36mPushing main branch min folder to deploy branch\033[0m"
git subtree push --prefix min origin deploy
echo -e "\033[33m..done\033[0m"

# Pull branch on server
if [ "$USER" = "silas" ]; then
    echo -e "\033[1;36mPulling deploy branch on server\033[0m"
    ssh contabo "cd /var/www/rubixdev.de && git pull"
    echo -e "\033[33m..done\033[0m"
fi
