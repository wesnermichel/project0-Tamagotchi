   let userTamagotchi;
   //here we are setting up the functions to getElements by Ids
   let hunger = document.getElementById("hunger");
   let sleep = document.getElementById("sleep");
   let bored = document.getElementById("bored");
   let age = document.getElementById("age");
   // I am creating this statment to say that I want the current Age to start off @ 1

   // Create a function to instantiate a new tamaogfdsajkfdh
   function createNewPet() {
    const  userInput = document.querySelector("#userInput"); 
    const name = userInput.value;

    userTamagotchi = {
      name: name,
      birthday: new Date()
    };

    let message = document.querySelector("#message"); //Now I want to capture the message

     message.innerText =
       " Sounds good! Introducing, your pet,  " + name;

      setTimeout(() =>{
        message.innerText = '';
      }, 5000);
   }

   function updateTamagotchiAge() {
    const ageInput = document.querySelector("#age"); 
      if (userTamagotchi == null ) {
        ageInput.textContent = 0; 
      } else {
        const age = Math.ceil((new Date() - userTamagotchi.birthday)/1000); /// age in secounds
        ageInput.textContent = age ?? 0;
      }
   }

   setInterval(updateTamagotchiAge, 1000);
