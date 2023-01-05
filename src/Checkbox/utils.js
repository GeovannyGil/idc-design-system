export const CHECKBOX_STATES = {
  Checked: 'Checked',
  Indeterminate: 'Indeterminate',
  Empty: 'Empty'
}

export const parseValueCheckbox = (value, reverse) => {
  let updatedChecked
  if (!reverse) {
    if (value === 0 || value === false) {
      updatedChecked = CHECKBOX_STATES.Empty
    } else if (value === 1 || value === true) {
      updatedChecked = CHECKBOX_STATES.Checked
    } else if (value === -1 || value === null) {
      updatedChecked = CHECKBOX_STATES.Indeterminate
    }
  } else {
    if (value === CHECKBOX_STATES.Empty) {
      updatedChecked = 0
    } else if (value === CHECKBOX_STATES.Checked) {
      updatedChecked = 1
    } else if (value === CHECKBOX_STATES.Indeterminate) {
      updatedChecked = -1
    }
  }
  return updatedChecked
}
