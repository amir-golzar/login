const editBtn = document.getElementById("editBtn");
const nameTag = document.getElementById("name");
const emailTag = document.getElementById("email");
const Cancel = document.getElementById("cancel");
const saveBtn = document.getElementById("saveBtn");
const deleteEcant = document.getElementById("deleteEcant");
const editpassword = document.getElementById("editPassword");

window.addEventListener("load", () => {
  // GET
});

function settings(contact) {
  nameTag.innerText = contact.tname;
  emailTag.innerText = contact.temali;

  editBtn.addEventListener("click", () => {
    nameTag.setAttribute("contenteditable", "true");
    nameTag.classList.add("aaaa");

    emailTag.setAttribute("contenteditable", "true");
    emailTag.classList.add("aaaa");

    editBtn.style.display = "none";
    Cancel.style.display = "block";
    saveBtn.style.display = "block";
  });

  Cancel.addEventListener("click", () => {
    nameTag.classList.remove("nametag");
    nameTag.setAttribute("contenteditable", "fals");
    nameTag.classList.remove("aaaa");
    emailTag.classList.remove("aaaa");

    emailTag.classList.remove("nametag");
    emailTag.setAttribute("contenteditable", "fals");

    Cancel.style.display = "none";
    editBtn.style.display = "block";
    saveBtn.style.display = "none";

    nameTag.innerText = contact.tname;
    emailTag.innerText = contact.temali;
  });

  saveBtn.addEventListener("click", (w) => {
    nameTag.classList.remove("nametag");
    nameTag.setAttribute("contenteditable", "fals");
    emailTag.classList.remove("nametag");
    emailTag.setAttribute("contenteditable", "fals");

    Cancel.style.display = "none";
    editBtn.style.display = "block";
    saveBtn.style.display = "none";

    nameTag.classList.remove("aaaa");
    emailTag.classList.remove("aaaa");

    contact.tname = nameTag.innerText;
    contact.temali = emailTag.innerText;

    localStorage.setItem("profile", JSON.stringify(contact));
  });

  deleteEcant.addEventListener("click", function (e) {
    localStorage.removeItem("profile", JSON.stringify(e));
    // contactTag.remove();
    // formsave();
    window.location.pathname = "/login.html";
  });

  editpassword.addEventListener("click", function editt(w) {
    const form = document.createElement("form");
    form.id = "inputha";
    // form.addEventListener("submit", submitForm);
    form.innerText = "editng password...";
    form.classList.add("form-edit");
    const oldpass = document.createElement("input");
    oldpass.classList.add("inp");
    oldpass.setAttribute("placeholder", "oldpassword...");
    oldpass.setAttribute("name", "oldpassword");
    oldpass.setAttribute("type", "text");
    const newpass = document.createElement("input");
    newpass.classList.add("inp");
    newpass.setAttribute("placeholder", "newpassword...");
    newpass.setAttribute("name", "newpassword");
    newpass.setAttribute("type", "text");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    document.body.appendChild(form);
    form.appendChild(oldpass);
    form.appendChild(newpass);

    document.body.appendChild(overlay);

    overlay.addEventListener("click", function () {
      overlay.style.display = "none";
      form.style.display = "none";
    });
    const savepass = document.createElement("button");
    savepass.innerText = "save";
    form.appendChild(savepass);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      /*    let oldP = e.target.oldpassword.value;
      let newP = e.target.newpassword.value;
      if (oldP.length <= 0 || newP.length <= 0) {
        alert("fuck you");
        return;
      }
      if (oldP !== contact.password) {
        alert("کصکش وقتی پسورد رو بلد نیستی گوه میخوری میخوای عوض کنی");
        return;
      }
      contact.password = newP;
      localStorage.setItem("profile", JSON.stringify(contact));
      overlay.style.display = "none";
      form.style.display = "none";*/
      //post
   
    });
  });
}

function submitForm(e) {
  e.preventDefault();

  let nameval = e.target.tname.value;
  let password = e.target.password.value;
  let emailval = e.target.temali.value;

  if (nameval.length <= 0 || password.length <= 0 || emailval.length <= 0) {
    alert("hello");
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

  svae(contact);
}
