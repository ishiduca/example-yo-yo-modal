var w = require('global/window')
var d = require('global/document')
var css = require('sheetify')
var yo = require('yo-yo')
var create = require('../modal')

var prefix = css `
  :host {
    padding: 1.5em;
    margin: 1.5em;
    background-color: #ffffaa;
    border: 3px solid #aaaa77;
    border-radius: .8em;
  }
  :host>div {
    text-align : center;
  }
`
var content = yo `
  <div class=${prefix}>
    <h3>Hi, ishiduca</h3>
    <p>:(</p>
    <div><button onclick=${ev => {
      if (w.confirm('toggle ok ?')) {
        modal.hide()
      }
    }}>close</button></div>
  </div>
`

var modal = create()

var main = yo `
  <main>
    <h1>example yo-yo modal</h1>
    <section>${modal}</section>
    <div>
      <button onclick=${onclick}>open</button>
    </div>
  </main>
`

d.body.appendChild(main)

function onclick (e) {
  modal.toggle(content)
}
