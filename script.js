function sayHello() {
  const name = prompt("ما اسمك؟");
  if (name) {
    alert(`مرحبًا بك يا ${name}! سعيد بزيارتك.`);
  } else {
    alert("أهلاً بك في موقعي الاحترافي!");
  }
}

function submitForm(event) {
  event.preventDefault();
  alert("تم إرسال رسالتك بنجاح! شكراً لتواصلك.");
}
