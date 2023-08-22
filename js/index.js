// for mobile nav
let menu = document.getElementById('menu')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

// For newsletters

const scriptURL = 'https://script.google.com/macros/s/AKfycbxMvfa9VtIQdGS9EXRZZYaUIrR5rc27YHCiWwOyVswEOGdyG9_TdNenC47Y1aWsd9E/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(res => {
        msg.innerHTML = 'Thank You For Subscribing'
        setTimeout(() => {
            msg.innerHTML = ''
        }, 5000)
        form.reset()
      })
      .catch(err => console.error('Error!', err.message))
  })
