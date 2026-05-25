# KalkulatorWynagrodzeń — Notatki deweloperskie

## Status projektu
Projekt zbudowany zgodnie ze specyfikacją z `cursor-prompt-poland-salary-calculator.md`.

## Uruchomienie
```bash
npm install
npm run dev
```

## Analytics
- Google Analytics 4: zamień `G-XXXXXXXXXX` w `app/layout.tsx` na prawdziwy ID śledzenia.
- Microsoft Clarity: zamień `CLARITY_PROJECT_ID` w `app/layout.tsx` na ID projektu.

## Kalkulator — założenia obliczeń 2025
- **UoP / zlecenie:** ZUS 13,71%, zdrowotna 9% (odliczenie 7,75%), KUP 250 zł / 20%.
- **O dzieło:** brak ZUS i zdrowotnej, KUP 50%, tylko PIT.
- **Ulga podatkowa:** -300 zł/mies. od zaliczki PIT.
- Kalkulator nie uwzględnia: ulgi dla młodych (<26 lat), statusu studenta, PPK, wielu źródeł dochodu.

## Do weryfikacji przed produkcją
1. Podmiana placeholderów GA4 i Clarity.
2. Weryfikacja wyników kalkulatora z oficjalnymi tabelami (np. obliczumowe.pl — tylko benchmark).
3. Konfiguracja domeny `kalkulatorwynagrodzen.pl` i certyfikatu SSL.
4. Podłączenie backendu do formularza kontaktowego (obecnie symulacja po stronie klienta).
