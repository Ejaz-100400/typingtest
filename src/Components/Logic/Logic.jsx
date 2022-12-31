import React from "react"
// Creating a custom hook
function Logic(){
   // states for no of words ,timer and handling the run timer
    
   const[word,setword]=React.useState('')
   const[wordcount,setwordcount]=React.useState(0);
   const[timer,settimer]=React.useState(10);
   const[runtimer,setruntimer]=React.useState(false);
   // text box reference
   const textref=React.useRef(null);


   // fetching random word api
   // React.useEffect(() => {
   //     fetch('https://api.adviceslip.com/advice')
   //     .then(response => response.json())
   //     .then(data=>document.getElementById('para').innerText=data.slip.advice)
       
   // },[runtimer])

    // calculate the no of words
    function calculateword(text){
       const word=text.trim().split(" ")
       return word.filter((word)=>word!=='').length
   } 
   //  setting timer 
   React.useEffect(() => {
           if (timer > 0 && runtimer) {
               setTimeout(() => {
                   settimer(time => time - 1);
                   
               }, 1000);
           }
           if(timer == 0) {
             endgame();
           }
       }, [timer,runtimer]);
   
   // handling words in the textarea
   function handlewords(e){
       const {value}=e.target;
       setword(value)
   }
   // to resolve bug in starting again btn
   function startagain(e){
       e.preventDefault()
       setruntimer(true)
       settimer(10)
       document.getElementById('textarea').value = '';
       setwordcount(0)
       textref.current.disabled=false;
       textref.current.focus()
   }
   function endgame(){
       settimer(false)
       // gets total no of words
       const wordcount = calculateword(word)
       setwordcount(wordcount);
       textref.current.disabled=true
   }

   return{textref,runtimer,timer,handlewords,startagain,wordcount}
}

export default Logic
