const ICONS_ASSETS_PATH = '/icons'

const iconMap = {
  loader: 'loader',
  warning: 'warning-circle',
  close: 'close'
}

export const mapIcon = (type) => `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`

export const mapSize = () => null // TODO: implement this
