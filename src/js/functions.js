export function addOpenerButtonHandler(
  button,
  content,
  hidingClass,
  buttonText
) {
  const openerButton = document.querySelector(button)
  const contentBlock = document.querySelector(content)
  let openState = false

  openerButton.addEventListener('click', function () {
    if (openState) {
      contentBlock.classList.add(hidingClass)
      openerButton.classList.remove('close-opener-bg')
      openerButton.textContent = buttonText
      openState = false
    } else {
      contentBlock.classList.remove(hidingClass)
      openerButton.classList.add('close-opener-bg')
      openerButton.textContent = 'Скрыть'
      openState = true
    }
  })
}

export function addPopupOpenerHandler(button, block, blockHider) {
  const mainContent = document.querySelector('.page-content')
  const openerButton = mainContent.querySelector(button)
  const popup = document.querySelector(block)
  const darken = document.querySelector('.popup-darken')

  openerButton.addEventListener('click', function () {
    popup.classList.remove(blockHider)
    darken.classList.remove('darken-hidden')
    document.body.style.overflow = 'hidden'
  })
}

export function addClosePopupHandler(button, block, blockHider) {
  const popup = document.querySelector(block)
  const darken = document.querySelector('.popup-darken')
  const closerButton = popup.querySelector(button)

  closerButton.addEventListener('click', function () {
    popup.classList.add(blockHider)
    darken.classList.add('darken-hidden')
    document.body.style.overflow = 'auto'
  })

  // TODO
  // closerButton.addEventListener("keydown", function(evt) {
  //   if (evt.key === "Escape") {
  //     popup.classList.add(blockHider);
  //     darken.classList.add("darken-hidden");
  //     document.body.style.overflow = "auto";
  //   }
  // })
}
