export function addClass(el, newClassName) {
  if (hasClass(el, newClassName)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(newClassName)
  el.className = newClass.join(' ')
}

// reg:以className开头(^)或者(|)空白字符开头(\s)，以空白字符结束(\s)或者(|)以className结束($)
export function hasClass(el, newClassName) {
  let reg = new RegExp('(^|\\s)' + newClassName + '(\\s|$)')
  return reg.test(el.className)
}
