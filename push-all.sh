#!/usr/bin/env bash

git subtree push --prefix=src/app/_libs/ui-model --squash ui-model master
git subtree push --prefix=src/app/_libs/ui-model-angular --squash ui-model-angular master
git subtree push --prefix=src/app/_libs/ui-model-angular-bootstrap --squash ui-model-angular-bootstrap master