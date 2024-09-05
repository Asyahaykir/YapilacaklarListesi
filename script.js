// Görevleri listeye eklemek için elementleri seç
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Görev ekleme butonuna tıklama olayını dinle
addTaskBtn.addEventListener("click", addTask);

// Görev ekleme fonksiyonu
function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText === "") {
    alert("Lütfen bir görev girin.");
    return;
  }

  // Yeni bir liste öğesi oluştur
  const li = document.createElement("li");
  li.textContent = taskText;

  // Sil butonu oluştur
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Sil";
  deleteBtn.addEventListener("click", function () {
    li.remove(); // Görevi sil
  });

  // Görevi tamamlandı olarak işaretleme
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Liste öğesine sil butonunu ekle
  li.appendChild(deleteBtn);

  // Görevi listeye ekle
  taskList.appendChild(li);

  // Giriş alanını temizle
  taskInput.value = "";
}
