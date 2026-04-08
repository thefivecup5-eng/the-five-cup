# 🏆 The 5 Cup — Guide d'administration v3

---

## 🗂️ Structure complète du projet

```
the-5-cup/
├── public/
│   └── assets/
│       ├── logos-sans-fond/
│       │   └── logo.png                     ← Logo principal (header + footer)
│       ├── poules/
│       │   ├── poule_terre.png              ← Logo Poule Terre
│       │   ├── poule_air.png                ← Logo Poule Air
│       │   └── poule_eau.png                ← Logo Poule Eau
│       └── equipes/
│           ├── poule_terre_equipe1.png      ← Logo équipe 1 (Poule Terre)
│           ├── poule_terre_equipe2.png
│           ├── poule_terre_equipe3.png
│           ├── poule_terre_equipe4.png
│           ├── poule_terre_equipe5.png
│           ├── poule_air_equipe1.png        ← Logo équipe 1 (Poule Air)
│           ├── poule_air_equipe2.png
│           ├── poule_air_equipe3.png
│           ├── poule_air_equipe4.png
│           ├── poule_air_equipe5.png
│           ├── poule_eau_equipe1.png        ← Logo équipe 1 (Poule Eau)
│           ├── poule_eau_equipe2.png
│           ├── poule_eau_equipe3.png
│           ├── poule_eau_equipe4.png
│           └── poule_eau_equipe5.png
├── src/
│   ├── layouts/
│   │   └── Layout.astro                     ← HTML global + polices
│   ├── components/
│   │   ├── Header.astro                     ← Menu + burger mobile
│   │   ├── HeroSection.astro                ← Bannière principale
│   │   ├── MarqueeBanner.astro              ← Bandeaux animés
│   │   ├── CountdownTimer.astro             ← Compte à rebours
│   │   ├── PoulesSection.astro              ← Carte des 3 poules
│   │   ├── CTASection.astro                 ← Section inscription
│   │   ├── InnerPage.astro                  ← Layout pages internes
│   │   └── Footer.astro                     ← Pied de page
│   └── pages/
│       ├── index.astro                      ← Accueil
│       ├── competition.astro                ← Compétition
│       ├── social.astro                     ← Instagram
│       ├── about.astro                      ← À propos
│       ├── rules.astro                      ← Règlement
│       ├── teams.astro                      ← Équipes
│       ├── faq.astro                        ← FAQ
│       └── legal.astro                      ← Mentions légales
```

---

## 🚀 Démarrage rapide

```bash
npm install
npm run dev        # → http://localhost:4321
npm run build      # Production
npm run preview    # Test build local
```

---

## 🖼️ Convention de nommage des fichiers images

### Logo principal
| Fichier | Chemin |
|---|---|
| Logo du site | `public/assets/logos-sans-fond/logo.png` |

### Logos des poules
| Fichier | Poule |
|---|---|
| `poule_terre.png` | `public/assets/poules/` |
| `poule_air.png`   | `public/assets/poules/` |
| `poule_eau.png`   | `public/assets/poules/` |

### Logos des équipes
Nommage strict : `poule_[element]_equipe[numero].png`

| Fichier | Équipe |
|---|---|
| `poule_terre_equipe1.png` | Équipe 1, Poule Terre |
| `poule_terre_equipe2.png` | Équipe 2, Poule Terre |
| `poule_terre_equipe3.png` | Équipe 3, Poule Terre |
| `poule_terre_equipe4.png` | Équipe 4, Poule Terre |
| `poule_terre_equipe5.png` | Équipe 5, Poule Terre |
| `poule_air_equipe1.png`   | Équipe 1, Poule Air   |
| ... | ... |
| `poule_eau_equipe5.png`   | Équipe 5, Poule Eau   |

⚠️ **Important** : Tous les noms en **minuscules**, extension `.png`. Si vous remplacez une image, gardez exactement le même nom.

---

## ✏️ Modifications courantes

### Changer la date de l'événement
Fichier : `src/components/CountdownTimer.astro` (ligne ~85)
```js
const targetDate = new Date('2026-04-29T09:00:00');
```

### Changer le lien d'inscription (partout d'un coup)
Recherchez `TICKET_LINK` dans VSCode (Ctrl+Shift+F) — il apparaît dans :
- `src/components/Header.astro`
- `src/components/HeroSection.astro`
- `src/components/CTASection.astro`
- `src/pages/competition.astro`

Remplacez la valeur dans chacun :
```js
const TICKET_LINK = "https://votre-nouveau-lien.com";
```

### Changer le compte Instagram
Recherchez `the_five_cup` dans VSCode et remplacez partout.

### Noms des équipes
Fichier : `src/pages/competition.astro` et `src/pages/teams.astro`
```js
const teamsByPoule = {
  terre: ['Nom Équipe 1', 'Nom Équipe 2', ...],
  air:   ['Nom Équipe 6', ...],
  eau:   ['Nom Équipe 11', ...],
};
```

### Texte des bandeaux animés
Dans `src/pages/index.astro`, chaque `<MarqueeBanner />` a une prop `items` :
```astro
<MarqueeBanner items={['MOT 1', 'MOT 2', 'MOT 3']} bgColor="#043927" textColor="#C9A84C" />
```

---

## 🎨 Identité visuelle

| Élément | Valeur |
|---|---|
| Couleur principale | `#043927` (vert bouteille) |
| Couleur accent | `#C9A84C` (or) |
| Couleur texte | `#F5F0E8` (crème) |
| Police titres | Syne 800 (Google Fonts) |
| Police corps | Archivo (Google Fonts) |
| Boutons | `border-radius: 0` (rectangulaires) |

---

## 📱 Responsive

Le site est entièrement responsive :
- **Mobile (< 768px)** : menu burger, titres fluides, grilles en colonne
- **Tablette** : grilles adaptées
- **Desktop** : mise en page complète

---

## 🔗 Liens importants

| Destination | URL |
|---|---|
| Formulaire inscription | https://docs.google.com/forms/d/e/1FAIpQLScFuQRzO2CFAP7BWfzQZgbS5u1eVtF7u3ON7vSh_o6Rfl4WEQ/viewform |
| Instagram | https://www.instagram.com/the_five_cup?igsh=aTN0NmFlcmc5eWVx |
| Site en production | https://the-5-cup.vercel.app |

---

## 📞 Infos de contact (Footer)

À modifier dans `src/components/Footer.astro` :
- Email : `thefivecup5@gmail.com`
- Téléphone : `06 34 82 92 83`
- Adresse : `UrbanSoccer Toulouse Sept Deniers, 2 Rue de l'Égalité, 31200 Toulouse`
