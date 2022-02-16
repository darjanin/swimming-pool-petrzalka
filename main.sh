#!/usr/bin/env bash
deno run --allow-net index.ts >> `date "+data/%Y-%m-%d.txt"`
