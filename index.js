document.addEventListener('DOMContentLoaded', () => {
  let menuButton = document.querySelector('.button1')
  let menuPreview = document.querySelector('.firstpage1blok')
  let menu = document.querySelector('.mainmenu')
  let portfolioButtons = document.querySelectorAll('.portfolioButton')
  let serviceButtons = document.querySelectorAll('.serviceButton')
  let serviceGradient = document.querySelector('.servicesGradient')
  let bottomServiceText = document.querySelector('.downstyle')
  let infoScript = document.querySelector('.descriptionButtonDesign')
  let infoStatic = document.querySelector('.pointpart1.service')
  let upStyle = document.querySelector('.upstyle.service')
  let buttonServiceMenu = document.querySelector('.button1.service')
  let boxesWithInfo = document.querySelectorAll('.box')
  let submitbutton = document.querySelector('.submitButton')
  let formTitle = document.querySelector('.formTitle')
  let form = document.querySelector('.form')
  let formScreen = document.querySelector('.firstscreen')

  const descriptionMap = {
    design: 'Уникальный дизайн повышает и попадает клиенту прямо в сердце',
    marketing: 'Стратегия в продвижении даст четкий план ключевых действий',
    content:
      'Креатив и захват внимания – главные инструменты успешного контента'
  }

  let statusMenu = 0
  let serviceStatus = 0

  function portfolioClick() {
    portfolioButtons.forEach((button) => {
      button.addEventListener('click', () => {
        button.classList.add('activeHypenlink')
        let textButton = button.querySelector('div')
        textButton.style.zIndex = '6'
        setTimeout(() => {
          window.open('https://exams2024.hsedesign.ru/designer/grinberg%20kris')
        }, 1000)
        setTimeout(() => {
          button.classList.remove('activeHypenlink')
          textButton.style.zIndex = '0'
        }, 1001)
      })
    })
  }

  function buttonAction() {
    menuButton.addEventListener('click', openMenu)
  }

  function openMenu() {
    if (statusMenu == 0) {
      menu.style.display = 'block'
      menu.style.animation = 'transparent 0.4s linear forwards'

      statusMenu = 1
    } else if (statusMenu == 1) {
      menu.style.animation = ''
      void menu.offsetWidth
      menu.style.animation = 'transparent 0.4s reverse forwards'
      setTimeout(() => {
        menu.style.display = 'none'
        statusMenu = 0
      }, 400)
    }
  }

  function serviceButton() {
    serviceButtons.forEach((button) => {
      button.addEventListener('click', () => {
        serviceButtons.forEach((btn) => {
          if (btn !== button) {
            btn.style.display = 'none'
          }
        })

        button.parentNode.prepend(button)

        let buttonText = button.innerText.toLowerCase() // Get button text
        let description = descriptionMap[buttonText]
        infoScript.innerText = description

        if (serviceStatus == 0) {
          serviceGradient.style.setProperty('--c', 'rgba(0, 0, 0, 0)')
          serviceGradient.style.setProperty('--b', 'rgba(0, 0, 0, 0)')
          button.style.backgroundColor = 'white'
          upStyle.classList.add('serviceButtonClicked')
          button.querySelector('h1').style.color = '#8B949E'
          button.querySelector('div').classList.add('listOpportClicked')
          bottomServiceText.style.display = 'none'
          buttonServiceMenu.classList.add('inverseButton')
          infoStatic.style.display = ''
          infoScript.style.display = ''
          serviceStatus = 1
        } else if (serviceStatus == 1) {
          serviceGradient.style.removeProperty('--c')
          serviceGradient.style.removeProperty('--b')
          serviceStatus = 0
          infoStatic.style.display = 'none'
          infoScript.style.display = 'none'
          buttonServiceMenu.classList.remove('inverseButton')
          upStyle.classList.remove('serviceButtonClicked')
          button.style.backgroundColor = ''
          button.querySelector('h1').style.color = ''
          button.querySelector('div').classList.remove('listOpportClicked')
          bottomServiceText.style.display = 'flex'
          serviceButtons.forEach((btn) => {
            btn.style.display = ''
          })
        }
      })
    })
  }

  function openInfoInBoxes() {
    boxesWithInfo.forEach((box) => {
      box.addEventListener('click', () => {
        box.querySelector('.inside').classList.toggle('displayNone')
        box.querySelector('h2').classList.toggle('displayBox')
      })
    })
  }

  function submitButton() {
    submitbutton.addEventListener('click', () => {
      formTitle.style.display = 'none'
      form.style.display = 'none'
      let lead = document.createElement('div')
      formScreen.appendChild(lead)
      lead.innerText = 'Благодарим, скоро  вам напишем'
      lead.classList.add('leadThankYou')
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
      }, 2000)
    })
  }

  buttonAction()
  portfolioClick()
  serviceButton()
  openInfoInBoxes()
  submitButton()
})
