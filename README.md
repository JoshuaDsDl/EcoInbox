# <div align="center">EcoInbox 🌱</div>

<div align="center">

![Next.js Version](https://img.shields.io/badge/Next.js-15.x-000000?style=for-the-badge&logo=next.js)
![TypeScript Version](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-00C853?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-Web-00C853?style=for-the-badge)

Une application web de gestion écologique des emails, développée avec Next.js et TypeScript.

> 🎓 Projet réalisé dans le cadre du cours de Business Intelligence à l'IMT Nord Europe.

</div>

## ✨ Fonctionnalités

- Interface utilisateur moderne avec design écologique
- Authentification complète (connexion/inscription)
- Tableau de bord intelligent pour la gestion des emails
- Classification automatique des emails par catégories (Important, Promotionnel, Newsletter, etc.)
- Suivi de l'empreinte carbone numérique
- Suggestions écologiques pour optimiser sa boîte mail
- Gestion des désabonnements et pièces jointes
- Statistiques d'impact environnemental (CO2 économisé, arbres équivalents)
- Système de nettoyage automatique
- Design responsive et accessible
- Compatibilité tous navigateurs modernes

## 🛠️ Technologies Utilisées

- **Framework**: Next.js 15.x
- **Language**: TypeScript 5.x
- **UI**: Tailwind CSS 3.x
- **Composants**: shadcn/ui + Radix UI
- **Icônes**: Lucide React
- **Styling**: PostCSS + Tailwind
- **Build**: Turbopack (Next.js)
- **Linting**: ESLint + TypeScript ESLint

## 📦 Structure du Projet

```
ecoinbox/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── dashboard/          # Tableau de bord principal
│   │   │   └── page.tsx        # Interface de gestion des emails
│   │   ├── signin/             # Page de connexion
│   │   │   └── page.tsx        # Formulaire de connexion
│   │   ├── signup/             # Page d'inscription
│   │   │   └── page.tsx        # Formulaire d'inscription
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx           # Page d'accueil
│   │   └── globals.css        # Styles globaux
│   ├── components/
│   │   └── ui/                # Composants UI réutilisables
│   │       ├── avatar.tsx     # Composant avatar
│   │       ├── badge.tsx      # Badges de catégories
│   │       ├── button.tsx     # Boutons stylisés
│   │       └── card.tsx       # Cartes d'information
│   └── lib/
│       └── utils.ts           # Fonctions utilitaires
├── public/                     # Assets statiques
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── components.json            # Configuration shadcn/ui
├── next.config.ts             # Configuration Next.js
├── package.json               # Dépendances et scripts
├── postcss.config.mjs         # Configuration PostCSS
├── tailwind.config.ts         # Configuration Tailwind
└── tsconfig.json             # Configuration TypeScript
```

## 🚀 Installation

### Prérequis

- Node.js 18+ 
- pnpm (recommandé) ou npm
- Git

### Configuration et Installation

1. **Cloner le repository**
```bash
git clone https://github.com/JoshuaDsDl/EcoInbox.git
cd EcoInbox/ecoinbox
```

2. **Installer les dépendances**
```bash
pnpm install
```

3. **Lancer le serveur de développement**
```bash
pnpm dev
```

4. **Accéder à l'application**
   
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

### Scripts Disponibles

```bash
pnpm dev      # Serveur de développement
pnpm build    # Build de production
pnpm start    # Serveur de production
pnpm lint     # Analyse du code
```

## 🔑 Fonctionnalités Principales

### Page d'Accueil
- Design moderne et écologique
- Présentation des fonctionnalités principales
- Statistiques d'impact environnemental
- Appels à l'action pour l'inscription

### Authentification
- Système de connexion sécurisé
- Formulaire d'inscription avec validation
- Interface utilisateur intuitive

### Tableau de Bord
- **Interface trois panneaux** : Navigation, liste des emails, panneau de prévisualisation
- **Classification intelligente** avec badges colorés par catégorie
- **Statistiques en temps réel** : Emails traités, CO2 économisé, arbres équivalents
- **Actions rapides** : Archiver, supprimer, se désabonner
- **Gestion des pièces jointes** volumineuses

### Suivi Environnemental
- Calcul de l'empreinte carbone des emails
- Suggestions écologiques personnalisées
- Rapport mensuel d'impact environnemental
- Visualisation des économies réalisées

### Actions Écologiques
- Désabonnements suggérés pour les newsletters rarement ouvertes
- Nettoyage des pièces jointes volumineuses
- Archivage local pour réduire le stockage cloud
- Configuration de règles de nettoyage automatique

## 🎨 Design System

### Palette de Couleurs
- **Vert Principal** : `#00C853` (Écologie, nature)
- **Emeraude** : `#10B981` (Actions positives)
- **Gris** : `#6B7280` (Texte, éléments neutres)
- **Rouge** : `#EF4444` (Éléments importants)
- **Orange** : `#F59E0B` (Alertes, promotions)
- **Bleu** : `#3B82F6` (Informations, liens)

### Typographie
- **Police principale** : Geist Sans (moderne, lisible)
- **Police système** : Inter, sans-serif (fallback)
- **Poids** : 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## 🔧 Architecture

L'application suit une architecture moderne basée sur :

- **Next.js App Router** : Routage et rendu côté serveur
- **TypeScript** : Typage statique pour la fiabilité
- **Tailwind CSS** : Styling utilitaire et responsive
- **Component-Based** : Architecture modulaire et réutilisable
- **Static Generation** : Optimisation des performances

## 🌟 Aperçu des Écrans

### 📧 Tableau de Bord Principal
- Liste des emails avec catégorisation automatique
- Prévisualisation des emails avec suggestions écologiques
- Statistiques d'impact environnemental en temps réel
- Interface responsive pour mobile et desktop

### 🌱 Actions Écologiques
- Suggestions de désabonnements intelligentes
- Gestion des pièces jointes volumineuses
- Configuration de l'archivage local
- Optimisation de l'empreinte carbone

### 📊 Statistiques d'Impact
- Suivi du CO2 économisé mensuellement
- Nombre d'emails traités et optimisés
- Stockage libéré grâce au nettoyage
- Équivalence en arbres plantés

## 📝 Licence

EcoInbox est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

```
MIT License

Copyright (c) 2025 JDSoft

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

<div align="center">
<sub>Développé avec 🌱 par Joshua DESCHIETERE</sub>
</div>
