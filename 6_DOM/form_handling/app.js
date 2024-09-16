const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  // prevent the default form submission
  event.preventDefault();

  // get the form data
  const formData = new FormData(form);
  const name = formData.get("name");
  const password = formData.get("password");
  const email = formData.get("email");

  const name2 = document.getElementById("name").value;
  console.log("Name2:", name2);

  // do something with the form data
  console.log(`Name:${name}`);
  console.log(`Password:${password}`);
  console.log(`Email:${email}`);
  alert(
    "hello " + name + " your email is " + email + " and password is " + password
  );
  form.reset();
});
