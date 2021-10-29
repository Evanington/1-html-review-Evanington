const SomeApp = {
    data() {
      return {
        offers: {},
        offerForm: {}
      }
    },
    computed: {},
    methods: {
        prettyData(d) {
            return dayjs(d)
            .format('D MMM YYYY')
        },
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
                fetchStudentData() {
            fetch('/api/book/index.php')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.offers = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        postOffer(evt) {
          if (this.selectedOffer === null) {
              this.postNewOffer(evt);
          } 
          else {
              this.postEditOffer(evt);
          }
        },
       postNewOffer(evt) {
            fetch('api/book/create.php', {
            method:'POST',
            body: JSON.stringify(this.offerForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.offers = json;
           // reset the form
           this.resetOfferForm();

          })
  
          .catch( err => {
            alert("Please fill the requirements!");
          });
      },
  
      postEditOffer(evt) {
        // this.offerForm.studentId = this.selectedStudent.id;
        this.offerForm.id = this.selectedOffer.id;
  
        // console.log("Updating!", this.offerForm);
  
        fetch('api/book/update.php', {
            method:'POST',
            body: JSON.stringify(this.offerForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.offers = json;
  
            // reset the form
            this.resetOfferForm();
          });
      },
  
      postDeleteOffer(o) {
        if (!confirm("Are you sure you want to delete the offer from "+o.id+"?")) {
          return;
        }
        console.log("Delete!", o);
  
        fetch('api/book/delete.php', {
            method:'POST',
            body: JSON.stringify(o),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.offers = json;
  
            // reset the form
            this.resetOfferForm();
          });
      },
  
      selectOfferToEdit(o) {
          this.selectedOffer = o;
          this.offerForm = Object.assign({}, this.selectedOffer);
      },
  
      resetOfferForm() {
          this.selectedOffer = null;
          this.offerForm = {};
        }
  
      },

    created() {
        this.fetchStudentData();
    }
  
  }
  
  Vue.createApp(SomeApp).mount('#offerApp');