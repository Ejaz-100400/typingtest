import React from 'react';
import Logic from './Logic/Logic';
export default function Form(){

    const{textref,runtimer,timer,handlewords,startagain,wordcount}=Logic()
   
    return(
        <div className="form-sec text-light text-center d-flex flex-column ">
            <section className="form-panel  text-center d-flex flex-column ">
                <h3>Wanna check how fast do you type?</h3>
                <h3>Type the given words within seconds</h3>
                <form action="d-grid text-center">
                    <textarea  
                    placeholder="Start Typing.."
                    id='textarea' 
                    className="mt-4 p-4"
                    ref={textref}
                    disabled={!runtimer}
                    onChange={handlewords}
                     />
                    <div className='btn-sec d-flex justify-content-center'>
                        <input 
                        type="submit" 
                        className="submit-game btn btn-primary mt-3 p-3"
                        onClick={startagain}
                        disabled={runtimer?timer==0?false:true:false}
                        value='Start'/>
                    </div>
                    {/* ()=>console.log(calculateword(word)) */}
                </form>
                <div className='para container mt-5  w-50 p-4'>
                {/* <p className='refer-par' id='para'></p> */}
                </div>
                <div className='result container mt-4'>
                    <span className='m-3'>Score:<span className='p-2'>{wordcount}</span></span>
                    <span className='m-3'>Time Left:<span className='p-2'>{timer}</span></span>
                </div>
            </section>   
        </div>
    )
}