const phrases = [
    "Maszyna losująca", "Wią", "Do roboty", "Ja się nudzę",
    "Kawusuia/ę", "Dzień dobry wieczór", "Łukasz", "Nie przeszkadzam?",
    "Ja mogę szybciej", "Jak wezmę kija", "Na oko to chłop w szpitalu umarł",
    "Skupcie się", "Za łeb ciągać", "Cichutko", "Pierwsza klasa", "Jeszcze chwila",
    "Liczymy liczymy", "Szybciutko", "Nie przekrzyczę", "Loczki się rozprostują",
    "Na podstawie...", "Można?", "Może trochę ciszej?", "Krótka piłka",
    "Mogę przeszkodzić?", "Buzie na tablicę", "*Pukanie w biurko*", "The winner is...",
    "Jak krew z nosa", "Panie ładny", "Kochaniutki", "Proszę państwa", "Ludzie!", "Hej!"
  ];
  
  function generateBingoCard() {
    const shuffled = phrases.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 16); // Selects the first 16 unique phrases
    const bingoCard = document.getElementById('bingoCard');
    bingoCard.innerHTML = ''; // Clear previous card
    
    selected.forEach(phrase => {
      const cell = document.createElement('div');
      cell.textContent = phrase;
      cell.className = 'bingo-cell';
      bingoCard.appendChild(cell);
    });
  }
  
  // Generate initial card
  generateBingoCard();
  