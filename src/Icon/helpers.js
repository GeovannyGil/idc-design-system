const ICONS_ASSETS_PATH = '/icons'

export const iconMap = {
  loader: 'loader',
  warning: 'warning-circle',
  close: 'close',
  arrowRight: 'arrow-right',
  arrowLeft: 'arrow-left',
  arrowDown: 'arrow-down',
  arrowUp: 'arrow-up',
  dashboard: 'dashboard',
  user: 'user',
  business: 'business',
  report: 'report',
  config: 'config',
  chevronRight: 'chevron-right',
  chevronLeft: 'chevron-left',
  chevronDown: 'chevron-down',
  chevronUp: 'chevron-up',
  search: 'search',
  linkExternal: 'link-external',
  cake: 'cake',
  send: 'send'
}

export const mapIcon = (type) => `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`

export const mapSize = () => null // TODO: implement this
