const users = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
  },
];

const container = document.createElement("div");
container.setAttribute("class", "container");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.padding = "5%";
document.body.appendChild(container);

const userList = document.createElement("div");
userList.setAttribute("id", "user-list");
userList.style.display = "flex";
userList.style.justifyContent = "space-between";
userList.style.padding = "20px";
userList.style.border = "1px solid gray";
userList.style.borderRadius = "10px";
userList.style.width = "100%";
userList.style.backgroundColor = "white";
container.appendChild(userList);

for (let i = 0; i < users.length; i++) {
  let user = users[i];

  const userCard = document.createElement("div");
  userCard.setAttribute("class", "user-card");
  userCard.style.padding = "10px";
  userCard.style.display = "flex";
  userCard.style.flexDirection = "column";
  userCard.style.border = "1px solid blue";
  userCard.style.borderRadius = "10px";
  userList.appendChild(userCard);

  const michaelImage = document.createElement("img");
  michaelImage.setAttribute("src", user.avatar);
  michaelImage.style.height = "100px";
  michaelImage.style.objectFit = "cover";
  userCard.appendChild(michaelImage);

  const fullName = document.createElement("p");
  fullName.textContent = `${user.first_name} ${user.last_name}`;
  fullName.style.textAlign = "center";
  fullName.style.fontFamily = "fantasy";
  fullName.style.marginTop = "10px";
  userCard.appendChild(fullName);

  const userEmail = document.createElement("a");
  userEmail.setAttribute("href", `mailto:${user.email}`);
  userEmail.textContent = user.email;
  userEmail.style.margin = "auto";
  userEmail.style.display = "none";
  userCard.appendChild(userEmail);

  const icons = document.createElement("div");
  icons.style.display = "flex";
  icons.style.justifyContent = "space-between";
  userCard.appendChild(icons);

  const remove = document.createElement("img");
  remove.setAttribute("src", "./icons/trash-solid.svg");
  remove.style.width = "30px";
  remove.style.cursor = "pointer";

  icons.appendChild(remove);

  const info = document.createElement("img");
  info.setAttribute("src", "./icons/circle-info-solid.svg");
  info.style.width = "30px";
  info.style.cursor = "pointer";
  icons.appendChild(info);

  info.addEventListener("click", () => {
    userEmail.style.display = "block";
  });
  remove.addEventListener("click", () => {
    userCard.remove();
  });

  let userCard2 = userCard;
  userList.appendChild(userCard2);
}
