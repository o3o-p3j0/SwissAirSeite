// aus JSON-Datei
const data =
    [
        {
            "start": "Stuttgart (STR)",
            "ziel": "Frankfurt (FRA)",
            "stops": 0,
            "flugdauer": "1h 10m",
            "preis": {
                "business": "360 EUR",
                "economy": "150 EUR"
            },
            "terminal": "T1"
        },
        {
            "start": "Stuttgart (STR)",
            "ziel": "Berlin (BER)",
            "stops": 0,
            "flugdauer": "1h 25m",
            "preis": {
                "business": "400 EUR",
                "economy": "180 EUR"
            },
            "terminal": "T2"
        },
        {
            "start": "Stuttgart (STR)",
            "ziel": "München (MUC)",
            "stops": 0,
            "flugdauer": "1h 05m",
            "preis": {
                "business": "370 EUR",
                "economy": "160 EUR"
            },
            "terminal": "T1"
        },
        {
            "start": "Stuttgart (STR)",
            "ziel": "Hamburg (HAM)",
            "stops": 1,
            "flugdauer": "2h 45m",
            "preis": {
                "business": "450 EUR",
                "economy": "200 EUR"
            },
            "terminal": "T3"
        },
        {
            "start": "Stuttgart (STR)",
            "ziel": "Düsseldorf (DUS)",
            "stops": 0,
            "flugdauer": "1h 20m",
            "preis": {
                "business": "380 EUR",
                "economy": "170 EUR"
            },
            "terminal": "T1"
        },
        {
            "start": "Stuttgart (STR)",
            "ziel": "Zürich (ZRH)",
            "stops": 0,
            "flugdauer": "1h 10m",
            "preis": {
                "business": "390 EUR",
                "economy": "180 EUR"
            },
            "terminal": "T2"
        },
        {
            "start": "Stuttgart (STR)",
            "ziel": "Wien (VIE)",
            "stops": 1,
            "flugdauer": "2h 15m",
            "preis": {
                "business": "420 EUR",
                "economy": "190 EUR"
            },
            "terminal": "T1"
        },
        {
            "start": "Stuttgart (STR)",
            "ziel": "Paris (CDG)",
            "stops": 0,
            "flugdauer": "1h 30m",
            "preis": {
                "business": "430 EUR",
                "economy": "200 EUR"
            },
            "terminal": "T3"
        },
        {
            "start": "Stuttgart (STR)",
            "ziel": "Amsterdam (AMS)",
            "stops": 0,
            "flugdauer": "1h 35m",
            "preis": {
                "business": "440 EUR",
                "economy": "210 EUR"
            },
            "terminal": "T2"
        },
        {
            "start": "Stuttgart (STR)",
            "ziel": "Madrid (MAD)",
            "stops": 1,
            "flugdauer": "3h 15m",
            "preis": {
                "business": "500 EUR",
                "economy": "250 EUR"
            },
            "terminal": "T1"
        }
    ];

// Den Submit-Button auswählen
const searchButton = document.getElementById('button_fly_search');

// Event Listener für den Submit-Button
searchButton.addEventListener('click', () => {
    // vorherige Ergebnisse löschen
    let elements = document.getElementsByClassName('temp');
    Array.from(elements).forEach(element => element.remove());
    // Start und Zielort aus den Eingabefeldern holen
    const fly_from = document.getElementById('input_fly_from').value;
    const fly_to = document.getElementById('input_fly_to').value;
    resultSearch(fly_from, fly_to);
});

// wählt das Muster-Div aus
let originalDiv = document.getElementById('result_1');

function resultSearch(fly_from, fly_to) {

    // forEach-Schleife zum Durchlaufen aller JSON-Einträge
    data.forEach((flight, index) => {
        
        //nur Datensätze mit übereinstimmenden Start und Ziel
        if (fly_from == (flight.start).split("(")[0].trim() &&
            fly_to == (flight.ziel).split("(")[0].trim()) {
            // klont das Muster-Div
            let newDiv = originalDiv.cloneNode(true);

            // ändert die ID result_1 logisch erhöhend
            let divID = `result_${index + 2}`;

            // weist dem geclonten Div die neue DIV-ID zu
            newDiv.id = divID;
            newDiv.classList.add("temp");

            // ändert die ID und fügt den Startflughafen ein
            newDiv.querySelector(`#departure_IATA_1`).id = `departure_IATA_${divID}`;
            newDiv.querySelector(`#departure_IATA_${divID}`).textContent = flight.start.split('(')[1].split(')')[0];

            // ändert die ID und fügt den Zieflughafen ein
            newDiv.querySelector(`#arrival_IATA_1`).id = `arrival_IATA_${divID}`;
            newDiv.querySelector(`#arrival_IATA_${divID}`).textContent = flight.ziel.split('(')[1].split(')')[0];

            // ändert die ID und fügt die Anzahl an Stopps ein
            newDiv.querySelector(`#count_stops_1`).id = `count_stops${divID}`;
            newDiv.querySelector(`#count_stops${divID}`).textContent = flight.stops;

            // ändert die ID und fügt den Economypreis ein
            newDiv.querySelector(`#economy_price_1`).id = `economy_price_${divID}`;
            newDiv.querySelector(`#economy_price_${divID}`).textContent = flight.preis.economy;

            // ändert die ID und fügt den Businesspreis ein
            newDiv.querySelector(`#business_price_1`).id = `business_price_${divID}`;
            newDiv.querySelector(`#business_price_${divID}`).textContent = flight.preis.business;

            // ändert die ID und fügt die Flugdauer ein
            newDiv.querySelector(`#duration_1`).id = `duration_${divID}`;
            newDiv.querySelector(`#duration_${divID}`).textContent = flight.flugdauer;

            // ändert die ID und fügt das Terminal ein
            newDiv.querySelector(`#terminal_1`).id = `terminal_${divID}`;
            newDiv.querySelector(`#terminal_${divID}`).textContent = flight.terminal;

            // ändert die ID und schreibt "Stopp" oder "Stopps"
            newDiv.querySelector(`#test_stopp_1`).id = `test_stopp_${divID}`;
            if (flight.stops == 1) {
                newDiv.querySelector(`#test_stopp_${divID}`).textContent = ("Stopp");
            } else {
                newDiv.querySelector(`#test_stopp_${divID}`).textContent = ("Stopps");
            };

            // macht das neue Div sichtbar
            newDiv.style.display = "grid";

            // fügt das neue Div dem Container hinzu
            document.getElementById("results_container").appendChild(newDiv);
        }
    });
}
