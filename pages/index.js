import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import 'firebase/auth'

export default function Home() {
    initializeApp({
      apiKey: "AIzaSyBwcFFGN83oBm0LlZgR5qsA2mIoEkcv7Wk",
      authDomain: "fir-adb93.firebaseapp.com",
      projectId: "fir-adb93",
      storageBucket: "fir-adb93.appspot.com",
      messagingSenderId: "359501769209",
      appId: "1:359501769209:web:43b3ff0f4ef66bbdd5b528",
      measurementId: "G-K95M8H4Y0R"
  })
  const auth = getAuth()
   const onSubmit = () => {
    // var recaptcha = new RecaptchaVerifier('recaptcha', {
    //   'size': 'invisible',
    //   'callback': (response) => {
    //     console.log({response});
    //   }
    // }, auth);
    // console.log(recaptcha);



    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
      'size': 'normal',
      'callback': function async (recapchaToken) {
        console.log(2000);
        console.log({recapchaToken});

        // request.post({
        //   url: 'https://your-rest-api',
        //   body: {
        //     phoneNumber: document.getElementById('phoneNumber').value,
        //     recapchaToken,
        //   }
        // });


      }
    }, auth);
    // console.log(window.recaptchaVerifier);








   }


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div id="recaptcha"></div>
        <h1 align="center" >Hello World!</h1>

      <button onClick={onSubmit}>On Submit</button>
      </main>

      <footer className={styles.footer}>
        Footer
      </footer>
    </div>
  )
}
