import { colors } from '../tokens'

export const FILE_TYPES = {
  pdf: 'Pdf',
  jpg: 'Image',
  jpeg: 'Image',
  png: 'Image',
  gif: 'Image',
  svg: 'Image',
  doc: 'Doc',
  docx: 'Doc',
  xls: 'Doc',
  xlsx: 'Doc',
  ppt: 'Doc',
  pptx: 'Doc',
  txt: 'Doc',
  zip: 'Compressed',
  rar: 'Compressed',
  '7z': 'Compressed'
}

export const propertyTypes = {
  Image: {
    type: 'image',
    color: colors.alternative[500]
  },
  Pdf: {
    type: 'pdf',
    color: colors.danger[500]
  },
  Doc: {
    type: 'doc',
    color: colors.primary[300]
  },
  Compressed: {
    type: 'compressed',
    color: colors.neutral[400]
  },
  Blank: {
    type: 'blank',
    color: colors.neutral[600]
  }
}
