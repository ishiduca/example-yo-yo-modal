var d = require('global/document')
var yo = require('yo-yo')
var css = require('sheetify')
var onload = require('on-load')

var prefix = css `
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(0, 0, 0, .8);
  }
`

module.exports = function createModal (content) {
  var modal = render(content)
  modal.hide = hide
  modal.show = show
  modal.toggle = toggle
  return modal

  function show (newContent) {
    if (newContent) content = newContent
    modal = yo.update(modal, render(content))
  }

  function hide () {
    modal = yo.update(modal, d.createTextNode(''))
  }

  function toggle (newContent) {
    if (!modal || modal.nodeName === '#text') {
      show(newContent)
    } else {
      hide()
    }
  }

  function click (e) {
    var m = e.target
    if (m === modal) {
      hide()
      return true
    }
  }

  function render (content) {
    if (content == null) return d.createTextNode('')

    var modal = yo `<div role="dialog" class=${prefix}>${content}</div>`
    onload(modal, m => {
      d.addEventListener('mousedown', click, false)
    }, m => {
      d.removeEventListener('mousedown', click, false)
    })

    return modal
  }
}
