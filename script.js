function adoptPet(name) {
    alert(`Thank you for choosing to adopt ${name}! Our team will contact you soon.`);
  }
  const pets = [
    { name: "Maxyyy", type: "Dog", age: 2, img: "img/dogs/dog01.jpg" },
    { name: "Luna", type: "Cat", age: 1, img: "img/cats/cat02.jpg" },
    { name: "Bubbles", type: "Capybara", age: 5, img: "img/capybaras/capybara01.jpg" },
    { name: "Whiskers", type: "Cat", age: 3, img: "img/cats/cat01.jpg" },
    { name: "Shadow", type: "Dog", age: 4, img: "img/dogs/dog02.jpg" },
    { name: "Tweetie", type: "Bird", age: 1.5, img: "img/dogs/birds/bird01.jpg" },
    { name: "Flap", type: "Bird", age: 2, img: "img/dogs/birds/bird02.jpg" },
    { name: "Cappy", type: "Capybara", age: 6, img: "img/capybaras/capybara02.jpg" },
    { name: "Garfield", type: "Cat", age: 2.5, img: "img/cats/cat03.jpg" },
    { name: "Rover", type: "Dog", age: 3, img: "img/dogs/dog03.jpg" },
  ];
  
  function adoptPet(name) {
    alert(`Thank you for choosing to adopt ${name}! Our team will contact you soon.`);
  }
  
  function renderPets(filteredPets) {
    const container = $("#pet-container");
    container.empty();
    filteredPets.forEach(pet => {
      const card = `
        <div class="pet-card">
          <img src="${pet.img}" alt="${pet.name}">
          <h3>${pet.name}</h3>
          <p>${pet.type}, ${pet.age} year(s) old</p>
          <button onclick="adoptPet('${pet.name}')" class="adopt-btn">Adopt Now</button>
        </div>
      `;
      container.append(card);
    });
  }
  
  function getSelectedTypes() {
    return $("input[name='pet-type']:checked").map(function () {
      return this.value;
    }).get();
  }
  
  function filterPets() {
    const selectedTypes = getSelectedTypes();
    const filtered = pets.filter(pet => selectedTypes.includes(pet.type));
    renderPets(filtered);
  }
  
  $(document).ready(function () {
    renderPets(pets);
    $("input[name='pet-type']").on("change", filterPets);
  });
  