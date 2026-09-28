#!/bin/bash
set -e

echo "Construyendo Game Hub..."
rm -rf dist
mkdir -p dist/games

# Copiamos archivos principales
cp index.html index.css manifest.json service-worker.js dist/

# Copiamos submodulos
cp -r games/sudoku dist/games/
cp -r games/rompebloques dist/games/
cp -r games/2048 dist/games/

# Removemos .git folders de los submodulos dentro del build
find dist -name ".git" -exec rm -rf {} +

echo "Build completado. Contenido listo en dist/"
