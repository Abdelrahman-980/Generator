
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
        "It always seems impossible until it's done. - Nelson Mandela",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson"
      ];
  
      function generateQuote() {
        
        const randomIndex = Math.floor(Math.random() * quotes.length);
  
        const quoteElement = document.getElementById('quote');
        quoteElement.textContent = quotes[randomIndex];
      }