import React from 'react'
import { Attachments } from './Attachments'

export default {
  title: 'Component/Attachments',
  component: Attachments
}

const Template = (args) => <Attachments {...args} />

export const Directory = Template.bind({})

Directory.args = {
  type: 'directory',
  name: 'Nombre de la carpeta',
  description: 'Descripción de la carpeta',
  to: '/directory'
}

export const FileImage = Template.bind({})

FileImage.args = {
  type: 'file',
  name: 'Nombre del archivo',
  description: 'Descripción del archivo',
  src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
}

export const FilePdf = Template.bind({})

FilePdf.args = {
  type: 'file',
  name: 'Nombre del archivo',
  description: 'Descripción del archivo',
  src: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
}

export const FileDoc = Template.bind({})
FileDoc.args = {
  type: 'file',
  name: 'Nombre del archivo',
  description: 'Descripción del archivo',
  src: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.docx'
}

export const FileCompressed = Template.bind({})

FileCompressed.args = {
  type: 'file',
  name: 'Nombre del archivo',
  description: 'Descripción del archivo',
  src: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.zip'
}

export const FileBlank = Template.bind({})

FileBlank.args = {
  type: 'file',
  name: 'Nombre del archivo',
  description: 'Descripción del archivo',
  src: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.json'
}
