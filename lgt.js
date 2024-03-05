const headCard = document.getElementById('head-card');
const selectDropdown = document.getElementById('option-dropdown');

const myGovs =[
    {
        name:"Dr. Nnamdi Azikwe",
        dob: "16 November 1904",
        dod:"11 May 1996",
        regime: "Democracy",
        party:"NCNC",
    },

    {
        name: "Major General Johnson Aguiyi-ironsi",
        dob: "3 March 1924",
        dod: "29 July 1966",
        regime: "Military",
        party: null,
    },

    {
        name: "General Yakubu Gowon",
        dob: "19 October 1934",
        dod: null,
        regime: "Military",
        party: null,
    },

    {
        name: "Murtala Muhammed",
        dob: "8 March 1938",
        dod: "13 February 1976",
        regime: "Military",
        party: null,
    },

    {
        name: "Olusegun Obasanjo",
        dob: "5 March 1937",
        dod: null,
        regime: "Military",
        party: null,
    },

    {
        name: "Shehu Usman Aliyu Shagari",
        dob: "25 February 1925",
        dod: "28 December 2018",
        regime: "Democracy",
        party: "NPN",
    },

    {
        name: "Muhammadu Buhari",
        dob: "17 December 1942",
        dod: null,
        regime: "Military",
        party: null,
    },

    {
        name: "Ibrahim Badomosi Babangida",
        dob:"17 August 1941",
        dod: null,
        regime: "Military",
        party: null,
    },

    {
        name: "Ernest Adekunle Shonekan",
        dob: "9 May 1936",
        dod: "11 January 2022",
        regime: "Interim",
        party: null,
    },

    {
        name: "Sani Abacha",
        dob: "20 September 1943",
        dod: "8 June 1998",
        regime: "Military",
        party: null,
    },

    {
        name: "Olusegun Obasanjo",
        dob: "5 March 1937",
        dod: null,
        regime: "Democracy",
        party: "PDP",
    },

    {
        name: "Alhaji Musa Yar'Adua",
        dob: "16 August 1951",
        dod: "5 May 2010",
        regime: "Democracy",
        party: "PDP",
    },

    {
        name: "Dr. Goodluck Jonathan",
        dob: "20 November 1957",
        dod: null,
        regime: "Democracy",
        party: "PDP",
    },

    {
        name: "Muhammadu Buhari",
        dob: "17 December 1942",
        dod: null,
        regime: "Democracy",
        party: "APC",
    },

    {
        name: "Bola Ahmed Tinubu",
        dob: "29 March 1952",
        dod: null,
        regime: "Democracy",
        party: "APC",
    }
]

Object.freeze(myGovs);

const setCard = (arr=myGovs) =>{
    headCard.innerHTML = arr.map(({name, dob, dod, regime, party}) =>
       `<div class="card">
       <h2>Name: ${name}</h2>
       <p>DOB: ${dob}</p>
       <p>Died: ${dod !== null ? dod:"N/A"}</p>
       <p>regime: ${regime}</p>
       <p>Political party: ${party !== null ? party: "None"}</p>
       </div>`
    )
    .join("");
}

selectDropdown.addEventListener('change', (e) =>{
    headCard.innerHTML = "";

  switch(e.target.value){

    case "military": setCard(myGovs.filter((myGov) => myGov.regime === "Military"));
    break;

    case "democratic": setCard(myGovs.filter((myGov) => myGov.party !== null));
    break;

    case "interim": setCard(myGovs.filter((myGov) => myGov.regime === "Interim"));
    break;

    default: setCard();
  }

})

