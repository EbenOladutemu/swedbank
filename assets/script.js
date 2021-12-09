new Vue({
  el: '#app',
  data: {
    heading: 'hello',
    showForm: false,
    showField: false
  },
})

const form = document.querySelector('form');
const label = document.querySelectorAll('label')
// submit = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    let formLabels = [];
    let formValues = [];
    label.forEach(element => {
      formLabels.push(element.innerHTML);
    });
    for (const iterator of data.values()) {
      formValues.push(iterator);
    }
    console.log(...formLabels, ...formValues);
  })
// }

const span = document.getElementsByClassName('form-field')
prev = () => {
  console.log('Boo')
  for (let i = 0; i < span.length; i++) {
    const element = span[i];
    console.log(element);
  }
}
