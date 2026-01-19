#!/bin/bash
set -e

echo "=== Configuration Git LFS pour Vercel ==="

# Vérifier si git-lfs est disponible
if ! command -v git-lfs &> /dev/null; then
  echo "⚠️  Git LFS n'est pas installé, tentative d'installation..."
  # Sur Vercel (Debian/Ubuntu)
  if command -v apt-get &> /dev/null; then
    apt-get update && apt-get install -y git-lfs || echo "Impossible d'installer git-lfs"
  fi
fi

# Initialiser Git LFS si nécessaire
echo "Initialisation de Git LFS..."
git lfs install --skip-repo || git lfs install || true

# Vérifier que nous sommes dans un dépôt Git
if [ ! -d .git ]; then
  echo "⚠️  Pas de dépôt Git détecté, arrêt du script LFS"
  exit 0
fi

# Télécharger les fichiers LFS
echo "Téléchargement des fichiers Git LFS..."
if git lfs pull; then
  echo "✅ Fichiers LFS téléchargés avec succès"
  # Vérifier que les fichiers existent
  if [ -f "public/images/logo-capdis.jpg" ]; then
    echo "✅ Vérification: logo-capdis.jpg existe"
  else
    echo "⚠️  Attention: logo-capdis.jpg n'existe pas après git lfs pull"
  fi
else
  echo "⚠️  Erreur lors du téléchargement des fichiers LFS (peut être normal si aucun fichier LFS)"
  # Ne pas faire échouer le build si LFS n'est pas disponible
  exit 0
fi
