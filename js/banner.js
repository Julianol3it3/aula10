const banners = [
  {
    img_url: "banner.jpg",
    info: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
  },
  {
    img_url: "banner2.jpg",
    info: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
  },
  {
    img_url: "banner3.jpg",
    info: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
  },
  {
    img_url: "mouse.jpg",
    info: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
  },
  {
    img_url: "teclado.jpg",
    info: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
  },
];

function initBanner(selector, banners) {
  let index = 0;
  let intervalSlide = 0
  const elements = {
    banners: [],
    details: [],
    commands: [],
  };

  const parent = document.getElementById(selector);
  const container = document.createElement("div");
  container.className = "banners";
  const commands = document.createElement("div");
  commands.className = "commands";
  parent.innerHTML = "";
  parent.append(container, commands);



  for (let i = 0; i < banners.length; i += 1) {
    const banner = banners[i];
    const img = document.createElement("img");
    img.hidden = i > 0;
    img.src = `/img/${banner.img_url}`;

    const detail = document.createElement("div");
    detail.className = "detail";
    detail.hidden = i > 0;
    detail.append(banner.info);

    container.append(img, detail);

    const command = document.createElement("span");
    command.className = "command-item";
    command.onclick = function () {
      go(i);
    };
    commands.append(command);

    if (i === 0) {
      command.classList.add("active");
    }

    elements.banners.push(img);
    elements.details.push(detail);
    elements.commands.push(command);
  }

  function go(to, isClearSlide = true) {
    const currentBanner = elements.banners[index];
    const currentDetail = elements.details[index];
    const currentComamander = elements.commands[index];
    currentBanner.hidden = true;
    currentDetail.hidden = true;
    currentComamander.classList.remove("active");
    index = to;

    const nextBanner = elements.banners[index];
    const nextDetail = elements.details[index];
    const nextCommander = elements.commands[index];
    nextBanner.hidden = false;
    nextDetail.hidden = false;
    nextCommander.classList.add("active");

    if (isClearSlide){
        initSlide()
    }
  }

  function initSlide() {
      clearInterval(intervalSlide);

      intervalSlide = setInterval(function () {
          const next = index + 1 >= banners.length ? 0 : index + 1;
          go(next, false)
      }, 10 * 1000);
  }

  initSlide()
}

initBanner("banner-content", banners);
