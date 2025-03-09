const form = document.getElementById("inputha");
form.addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();

  let nameval = e.target.tname.value;
  let password = e.target.password.value;
  let emailval = e.target.temali.value;

  if (nameval.length <= 0 || password.length <= 0 || emailval.length <= 0) {
    return;
  }

  const contact = {
    tname: nameval,
    password: password,
    temali: emailval,
  };
  e.target.tname.value = "";
  e.target.password.value = "";
  e.target.temali.value = "";
  e.target.remove();

  window.location.pathname = "/";

  svae(contact);
}

function svae(e) {
  // let use = [];
  // const saveUse = localStorage.getItem("profile");
  // if (saveUse) {
  //   use = JSON.parse(saveUse);
  // }
  // use.push(e);
  localStorage.setItem("profile", JSON.stringify(e));
  settings(e);
}
