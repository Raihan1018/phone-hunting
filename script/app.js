const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  //   const phonePrice = parseInt(parseInt(slug.split("-")[1]));
  //   console.log(phones);
  displayPhones(phones);
};

const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phones.forEach((phone) => {
    console.log(phone);
    //  1. create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card  w-96 shadow-xl`;
    phoneCard.innerHTML = `
    <div>
          <div class="card w-96 shadow-xl">
            <figure>
              <img
                class="bg-[#f0f6ff] p-10"
                src="${phone.image}"
              />
            </figure>
            <div class="card-body bg-white text-black">
              <h2>${phone.brand}</h2>
              <h2>${phone.phone_name}</h2>
              <h2>${phone.slug}</h2>
              <div class="card-actions justify-end">
                <button class="btn btn-primary mx-auto">See Details</button>
              </div>
            </div>
          </div>
        </div>
    `;
    phoneContainer.appendChild(phoneCard);
  });
};

loadPhone();
