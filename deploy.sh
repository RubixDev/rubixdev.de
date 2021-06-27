#!/bin/bash

# # Build site
# echo -e "\033[1;36mBuilding site with parcel\033[0m"
# npm run build
# git add .
# git commit -m "Build site"
# git push origin main
# echo -e "\033[33m..done\033[0m"

# # Push to deploy branch
# echo -e "\033[1;36mPushing main branch dist folder to deploy branch\033[0m"
# git subtree push --prefix dist origin deploy
# echo -e "\033[33m..done\033[0m"

# # Pull branch on server
# if [ "$USER" = "silas" ]; then
#     echo -e "\033[1;36mPulling deploy branch on server\033[0m"
#     ssh contabo "cd /var/www/rubixdev.de && git pull"
#     echo -e "\033[33m..done\033[0m"
# fi


npm run build
git stash save
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
git stash pop
