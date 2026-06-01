# TFC SHOP — Site E-commerce

Site e-commerce complet pour TFC SHOP Cameroun, construit avec **Next.js 14**.

## 🚀 Déploiement rapide

### Vercel (recommandé)
1. Poussez ce dossier sur GitHub
2. Connectez-vous sur [vercel.com](https://vercel.com)
3. Cliquez **New Project** → importez votre repo
4. Vercel détecte Next.js automatiquement → **Deploy**

### Netlify
1. Poussez sur GitHub
2. Connectez-vous sur [netlify.com](https://netlify.com)
3. **Add new site** → **Import from Git**
4. Build command : `npm run build` | Publish : `.next`
5. Installez le plugin **@netlify/plugin-nextjs**

## 💻 Développement local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## 📁 Structure du projet

```
tfc-shop/
├── components/
│   ├── layout/
│   │   ├── TopBar.jsx          # Barre supérieure
│   │   ├── Navbar.jsx          # Navigation principale
│   │   ├── Footer.jsx          # Pied de page
│   │   └── Layout.jsx          # Wrapper global
│   ├── product/
│   │   └── ProductCard.jsx     # Carte produit réutilisable
│   └── sections/
│       ├── HeroSlider.jsx      # Slider héro animé
│       ├── CategoryStrip.jsx   # Bande de catégories
│       ├── FlashDeals.jsx      # Ventes flash + countdown
│       ├── BannerRow.jsx       # Bannières promotionnelles
│       ├── ProductGrid.jsx     # Grille de produits
│       ├── BrandsStrip.jsx     # Bande de marques
│       ├── Features.jsx        # Engagements boutique
│       └── Newsletter.jsx      # Formulaire newsletter
├── data/
│   └── products.js             # Catalogue produits & catégories
├── lib/
│   ├── CartContext.js          # Contexte panier (React)
│   ├── WishlistContext.js      # Contexte favoris (React)
│   └── utils.js                # Fonctions utilitaires
├── pages/
│   ├── index.jsx               # Page d'accueil
│   ├── panier.jsx              # Page panier
│   ├── favoris.jsx             # Page favoris
│   ├── offres.jsx              # Offres du jour
│   ├── nouveautes.jsx          # Nouvelles arrivées
│   ├── meilleures-ventes.jsx   # Top ventes
│   ├── 404.jsx                 # Page 404
│   ├── produit/[id].jsx        # Fiche produit dynamique
│   ├── categorie/[slug].jsx    # Page catégorie dynamique
│   └── auth/connexion.jsx      # Connexion / Inscription
├── styles/
│   └── globals.css             # Styles globaux + variables CSS
├── public/                     # Assets statiques
├── vercel.json                 # Config Vercel
├── netlify.toml                # Config Netlify
└── next.config.js              # Config Next.js
```

## 🛍️ Fonctionnalités

- ✅ Page d'accueil complète (slider, catégories, flash deals, grilles...)
- ✅ Fiches produits dynamiques avec galerie
- ✅ Panier fonctionnel avec gestion des quantités
- ✅ Liste de favoris persistante
- ✅ Pages de catégories dynamiques
- ✅ Compte à rebours ventes flash
- ✅ Formulaire newsletter
- ✅ Page de connexion / inscription
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ SEO optimisé (Head, meta tags)

## 🎨 Personnalisation

### Changer les couleurs
Modifiez les variables CSS dans `styles/globals.css` :
```css
:root {
  --primary: #e63329;   /* Rouge TFC */
  --accent:  #FFD700;   /* Or accent */
}
```

### Ajouter des produits
Éditez `data/products.js` pour ajouter, modifier ou supprimer des produits.

### Connecter une base de données
Remplacez les imports `data/products.js` par des appels API dans les fonctions
`getStaticProps` / `getServerSideProps` de chaque page.

## 🔧 Stack technique
- **Next.js 14** — Framework React
- **CSS Modules** — Styles scopés par composant
- **React Context** — Gestion panier & favoris
- **Unsplash** — Images de démonstration (remplacer par les vôtres)

## 📝 Prochaines étapes recommandées
1. Connecter une BDD (Supabase, PlanetScale, MongoDB)
2. Intégrer un système de paiement (MTN MoMo, Orange Money, Stripe)
3. Ajouter un CMS (Sanity, Contentful) pour les produits
4. Mettre en place un système d'authentification (NextAuth.js)
