# ELI-lex
## Sistema di ricerca di atti all'interno dell'Unione Europea, stato italiano e regioni italiane.
Versione: 0.1

### Specifiche
ELI-lex si propone di essere un'interfaccia per la ricerca di atti giuridici in multivigenza. Al momento il servizio si limita alla **ricerca puntuale** (quindi fornendo gli opportuni estremi dell'atto) di norme emanate dall'**Unione Europea**, dall**Italia** e dalle **regioni italiane**.  
Per la ricerca di atti nell'U.E. viene impiegato il motore [EUR-Lex](https://eur-lex.europa.eu/homepage.html), per quelli nella giurisdizione italiana/regionale viene invece impiegato il motore [Normattiva](https://www.normattiva.it/).  
ELI-lex sfrutta per la ricerca unicamente lo standard di query europeo [ELI](https://eur-lex.europa.eu/eli-register/about.html) (ed il suo adattamento italiano, [Normeinrete](https://www.agid.gov.it/sites/default/files/repository_files/linee_guida/linee_guida_marcatura_documenti_normativi_0.pdf)). Per questo motivo la piattaforma non è ancora in grado di ricercare altri documenti di giurisprudenza (ad es. le sentenze di tribunali). Si seguirà quindi da vicino, e se necessario si implementerà, la definizione dello standard ECLI per la ricerca di documenti di questo tipo.  
Si avverte fin da subito che la ricerca di leggi/delibere regionali potrebbe essere difficoltosa, non tanto per un problema di ELI-lex, quanto per una mancante uniformità negli standard di ricerca. Oltre a questo, si vuole sottolineare che il caricamento di una sua determinata norma in rete è a pura indiscrezione della regione: a tal ragione infatti non tutte le regioni hanno caricato con la stessa quantità e con i stessi tempi il materiale legislativo. Se quindi non si dovesse trovare la normativa regionale attraverso questa piattaforma, si consiglia di ricercarla direttamente sul sito della regione interessata (per la ricerca di atti regionali si fa affidamento *Motore federato regionale*, sviluppato da Normattiva).

### Utilizzo
Per utilizzare questo servizio è necessario scaricarlo. Ciò è possibile cliccando sul tasto verde *Code* e tra le opzioni del menù a tendina scegliere *Download ZIP*. 
Verrà quindi scaricata una cartella compressa con i vari file che compongono questo programma.  
A download terminato, si raccomanda di spostare la cartella compressa in una cartella dedicata, o comunque facilmente riconoscibile, avente un nome evocativo (ad es. *Ricerca leggi*). Fatto questo, si può procedere ad estrarre i file dalla cartella compressa a quella dedicata (al termine dell'operazione si può eliminare la cartella compressa).  
  
Avendo ora a disposizione i file, per utilizzare l'applicativo basta aprire il file *launch.html* (facendo doppio click).  
Nella pagina che appare si può:  
- consultare la costituzione; 
- usare un link rapido per collegarsi ad un codice di leggi italiano; 
- usare un link rapido per visionare un trattato (fondamentale) dell'Unione Europea; 
- cercare un atto.
<!-- Fine della lista -->
Di particolare interesse è l'ultima funzionalità elencata. Per ricercare un atto, basta cliccare sulla giurisdizione opportuna nella videata che appare sul browser dopo aver aperto *launch.html*. A seconda della giurisdizione scelta possono apparire pagine diverse, ma ognuna di questa chiederà il tipo di atto che si vuole ottenere, i suoi estremi (nella giurisdizione italiana sono richiesti numero, giorno, mese e anno, mentre in quella europea bastano numero e anno) e, se si desidera, la data per ottenere il testo vigente all'istante temporale specificato (se non viene precisata, il sistema mostrerà la norma vigente al giorno della ricerca).

### Problemi e suggerimenti
Essendo questo software appena sviluppato (senza il parere di esperti di dominio), è probabile che si possano riscontrare alcune problematiche. Se si notano comportamenti strani/inattesi, si sollecita l'utente a segnalarli il prima possibile inviando un messaggio a questo profilo o lasciando un commento sotto questa repository.  
Per migliorare questa piattaforma è indispensabile anche ricevere un feedback dai suoi utilizzatori: se si pensa ci sia qualcosa di mancante, di disordinato/confusionario o di eccessivo, si chiede la cortesia di segnalarlo (con le stesse modalità di sopra) e, ai limiti delle capacità dello sviluppatore, si farà il possibile per adattare il sistema alle esigenze dell'utente.

### Finalità
Questo software è stato sviluppato per scopi didattici/personali. Non vi è, ad ogni modo, alcun fine di lucro: i contenuti mostrati provengono da siti che li rendono disponibili gratuitamente, se dovesse essere richiesta una qualsiasi forma di pagamento per poter utilizzare un qualsiasi servizio di ELI-lex, declinare immediatamente e segnalare l'accaduto attraverso commento o messaggio privato.

### Dati personali
La piattaforma (ELI-lex) scaricabile da questa repository non raccoglie o elabora alcun tipo di dato personale. Se dovessero essere richiesti dati personali dalla piattaforma ELI-lex, in qualsiasi forma, si diffida dal rilasciarli e si prega di segnalare (sotto questa repository o attraverso messaggio privato) immediatamente questo comportamento anomalo.
ELI-lex ed il suo sviluppatore non sono responsabili per eventuali dati personali lasciati sui siti esterni a cui ELI-lex è collegato (EUR-lex e/o Normattiva).

### Licenza
![Creative Commons Attribuzione - Non commerciale - Condividi allo stesso modo 4.0 Internazionale](https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png)  
Scaricando questo software dichiari di aver preso visione e di accettare la sua [licenza](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.it) (Creative Commons Attribuzione - Non commerciale - Condividi allo stesso modo 4.0 Internazionale).