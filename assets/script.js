
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
    next() {
      if (this.fieldIndex === 1 && this.form.employer.length === 0) {
        this.errorMessages.employer = true
      } else if (this.fieldIndex === 2 && this.form.dob.length === 0) {
        this.errorMessages.dob = true
      } else if (this.fieldIndex === 3 && this.form.reason.length === 0) {
        this.errorMessages.reason = true
      } else if (this.fieldIndex === 4 && this.form.amount.length === 0) {
        this.errorMessages.amount = true
      } else if (this.fieldIndex === 5 && this.form.duration.length === 0) {
        this.errorMessages.duration = true
      } else {
        this.fieldIndex++
        this.disabledPrev = false
        this.errorMessages.employer = false
        this.errorMessages.dob = false
        this.errorMessages.reason = false
        this.errorMessages.amount = false
        this.errorMessages.duration = false
      }
    },
    prev(){
      this.fieldIndex--
    }
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

