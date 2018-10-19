let indexTime = time => {
  let t = new Date(time)
  return t.getUTCFullYear() + '/' + (t.getMonth() + 1) + '/' + t.getDate()
}

let postTime = time => {
  let t = new Date(time)
  let click = (String(t)).match(/\d+:\d+/)[0]
  return t.getUTCFullYear() + '/' + (t.getMonth() + 1) + '/' + t.getDate() + ' ' + click
}

export {
  indexTime, postTime
}
