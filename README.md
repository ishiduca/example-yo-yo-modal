# example-yo-yo-modal

examples of creating component with yo-yo. (modal component)

## usage

```js
var w = require('global/window')
var g = require('global/document')
var yo = require('yo-yo')
var css = require('sheetify')
var createModal = require('example-yo-yo-modal')

var prefix = css `
  :host {
    margin: 1.5em;
    padding: 1.5em;
    background-color: #ffffaa;
    border: 3px solid #aaaa77;
    border-radius : .8em;
  }
  :host>div {
    text-align : center;
  }
`

var modal = createModal(yo `
  <div class=${prefix}>
    <h3>Modal Title</h3>
    <p>modal message</p>
    <div><button onclick=${hide}</div>
  </div>
`)

var main = yo `
  <main>
    <h1>example yo-yo modal</h1>
    <section id="wrap-modal">${modal}</section>
    <div><button onclick=${toggle}>toggle</button>/div>
  </main>
`

d.body.appendChild(main)

function hide (e) {
  modal.hide()
}

function toggle (e) {
  modal.toggle()
}

```

## try example

$ npm run build && open example/index.html
