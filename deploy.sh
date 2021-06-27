#!/bin/bash

# Build
npm run build

# Push to deploy branch
echo -e "\033[1;36mPushing dist folder to deploy branch\033[0m"
git checkout deploy
git stash pop
cp -r dist/* ./
git add .
git commit -m "Build"
git push origin deploy
for f in dist/*; do
    rm -r "$(basename "$f")"
done
git stash save
git checkout main
echo -e "\033[33m..done\033[0m"


# Pull branch on server
echo -e "\033[1;36mPulling deploy branch on server\033[0m"
ssh contabo "cd /var/www/rubixdev.de && git pull"
echo -e "\033[33m..done\033[0m"
