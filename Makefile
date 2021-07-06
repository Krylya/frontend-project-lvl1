# Makefile
tmp:
	echo 'Hello'

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js
