Rendi il tuo codice "parlante" con gli strumenti che ti offre il linguaggio finchè puoi e usa i commenti solo come ultima risorsa.
Pensa ai commenti come ad un male talvolta necessario. Dovresti sforzarti di rendere il tuo codice naturalmente leggibile, senza bisogno di commentarlo.
Ad es. 
<fieldset>
  <legend>Dati anagrafici</legend>
</fieldset>
è già abbastanza esplicito.
Supponiamo che non esistano elementi che esprimono un significato semantico (<nav>, <header>, etc.).
Avremmo potuto comunque usare le classi o gli id per descrivere meglio la nostra applicazione.
es.
<div class="navigation" id="top-nav-bar"></div>
o
<div class="main-content"></div>

So che probabilmente hai scelto id e classi solo per poter stilizzare il contenuto, giusto per finire l'esercizio, però, una volta conclusi gli sviluppi, cerca di mettere come punto centrale la leggibilità del codice. 

Questa regola si può estendere a qualsiasi linguaggio di programmazione, non solo come in questo caso a HTML e CSS.

Ho rifattorizzato un po' il tuo cv cercando di mostrarti questo concetto...
