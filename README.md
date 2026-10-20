# Szachowi bohaterowie

Prosta gra do nauki ruchów figur szachowych, zbudowana w React, TypeScript i Vite. Na planszy 6×6 Spidey staje do pojedynku z trzema przeciwnikami — zadaniem gracza jest wybrać tego, do którego może ruszyć jego figura. Pola planszy mają co najmniej 44 px, aby wygodnie można było ich dotykać na telefonie.

## Uruchomienie lokalne

```sh
npm install
npm run dev
```

## Publikacja na GitHub Pages

Projekt zawiera workflow GitHub Actions, który buduje i publikuje stronę po wypchnięciu zmian na gałąź `main`.

1. Wypchnij projekt do repozytorium GitHub o nazwie `spidey-chess`.
2. W ustawieniach repozytorium, w **Settings → Pages → Build and deployment**, wybierz **GitHub Actions**.
3. Po wypchnięciu kodu sprawdź postęp w zakładce **Actions**. Strona będzie dostępna pod adresem `https://<nazwa-użytkownika>.github.io/spidey-chess/`.

Jeśli repozytorium ma inną nazwę, zmień ścieżkę `base` w `vite.config.ts`, tak aby odpowiadała nazwie repozytorium.

## Budowanie

```sh
npm run build
```

## Struktura kodu

- `src/game/` zawiera typy, figury, zasady ruchu i generator zagadek.
- `src/components/` zawiera osobne komponenty interfejsu oraz style planszy i panelu figury.
- `src/App.tsx` zarządza stanem rozgrywki i składa komponenty w ekran gry.
