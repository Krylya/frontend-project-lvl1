# Makefile
install: install-deps

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci
tmp:
	echo 'Hello'

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

lint:
	npx eslint .
