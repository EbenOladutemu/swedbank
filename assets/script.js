
new Vue({
  el: '#app',
  data: {
    heading: 'hello',
    showForm: false,
    showField: false,
    showResults: false,
    disabledPrev: true,
    disabledNext: true,
    formLabels: [],
    results: [],
    fieldIndex: 0,
    liveTabShow: 0,
    form: {
      status: '',
      employer: '',
      dob: '',
      reason: '',
      amount: '',
      duration: 0
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
    },
    getDuration(e) {
      this.form.duration = e.target.value;
    },
    submit() { 
      if (this.fieldIndex === 5 && this.form.duration == 0) {
        this.errorMessages.duration = true
      } else {
        console.log(Object.values(this.form))
        this.results = Object.values(this.form);
        this.showResults = true;
      }
    }
  },
  updated() {
    if (this.form.status !== '') {
      this.disabledNext = false
    }
    if (this.form.status === 'employed') {
      this.status.employed = true
      this.status.self = false
    } else if (this.form.status.includes('business')) {
      this.status.self = true;
      this.status.employed = false
    }
  },
  created() {
    // const label = document.querySelectorAll('label')
    // label.forEach(element => {
    //   console.log(element.innerHTML);
    //   this.formLabels.push(element.innerHTML);
    // });
    // console.log(this.formLabels)
  }
})


// const form = document.querySelector('form');
// const label = document.querySelectorAll('label')
// let formLabels = [];
// let formValues = [];

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const data = new FormData(form);
//   label.forEach(element => {
//     formLabels.push(element.innerHTML);
//   });
//   for (const iterator of data.values()) {
//     formValues.push(iterator);
//   }
//   console.log(...formLabels, ...formValues);
// })

