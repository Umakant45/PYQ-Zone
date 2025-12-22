function chooseCompany(company) {
  localStorage.setItem("company", company);
  window.location.href = "categories.html";
}

function chooseCategory(category) {
  localStorage.setItem("category", category);
  window.location.href = "questions.html";
}

function goBack() {
  window.history.back();
}

// Load PDF on questions page
if (window.location.pathname.includes("questions.html")) {

  const company = localStorage.getItem("company");
  const category = localStorage.getItem("category");

  document.getElementById("heading").innerText =
    company.toUpperCase() + " - " + category.toUpperCase();

  const pdfPath = `pdfs/${company}/${category}.pdf`;

  document.getElementById("questions").innerHTML = `
    <iframe src="${pdfPath}" width="100%" height="650"></iframe>
  `;
}
