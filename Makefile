.PHONY: setup install dev build preview run serve

PORT ?= 3000

install:
	pnpm install

setup: install

dev:
	pnpm run dev --port $(PORT)

build:
	pnpm run build

preview:
	pnpm run preview --port $(PORT)

run: dev

serve: dev
