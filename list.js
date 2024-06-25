const input = document.getElementById('input');
const button = document.getElementById('button');
const placeholder = document.getElementById('placeholder');
const bin = document.getElementsByClassName('ri-delete-bin-line');

for(let i = 0; i < bin.length; i++) {
  bin[i].addEventListener('click', () => {
    console.log(this.bin[i]);
  });
}
button.addEventListener('click', () => {
  let value = input.value;
  if(value === '') {
    alert('Please enter a value');
  }
  else {
    let div = document.createElement('div');
    let para = document.createElement('p');
    para.textContent = value;
    let binIcon = document.createElement('i');
    binIcon.classList.add('ri-delete-bin-line');
    div.appendChild(para);
    div.appendChild(binIcon);

    binIcon.addEventListener('click', () => {
      placeholder.removeChild(div);
    });

    div.addEventListener('click', () => {
      div.classList.toggle('highlighted');
    });

    placeholder.appendChild(div);
    input.value = '';
  }
});

