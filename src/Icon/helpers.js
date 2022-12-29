const ICONS_ASSETS_PATH = '/icons'

export const iconMap = {
  loader: 'loader',
  warning: 'warning-circle',
  close: 'close',
  arrowRight: 'arrow-right',
  arrowLeft: 'arrow-left',
  arrowDown: 'arrow-down',
  arrowUp: 'arrow-up'
}

export const mapIcon = (type) => `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`

export const mapSize = () => null // TODO: implement this
