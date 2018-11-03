export default score => {
  const screen = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerText = "GAME OVER";
  const p = document.createElement("p");
  p.innerText = `Your score: ${score}`;
  const buttons = document.createElement("div");
  const playAgain = document.createElement("button");
  playAgain.innerText = "Play again";
  const quit = document.createElement("button");
  quit.innerText = "Quit";

  function styleElement(element, obj) {
    for (const key in obj) {
      if (typeof obj[key] !== "string") {
        continue;
      }
      element.style[key] = obj[key];
    }
  }

  styleElement(screen, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "50%",
    backgroundColor: "black",
    border: "5px solid white",
    boxShadow: "0px 0px 0px 10px black",
    color: "white",
    borderRadius: "50px",
    position: "absolute",
    top: "25%",
    left: "25%"
  });
  styleElement(h1, {
    fontSize: "50px",
    margin: "0",
    marginBottom: "4rem"
  });
  styleElement(p, {
    margin: "0",
    marginBottom: "5rem",
    fontSize: "35px",
    padding: "2rem",
    boxShadow: "0px 0px 0px 5px white"
  });

  styleElement(buttons, {
    display: "flex",
    width: "70%",
    justifyContent: "space-between"
  });

  styleElement(playAgain, {
    fontSize: "25px",
    width: "45%",
    padding: ".7rem 2rem",
    backgroundColor: "white",
    border: "0",
    borderRadius: "5px",
    boxShadow: "0px 0px 0px 7px white"
  });
  styleElement(quit, {
    fontSize: "25px",
    width: "45%",
    padding: ".7rem 2rem",
    backgroundColor: "white",
    border: "0",
    borderRadius: "5px",
    boxShadow: "0px 0px 0px 7px white"
  });

  styleElement(document.querySelector("#board"), {
    opacity: "0.2"
  });
  buttons.appendChild(playAgain);
  buttons.appendChild(quit);
  screen.appendChild(h1);
  screen.appendChild(p);
  screen.appendChild(buttons);
  document.body.appendChild(screen);
  playAgain.addEventListener("click", () => location.reload());
  quit.addEventListener("click", () => window.close());
};
