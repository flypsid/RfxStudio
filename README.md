# Ma'a Suh LLC - Plateforme Numérique B2B

Bienvenue sur le dépôt du site officiel de **Ma'a Suh LLC**. Ce projet est une plateforme vitrine moderne conçue pour présenter l'écosystème de solutions numériques B2B de Ma'a Suh (Fintech, SaaS, Retail, AI) à travers le monde.

## 🚀 À Propos

Ma'a Suh accompagne la transformation digitale des entreprises en Afrique et à l'international grâce à une suite d'outils interconnectés :

- **Fintech** : Solutions de paiement et microfinance.
- **SaaS** : CRM, ERP, et gestion locative (ALOGA).
- **Retail** : Gestion de stock et POS pour commerces.
- **IA** : Automatisation et analyse de données.

Ce site a pour but de présenter ces offres, de renforcer la crédibilité technique de l'entreprise et de générer des leads qualifiés.

## 🛠️ Stack Technique

Ce projet utilise les dernières technologies web pour garantir performance, accessibilité et design moderne :

- **Framework** : [Next.js 16](https://nextjs.org/) (App Router)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS 4](https://tailwindcss.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Internationalisation** : [next-intl](https://next-intl.dev/) (Français / English)
- **Optimisation Images** : `next/image`

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
└── proxy.ts             # Middleware de routing
```

### Ajouter une traduction

1. Ajouter la clé dans `messages/fr.json` et `messages/en.json`
2. Utiliser `useTranslations("Namespace")` dans le composant
3. Appeler `t("key")` pour afficher le texte

## 📂 Structure du Projet

```
├── app/
│   └── [locale]/        # Pages localisées (Next.js App Router)
│       ├── layout.tsx   # Layout avec NextIntlClientProvider
│       └── page.tsx     # Page principale
├── components/
│   ├── ui/              # Composants UI génériques
│   ├── LanguageSwitcher.tsx  # Sélecteur de langue
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
    git clone https://github.com/votre-org/maasuh.git
    cd maasuh
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
    Rendez-vous sur [http://localhost:3000](http://localhost:3000) — redirection automatique vers `/fr`.

## ✨ Fonctionnalités Clés

- **Internationalisation** : Support bilingue FR/EN avec sélecteur de langue.
- **Navigation Global (Smooth Scroll)** : Accès rapide aux sections `#about`, `#solutions`, `#expertise`, et `#contact`.
- **Design Responsive** : Optimisé pour mobile, tablette et desktop.
- **Contenu International** : Support pour les bureaux USA, Cameroun, Congo, Canada.
- **Composants Interactifs** : Menu mobile animé, accordéon FAQ, effets de survol.

## 👥 Auteurs

- **Ma'a Suh Team** - Conception & Stratégie
- **Raoul Flypsid** - Architecture & Développement ([rfx.life](https://rfx.life))

## 📄 Licence

Ce projet est la propriété exclusive de Ma'a Suh LLC.
