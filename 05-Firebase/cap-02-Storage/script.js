
  const firebaseConfig = {
    apiKey: "AIzaSyBZ9N0urlVhlsJLHhw8kVS5nU1fa6VWOvs",
    authDomain: "novastorage-5f85b.firebaseapp.com",
    projectId: "novastorage-5f85b",
    storageBucket: "novastorage-5f85b.appspot.com",
    messagingSenderId: "218021944333",
    appId: "1:218021944333:web:c8d184952006d5a01d0944"
  };

  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage();

  const ref = storage.ref("/images");

  ref.listAll().then(res =>{
      console.log(res)
      res.items[0].getDownloadURL().then(url=>{
          console.log(url)
      }
      )

      res.items[0].listAll().then(res=>{
          console.log(res)
      })

  })

const refDois = storage.ref("ltower.jpg");

// child de uma imagem dentro da pasta
// const fileRef = ref.child("img.jpg")

// pai de uma imagem uma pasta acima
// const fileParent = fileRef.parent.parent.child("img.jpg");

// leva para a pasta raiz
// ref.root.child("img.jpg")

refDois.getDownloadURL().then(url=>{
    console.log(url)
})

// Upload

const fileInput = document.getElementById("fileInput")

fileInput.addEventListener("change", (e)=>{
    const file = e.target.files[0]

    console.log(file)

    ref.child(file.name).put(file).then((snapshot) => {
        console.log(snapshot)
    })
})
