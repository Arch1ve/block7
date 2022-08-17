import { addPopupOpenerHandler } from '../../js/functions'

addPopupOpenerHandler(
  '.nav__button--burger',
  '.mobile-menu',
  'mobile-menu-hidden'
)

addPopupOpenerHandler('.nav__button--repair', '.modal-feedback', 'modal-hidden')

addPopupOpenerHandler('.nav__button--status', '.modal-call', 'modal-hidden')
