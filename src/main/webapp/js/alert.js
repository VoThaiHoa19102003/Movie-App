const cookieBox = document.querySelector(".wrapper_op"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {

  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
   
      }
    });
  });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);
