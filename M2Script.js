//Defining variables for background video and video text
window.onload = function () {
  let video = document.getElementById("background-video");
  let content = document.querySelector(".content");

//video object is stopped after 10 seconds and becomes a still image
   video.onloadedmetadata = function () {
    setTimeout(function () {
      video.pause();
   }, 10000);
   };

// Main text in video apears after 2 seconds from video start
  setTimeout(function () {
    content.style.opacity = 1;
  }, 2000);
};

// zoom in effect when mouse hovers over pictures
const places = document.querySelectorAll(".place");

places.forEach((place) => {
  place.addEventListener("mouseenter", () => {
    place.classList.add("zoomed");
  });

  place.addEventListener("mouseleave", () => {
    place.classList.remove("zoomed");
  });
});


// Array of countries used in  "for of"  repetition
const arrayOfCountries = [
  { name: "Uruguay", capital: "Montevideo", population: 3.2 },
  { name: "Brazil", capital: "Brasilia", population: 211 },
  { name: "Chile", capital: "Santiago", population: 20 },
  { name: "Argentina", capital: "Buenos Aires", population: 45 },
  { name: "Peru", capital: "Lima", population: 33.7 },
  { name: "Paraguay", capital: "Asuncion", population: 6.7 },
  { name: "Colombia", capital: "Bogota", population: 50 },
  { name: "Ecuador", capital: "Quito", population: 17.8 },
  { name: "Venezuela", capital: "Maracaibo", population: 28.2 },
  { name: "Bolivia", capital: "La Paz", population: 12 },
  { name: "Suriname", capital: "Paramaribo", population: 0.6 },
  { name: "Guyana", capital: "Georgetown", population: 0.8 },
];

// /// Get the button and dialog elements by their IDs
 const submitButton = document.getElementById("submit-button");
 const dialog = document.getElementById("country-dialog");

// This is the event listener to the submit button
submitButton.onclick = function() {
  // User's input from the dialog box
  const userInput = dialog.value.trim();

  // Finds the matching country in the array
  let matchingCountry;
  for (const country of arrayOfCountries) {
    if (country.name.toLowerCase() === userInput.toLowerCase()) {
      matchingCountry = country;
      break;
    }
  }

  // Here I diplay  the country information or an error message
  if (matchingCountry) {
    const countryInfo = `Country: ${matchingCountry.name}<br>
                         Capital: ${matchingCountry.capital}<br>
                         Population: ${matchingCountry.population}`;
    result.innerHTML = countryInfo;
  } else {
    result.innerHTML = "That country is not in South America.";
  }
};
