window.onload=function(){
  intext.focus()
}
let Add = document.getElementById('save');
let intext = document.getElementById('text');
Add.onclick = function () {
  if (intext.value.length == 0) {
    alert('inter text ');
  } else {
    document.querySelector('.tsks').innerHTML += `
        <div class="task">
  <span id="taskName">
    ${intext.value}
  </span><button class="delete"><i class="fa-solid fa-trash"></i></button>
</div>
        `;
  }
  var delet = document.querySelectorAll('.delete');
  for (var i = 0; i < delet.length; i++) {
    delet[i].onclick = function () {
      this.parentNode.remove();
    };
  }
  var completed = document.querySelectorAll('.task');
  for (var i = 0; i < completed.length; i++) {
    completed[i].onclick = function () {
      this.classList.toggle('completed');
    };
  }
  intext.value = '';
};
