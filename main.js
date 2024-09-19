const list = document.querySelector('#task-item')
const addButton = document.getElementById("addButton");

/* Events */

document.getElementById("all").addEventListener("click",
  function () {
    fetch('https://jsonplaceholder.typicode.com/todos')

      .then((v) => v.json())
      .then((d) => showData(d))
      .catch((error) => console.log(error))

    function showData(status) {

      status.forEach(element => {

        const li = document.createElement('li')
        const span = document.createElement('span')
        const newCheckBox = document.createElement('input');

        newCheckBox.type = 'checkbox'
        span.textContent = element.title

        li.append(newCheckBox, span)
        list.append(li)
        list.innerHTML += `Id: ${element.id}`;
      })
      document.getElementById("section2").classList.remove("d-none");
      document.getElementById('completedSection').classList.add('visually-hidden')
      
    }return list.innerHTML=''
  })

document.getElementById("active").addEventListener("click",

  function () {

    fetch('https://jsonplaceholder.typicode.com/todos')

      .then((v) => v.json())
      .then((d) => showData(d))
      .catch((error) => console.log(error))

    function showData(status) {

      status.forEach(element => {

        if (element.completed === false) {
          const li = document.createElement('li')
          const span = document.createElement('span')
          const newCheckBox = document.createElement('input');

          newCheckBox.type = 'checkbox'
          span.textContent = element.title

          li.append(newCheckBox, span)
          list.append(li)
          list.innerHTML += `Id: ${element.id}`;

        }
      })
      document.getElementById("section2").classList.remove("d-none");
      document.getElementById('completedSection').classList.add('visually-hidden')
    }return list.innerHTML=''
  })

document.getElementById("completed").addEventListener("click",
  function () {

    fetch('https://jsonplaceholder.typicode.com/todos')

      .then((v) => v.json())
      .then((d) => showData(d))
      .catch((error) => console.log(error))

    function showData(status) {
      status.forEach(element => {

        if (element.completed === true) {
          const li = document.createElement('li')
          const span = document.createElement('span')
          
          span.textContent = element.title
          span.style.textDecoration = 'line-through';

          li.append(span)
          list.appendChild(li)
          list.innerHTML += `Id: ${element.id}`;
        
        }
      })
      document.getElementById("section2").classList.remove("d-none");
      document.getElementById('completedSection').classList.remove('visually-hidden')
      document.getElementById('searchBar').classList.add('visually-hidden')


      searchBar
    }return list.innerHTML=''
  });

addButton.addEventListener("mouseover", function () {
  this.classList.add("btn-dark");
});

addButton.addEventListener("mouseout", function () {
  this.classList.remove("btn-dark");
});

document.querySelectorAll('.completed-checkbox').forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    const taskText = this.parentElement.querySelector('.task-text');
    if (this.checked) {
      taskText.style.textDecoration = 'line-through';
    } else {
      taskText.style.textDecoration = 'none';
    }
  });
});
