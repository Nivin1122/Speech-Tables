window.onload =()=>{
    let text_button1 = document.querySelector('#btn1')
    let speech_button2 = document.querySelector('#btn2')
    let input = document.querySelector('#inputs')
    let in_space = document.querySelector('.div2')

    text_button1.onclick = ()=>{
        in_space.innerHTML = ""
        for (let i=1; i<11; i++){
            var text = `<p>${input.value} X ${i} = ${input.value*i}</p>`
            in_space.innerHTML += text
        }
    }

    speech_button2.onclick = ()=> {
    //   alert("hi")
      let values = input.value;
      let start = `hlo i am Nivin. reading tables of ${values}.            ${values} ones are ${values*1}.           ${values} twos are ${values*2}.       ${values} threes are ${values*3}.         ${values} forus are ${values*4}.        ${values} fives are ${values * 5}.          ${values} six are ${values*6}.         ${values} seven are ${values*7}.       ${values} eights are ${values*8}.      ${values} nines are ${values*9}.      ${values} tens are ${values*10}`
    //   responsivevoice.speak(start);
      const utterance = new SpeechSynthesisUtterance(start);
      speechSynthesis.speak(utterance)
    };
}