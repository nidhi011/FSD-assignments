function home(){
  const element= document.getElementById("home");
  element.scrollIntoView({
    behavior: "smooth"
  });
}

function about(){
  const element=document.getElementById("about");
  element.scrollIntoView({
    behavior: "smooth"
  });
}

function skills(){
  const element = document.getElementById('skills');
  element.scrollIntoView({
    behavior: "smooth"
  });
}


function projects(){
  const element = document.getElementById("projects");
  element.scrollIntoView({
    behavior: "smooth"
  });
}

function contact(){
  const element = document.getElementById("contact");
  element.scrollIntoView({
    behavior: "smooth"
  });
}

function togglemode() {
  const body = document.body;
  body.classList.toggle("light-mode");
}
  