# Zrealizowane zadanie rekrutacyjne

1. Strona główna wyświetla pobrane dane z (**GET** _/books_) oraz umożliwia dodawanie książek do koszyka.
2. Strona prezentująca koszyk umożliwia zmianę ilości książek, usunięcie konkretnej pozycji oraz przejście do etapu podsumowania zamówienia.
3. Strona realizacji zamówienia posiada formularz umożliwiający dokończenie zakupów (wysłanie danych na **POST** _/order_). Po kliknięciu 'ZAMAWIAM I PŁACĘ' użytkownik dostanie informacje zwrotną za dokonanie zakupów lub informacje o źle wypełnionym formularzu.

## Dodatkowe usprawnienia

- Nawigacja
  - Linki do strony głównej oraz kosza
  - Podgląd koszyku na dowolnej podstronie dający wszystkie właściwości podstrony Koszyka.
  - Ilość produktów w koszyku.
- Wyświetlanie informacji zwrotnych o niepowodzeniu operacji.
- Dezaktywacji przycisków, jeżeli nie zostaną spełnione warunki.
- Zapisywanie koszyka w localStorage

## Wykorzystane narzędzia do realizacji zadania

- [Create React App](https://github.com/facebook/create-react-app)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [react-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [Tailwindcss](https://tailwindcss.com/)

## Typy

Typy propsów komponentów zdecydowałem się umieścić w tym samym folderze, nazwa pliku z typami wygląda następująco [nazwa-komponentu].types.ts. Typy, które są wykorzystywane wielokrotnie, znajdują się w pliku index.ts w folderze /types. Natomiast typy ściśle powiązane z logiką zostały pozostawione w tym samym pliku.

### `npm start`

Uruchomi aplikacjie pod [http://localhost:3000](http://localhost:3000);
