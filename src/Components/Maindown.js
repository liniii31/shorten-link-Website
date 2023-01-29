import './Maindown.css';
import { useState } from 'react';
import axios from 'axios';

function Maindown() {
    let [link, setLink] = useState("");
    let [shortlink, setShortLink] = useState([])
    async function Shorten(e) {
        e.preventDefault();
        if (link === "") {
            document.getElementsByClassName('error')[0].style.display = "block";
            document.getElementById('link').style.border = "3px solid red";
            document.getElementsByClassName('search-result')[0].style.display = "none";
            setShortLink([]);

        } else {
            setShortLink([]);
            document.getElementsByClassName('error')[0].style.display = "none";
            document.getElementById('link').style.border = "none";
            let res = await axios.post('https://api.shrtco.de/v2/shorten?url=' + link);
            setShortLink([res.data.result.full_short_link,res.data.result.full_short_link2,res.data.result.full_short_link3]) ;
            document.getElementsByClassName('search-result')[0].style.display = "block";
        }
    }
    function handleLink(e) {
        setLink(e.target.value);
    }
    function Copy(e){

    }
    return (
        <div className='main-down'>
            <div className='search'>
                <form>
                    <input id="link" placeholder='Shorten a link here...' onChange={e => handleLink(e)} />
                    <button className='search-btn' onClick={e => Shorten(e)}>Shorten link!</button>
                    <div className='error'>Please add a link</div>
                </form>
            </div>
            <div className='search-result'>
            { shortlink.map((value,index) =>
                        <div className='result' key={index}>
                            <p>Short Link { index+1 }</p>
                            <p>{value}</p>
                            <p><button className='copy' onClick={e=>Copy(e)}>Copy</button></p>
                        </div>
            )}
            </div>
            <div className='main-down-container'>
                <div className='main-down-heading'>
                    Advanced Statistics
                </div>
                <div className='main-down-para'>
                    Track how your links are performing accross the web with <br /> our advanced statistics dashboard
                </div>
                <div className='main-down-cards'>
                    <div id="card-1" className='card'>
                        <div className='icon'>
                            <div className='icon-img-1'></div>

                        </div>
                        <div className='card-heading'>Brand Recognition</div>
                        <div className='card-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    </div>
                    <div id="card-2" className='card'>
                        <div className='icon'>
                            <div className='icon-img-2'></div>

                        </div>
                        <div className='card-heading'>Detailed Records</div>
                        <div className='card-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    </div>
                    <div id="card-3" className='card'>
                        <div className='icon'>
                            <div className='icon-img-3'></div>

                        </div>
                        <div className='card-heading'>Fully Customizable</div>
                        <div className='card-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    </div>
                </div>
                <div className='line'></div>
            </div>
        </div>
    )
}

export default Maindown; 