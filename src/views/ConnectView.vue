<template>
    <section class="connect-wrapper">
        <h3 class="section-title">Let's Connect!</h3>
        <p class="connect-blurb">Fill out the form below and I'll get back to you as soon as possible. I'm also active on Instagram and Linkedin, and we can get in touch there!</p>
        <div class="contact-card">
            <input v-model="emailData.name" type="text" id="name" placeholder="Name">
            <input v-model="emailData.email" type="text" id="email" placeholder="Email">
            <textarea v-model="emailData.bodyText" type="text" id="message" placeholder="Write a message"></textarea>
            <br>
            <a class="btn btn-primary" id="submit" @click="SendEmail()">Submit</a>
        </div>
    </section>
</template>

<script>
  import axios from 'axios';
  export default {
    data(){
      return{
        emailData:{
          name: "",
          email: "",
          bodyText: ""
        }
      }
    },
    methods:{
        SendEmail(){
            axios.post('https://2kg9xnhcic.execute-api.us-east-2.amazonaws.com/Prod/sendemail', this.emailData).then(
                response => {
                    console.log(response)
                    alert("Email sent")
                }
            ).catch(err => {
                connsole.log(err)
                alert("Email failed")
            })
        }
    }
  }

</script>

<style scoped>
    .connect-wrapper {
        padding-bottom: 5em;
        background-color: var(--clr-background);
    }

    .contact-card {
        background-color: var(--clr-primary);
        text-align: center;
        color: var(--clr-text);
        border-radius: 1em;
        display: grid;
        grid-template-columns: 1fr;
    }

    .connect-blurb {
        text-align: center;
        margin: 0 auto 0 auto;
    }

    h3 {
        padding-top: 1em;
    }

    input {
        height: 3em;
        font-size: 16px;
        padding: 5px;
    }

    #message {
        height: 10em;
        font-size: 16px;
        padding: 5px;
        font-family: 'Raleway', sans-serif;
    }

    #submit {
        max-width: 8em;
        justify-self: center;
    }

    #submit:hover {
        background-color: hsla(168, 100%, 1%, 0.6);
    }

    @media screen and (min-width: 800px) {
        p {
            margin: 1em 20em 1em 20em;
            font-size: 18px;
        }

        .contact-card {
            margin: 2em 25em 0 25em;
            padding-top: 5em;
        }

        .connect-blurb {
            width: 25em;
            text-align: center;
            margin: 0 auto 0 auto;
        }

        #submit {
            margin: 2em 0 3em 0;
        }

        input {
            margin: 1em 5em 1em 5em;
        }

        #message {
            margin: 1em 5em 1em 5em;
        }
    }

    @media screen and (max-width: 799px) {
        p {
            width: 50%;
        }
        .contact-card {
            margin: 2em 2em 0 2em;
            padding-top: 2em;
        }

        input {
            margin: 1em 3em 1em 3em;
        }
        
        #message {
            margin: 1em 3em 1em 3em;
        }

        #submit {
            margin: 0 0 2em 0;
        }
    }
    
</style>