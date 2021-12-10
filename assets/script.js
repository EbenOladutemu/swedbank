
new Vue({
  el: '#app',
  data: {
    heading: 'hello',
    showForm: false,
    showField: false,
    disabledPrev: true,
    disabledNext: true,
    fields: [],
    fieldIndex: 0,
    liveTabShow: 0,
    form: {
      status: '',
      employer: '',
      dob: '',
      reason: '',
      amount: '',
      duration: ''
    },
    status: {
      employed: false,
      self: false
    },
    errorMessages: {
      employer: false,
      dob: false,
      reason: false,
      amount: false,
      duration: false
    }
  },
  methods: {
    
  },
  updated() {
    if (this.form.status !== '') {
      this.disabledNext = false
    }
    if (this.form.status === 'employed') {
      this.status.employed = true
    } else if (this.form.status === 'self') {
      this.status.self = true;
    }
  },
  created() {
  }
})


const form = document.querySelector('form');
const label = document.querySelectorAll('label')
let formLabels = [];
let formValues = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  label.forEach(element => {
    formLabels.push(element.innerHTML);
  });
  for (const iterator of data.values()) {
    formValues.push(iterator);
  }
  console.log(...formLabels, ...formValues);
})

