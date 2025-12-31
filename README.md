# Rfx Studio - Web & AI Infrastructure Provider

Bienvenue sur le dépôt du site officiel de **Rfx Studio**. Ce projet est une plateforme vitrine moderne conçue pour présenter l'écosystème de systèmes IA, Web & Blockchain de niveau entreprise.

## 🚀 À Propos

Rfx Studio conçoit des systèmes enterprise-grade qui alimentent les entreprises numériques modernes :

- **Viralis** : Plateforme d'intelligence média pilotée par l'IA
- **ResumeIQ** : Analyse de CV propulsée par l'intelligence artificielle
- **RelayOn** : Support client IA nouvelle génération
- **FusePay** : Processeur de paiement crypto
- **Fiscally** : Gestion financière IA (factures, devis, budgets)
- **Tripmind** : Planificateur de voyage IA (mobile)

## 🛠️ Stack Technique

- **Framework** : [Next.js 15](https://nextjs.org/) (App Router)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS 4](https://tailwindcss.com/)
- **Icônes** : [Lucide React](https://lucide.dev/) + [Tabler Icons](https://tabler.io/icons)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Internationalisation** : [next-intl](https://next-intl.dev/) (Français / English)

## 🌍 Internationalisation (i18n)

Le site supporte **2 langues** avec détection automatique :

| Langue   | URL   | Statut     |
| -------- | ----- | ---------- |
| Français | `/fr` | Par défaut |
| English  | `/en` | Disponible |

### Structure i18n

```
├── i18n/
│   ├── routing.ts       # Configuration des locales
│   ├── navigation.ts    # APIs de navigation localisées
│   └── request.ts       # Chargement des messages
├── messages/
│   ├── fr.json          # Traductions françaises
│   └── en.json          # Traductions anglaises
└── middleware.ts        # Middleware de routing
```

## 📂 Structure du Projet

```
├── app/
│   └── [locale]/        # Pages localisées (Next.js App Router)
│       ├── layout.tsx   # Layout avec NextIntlClientProvider
│       ├── page.tsx     # Page principale
│       ├── legal/       # Mentions légales
│       ├── privacy/     # Politique de confidentialité
│       └── terms/       # CGU
├── components/
│   ├── ui/              # Composants UI génériques
│   ├── About.tsx        # Section À propos
│   ├── Contact.tsx      # Section Contact & Localisation
│   ├── Expertise.tsx    # Présentation des compétences
│   ├── FAQ.tsx          # Foire aux Questions
│   ├── Footer.tsx       # Pied de page global
│   ├── Hero.tsx         # Section principale (Landing)
│   ├── Navbar.tsx       # Navigation responsive
│   └── Solutions.tsx    # Grille des produits
├── i18n/                # Configuration internationalisation
├── messages/            # Fichiers de traduction JSON
└── public/              # Assets statiques
```

## 🏗️ Installation & Démarrage

1.  **Cloner le dépôt** :

    ```bash
    git clone https://github.com/flypsid/rfxstudio.git
    cd rfxstudio
    ```

2.  **Installer les dépendances** :

    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement** :

    ```bash
    npm run dev
    ```

4.  **Ouvrir le navigateur** :
    Rendez-vous sur [http://localhost:3000](http://localhost:3000)

## ✨ Fonctionnalités Clés

- **Internationalisation** : Support bilingue FR/EN avec sélecteur de langue
- **Navigation Smooth Scroll** : Accès rapide aux sections
- **Design Responsive** : Optimisé pour mobile, tablette et desktop
- **Présence Internationale** : Bureaux au Cameroun, Dubai et Singapore
- **Composants Interactifs** : Menu mobile animé, accordéon FAQ, effets de survol

## 👥 Auteurs

- **Raoul Flypsid** - Architecture & Développement ([rfx.life](https://rfx.life))

## 📧 Contact

- **Email** : contact@rfx.life
- **GitHub** : [github.com/flypsid](https://github.com/flypsid)
- **Twitter/X** : [@flypsid](https://twitter.com/flypsid)
- **LinkedIn** : [linkedin.com/in/flypsid](https://linkedin.com/in/flypsid)

## 📄 Licence

Ce projet est la propriété exclusive de Rfx Studio.
