const phoneData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones);
};

const displayPhone = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phones.forEach((phone) => {
    console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList =
      "card bg-base-100 w-96 border-2 border-sky-500 border-black shadow-xl";
    phoneCard.innerHTML = `
     <figure class="px-10 pt-10">
              <img
                src=${phone.image}
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">${phone.brand}</h2>
              <p>${phone.phone_name}</p>
            </div>
`;
    phoneContainer.appendChild(phoneCard);
  });
};

phoneData();
