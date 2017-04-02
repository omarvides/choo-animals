var html = require('choo/html')

var animal = require('./animal')
var controls = require('./controls')
var footer = require('./footer')

module.exports = function (state, emit) {
  var type = state.params.type

  return html`
    <div class="container">
      <button onclick=${add}>click me</button>
      <div class="grass">
        ${state.animals.map(showAnimals)}
      </div>
      ${controls(emit)}
      ${footer()}
    </div>
  `

  function add () {
    emit('add')
  }

  function showAnimals (obj, i) {
    if (type === obj.type) { return animal(emit, obj, i) }
  }
}
