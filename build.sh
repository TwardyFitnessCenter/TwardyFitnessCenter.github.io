#!/bin/bash

project_name=placeholder
subproject_name=main
echo Hello, this script will only copy folders in the correct format for our hosted website
echo Project used on / - $project_name
echo Project used on /preview - $subproject_name

build_project() {
    echo Build main project $project_name
    npm --prefix src/$project_name/ --cwd src/$project_name/ install src/$project_name/
    npm --prefix src/$project_name/--cwd src/$project_name/ run build
}

build_subproject() {
    echo Build subproject $subproject_name
    npm --prefix src/$project_name/ --cwd src/$subproject_name/ install src/$subproject_name/
    npm --prefix src/$project_name/ --cwd src/$subproject_name/ run build
}

copy_project() {
    echo Copy files for $project_name
    cp -r src/assets docs
    cp -r src/lib docs
    cp -r src/${project_name}/js docs
    mkdir docs/styles
    mkdir docs/styles/css
    cp -r src/${project_name}/styles/css/* docs/styles/css
    cp -r src/${project_name}/index.html docs
}

copy_subproject() {
    echo Copy files for $subproject_name
    mkdir docs/preview
    cp -r src/assets docs/preview
    cp -r src/lib docs/preview
    mkdir docs/preview/js
    cp -r src/${subproject_name}/js/* docs/preview/js
    mkdir docs/preview/styles
    mkdir docs/preview/styles/css
    cp -r src/${subproject_name}/styles/css/* docs/preview/styles/css
    cp -r src/${subproject_name}/index.html docs/preview
}

copy_404() {
    echo Copy 404 error page
    cp src/404.html docs/
}

build_project
build_subproject

rm -rf docs
mkdir docs
cp -r CNAME docs

copy_project
copy_subproject
copy_404