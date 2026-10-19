.PHONY: run serve

PORT ?= 3000

run:
	python3 -m http.server $(PORT)

serve: run
