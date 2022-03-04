import React, { useEffect, useState } from 'react'
import Header from '../../components/header'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css'

type Props = {}

const Landing = (props: Props) => {
    const [placeholder, setPlaceholder] = useState('What are your interests, hobbies, favorite foods...')
    const [interest, setInterest] = useState("");
    const [interests, setInterests] = useState([]) as any;

    useEffect(() => {
        // createInterest()
    }, [])

    function createInterest() {
        setPlaceholder("");

        var tag : string[] = interest.split(',')

        if(tag.length > 1) {
            if(interests.length >= 10) {
                toast.error('🚫 You cannot add more than 10 interests', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                return false;
            }

            interests.push(tag[0])
            setInterest("")

            var id = interests.length - 2
            var color = '#' + Math.floor(Math.random() * 16777215).toString(16)
            // ["antiquewhite", "bisque", "burlywood", "thistle", "tan", "slategray"][Math.floor(Math.random() * 10)];

            document.getElementById(id.toString())!.style.color = color;
            document.getElementById(id.toString())!.style.backgroundColor = color;
            
        }

        // console.log(interests)
        // console.log(interest)

    }

    return (
    <div>
        <Header />
        <div className='main-div'>
            <div className='main-content'>
                <h3>Send a message to anyone in the world!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, asperiores voluptas nisi eos, sed ipsa maxime amet vitae, corporis reiciendis commodi. Soluta, qui laborum laudantium error quidem doloribus ex adipisci.</p>

                <div className='send-message'>
                    <input type="text" placeholder='Type your message'/>

                    <button>Send message 🕊</button>
                </div>

                <div className='message-interests'>
                    {interests.map((interest: any, index: any) => {
                        return (
                            <div key={index} id={index} className='interest-tag'>
                                <h4>{interest}</h4>
                            </div>
                        )
                    })}
                    <div className='search-interests'>
                        <input type="text" value={interest} onChange={ event => {setInterest(event.target.value); createInterest()}} placeholder={placeholder} />
                    </div>

                    
                </div>
            </div>
        </div>

        <ToastContainer />
    </div>
    )
}

export default Landing