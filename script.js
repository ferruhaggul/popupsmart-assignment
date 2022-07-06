
function fonk1 () {
    document.getElementById("headerpop").innerHTML = document.getElementById("headln").value;
};

function fonk2 () {
    document.getElementById("desct1").innerHTML = document.getElementById("desct0").value;
};

function fonk3 () {
    document.getElementById("successmsg").innerHTML = document.getElementById("mssg").value;
};




let dropdown =document.getElementById('fonts');
let mydata = [
  {
    "family":"Roboto",
    "subsets":[
       "cyrillic",
       "cyrillic-ext",
       "greek",
       "greek-ext",
       "latin",
       "latin-ext",
       "vietnamese"
    ],
    "version":"v30",
    "category":"sans-serif",
    "variants":[
       "100",
       "100italic",
       "300",
       "300italic",
       "regular",
       "italic",
       "500",
       "500italic",
       "700",
       "700italic",
       "900",
       "900italic"
    ]
 },
 {
    "family":"Open Sans",
    "subsets":[
       "cyrillic",
       "cyrillic-ext",
       "greek",
       "greek-ext",
       "hebrew",
       "latin",
       "latin-ext",
       "vietnamese"
    ],
    "version":"v29",
    "category":"sans-serif",
    "variants":[
       "300",
       "regular",
       "500",
       "600",
       "700",
       "800",
       "300italic",
       "italic",
       "500italic",
       "600italic",
       "700italic",
       "800italic"
    ]
 },
 {
    "family":"Noto Sans JP",
    "subsets":[
       "japanese",
       "latin"
    ],
    "version":"v42",
    "category":"sans-serif",
    "variants":[
       "100",
       "300",
       "regular",
       "500",
       "700",
       "900"
    ]
 },
 {
    "family":"Lato",
    "subsets":[
       "latin",
       "latin-ext"
    ],
    "version":"v23",
    "category":"sans-serif",
    "variants":[
       "100",
       "100italic",
       "300",
       "300italic",
       "regular",
       "italic",
       "700",
       "700italic",
       "900",
       "900italic"
    ]
 },
 {
    "family":"Montserrat",
    "subsets":[
       "cyrillic",
       "cyrillic-ext",
       "latin",
       "latin-ext",
       "vietnamese"
    ],
    "version":"v24",
    "category":"sans-serif",
    "variants":[
       "100",
       "200",
       "300",
       "regular",
       "500",
       "600",
       "700",
       "800",
       "900",
       "100italic",
       "200italic",
       "300italic",
       "italic",
       "500italic",
       "600italic",
       "700italic",
       "800italic",
       "900italic"
    ]
 },
 {
    "family":"Poppins",
    "subsets":[
       "devanagari",
       "latin",
       "latin-ext"
    ],
    "version":"v20",
    "category":"sans-serif",
    "variants":[
       "100",
       "100italic",
       "200",
       "200italic",
       "300",
       "300italic",
       "regular",
       "italic",
       "500",
       "500italic",
       "600",
       "600italic",
       "700",
       "700italic",
       "800",
       "800italic",
       "900",
       "900italic"
    ]
 },
 {
    "family":"Source Sans Pro",
    "subsets":[
       "cyrillic",
       "cyrillic-ext",
       "greek",
       "greek-ext",
       "latin",
       "latin-ext",
       "vietnamese"
    ],
    "version":"v21",
    "category":"sans-serif",
    "variants":[
       "200",
       "200italic",
       "300",
       "300italic",
       "regular",
       "italic",
       "600",
       "600italic",
       "700",
       "700italic",
       "900",
       "900italic"
    ]
 },
 {
    "family":"Roboto Condensed",
    "subsets":[
       "cyrillic",
       "cyrillic-ext",
       "greek",
       "greek-ext",
       "latin",
       "latin-ext",
       "vietnamese"
    ],
    "version":"v25",
    "category":"sans-serif",
    "variants":[
       "300",
       "300italic",
       "regular",
       "italic",
       "700",
       "700italic"
    ]
 },
 {
    "family":"Oswald",
    "subsets":[
       "cyrillic",
       "cyrillic-ext",
       "latin",
       "latin-ext",
       "vietnamese"
    ],
    "version":"v48",
    "category":"sans-serif",
    "variants":[
       "200",
       "300",
       "regular",
       "500",
       "600",
       "700"
    ]
 },
 {
    "family":"Roboto Mono",
    "subsets":[
       "cyrillic",
       "cyrillic-ext",
       "greek",
       "latin",
       "latin-ext",
       "vietnamese"
    ],
    "version":"v21",
    "category":"monospace",
    "variants":[
       "100",
       "200",
       "300",
       "regular",
       "500",
       "600",
       "700",
       "100italic",
       "200italic",
       "300italic",
       "italic",
       "500italic",
       "600italic",
       "700italic"
    ]
 },
 {
    "family":"Raleway",
    "subsets":[
       "cyrillic",
       "cyrillic-ext",
       "latin",
       "latin-ext",
       "vietnamese"
    ],
    "version":"v27",
    "category":"sans-serif",
    "variants":[
       "100",
       "200",
       "300",
       "regular",
       "500",
       "600",
       "700",
       "800",
       "900",
       "100italic",
       "200italic",
       "300italic",
       "italic",
       "500italic",
       "600italic",
       "700italic",
       "800italic",
       "900italic"
    ]
 },
 {
    "family":"Noto Sans",
    "subsets":[
       "cyrillic",
       "cyrillic-ext",
       "devanagari",
       "greek",
       "greek-ext",
       "latin",
       "latin-ext",
       "vietnamese"
    ],
    "version":"v27",
    "category":"sans-serif",
    "variants":[
       "100",
       "100italic",
       "200",
       "200italic",
       "300",
       "300italic",
       "regular",
       "italic",
       "500",
       "500italic",
       "600",
       "600italic",
       "700",
       "700italic",
       "800",
       "800italic",
       "900",
       "900italic"
    ]
 },
 {
    "family":"Inter",
    "subsets":[
       "cyrillic",
       "cyrillic-ext",
       "greek",
       "greek-ext",
       "latin",
       "latin-ext",
       "vietnamese"
    ],
    "version":"v11",
    "category":"sans-serif",
    "variants":[
       "100",
       "200",
       "300",
       "regular",
       "500",
       "600",
       "700",
       "800",
       "900"
    ]
 },
]
for (var i = 0; i < mydata.length; i++) {
    var option = document.createElement("OPTION");

    option.innerHTML = mydata[i].family;

    option.value = mydata[i].family;


    fonts.options.add(option);
}
// dropdown.length = 0;

// let defaultOption = document.createElement('option');
// defaultOption.text = 'Choose font';

// dropdown.add(defaultOption);
// dropdown.selectedIndex = 0;

// const url = 'https://apiv2.popupsmart.com/api/googlefont';

// const request = new XMLHttpRequest();
// request.open('GET', url, true);

// request.onload = function() {
  
//     const data = JSON.parse(request.responseText);
//     let option;
//     for (let i = 0; i < data.length; i++) {
//         for(let j =0; j<data.length; j++) {

//             option = document.createElement('option');
//             option.text = data[i][j].family;
//             option.value = data[i][j].family;
//             dropdown.add(option);
//         }
//     }  
// }

// request.onerror = function() {
//   console.error('Error ' + url);
// };

// request.send();

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {


  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
