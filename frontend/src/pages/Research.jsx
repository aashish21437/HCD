import React, { Component } from 'react'
import '../styles/research.css';
import Panel from '../components/researchPanel';
import Body from '../components/researchbody';

import di from '../assets/di.png'
import robo from '../assets/robo.png';

import vr from '../assets/vr.png';
import weave from '../assets/weave.png'

import midas from '../assets/midas.png';
import hands from '../assets/hands.png'

import living from '../assets/living.png';
import hci from '../assets/hci.png'

const arr = ['1','2','3','4']

function clicked(id){
    console.log('clicked')
    var panel = document.getElementById(id);
    var body = document.getElementById('body-section');
    for(var i = 0; i < arr.length; i++){
        if(arr[i]!== id){
            const hide = document.getElementById(arr[i]);
            hide.style="transition: opacity 0.2s; opacity: 0;"
        }
    }
    const x = document.getElementById('backBtn');
    x.hidden=false;
    panel.style='transition: transform ease-out 0.5s;transform: translateX(-'+(25*(parseInt(id)-1))+'vw);pointer-events: none;';
    body.style="transform: translateX(0);"
}

function back(){
    window.location.reload(false);
}
function Research(){

    return (
        <>
            <button className="font-Maven text-[#ffffff]" type="button" id='backBtn' hidden="true" onClick={()=>back()} >X</button>
            <div className="panelBody">
                <div id = '1' onClick={()=>clicked('1')}>
                    <Panel color='#39AEA8' logo={di} image={robo}/>
                </div>
                <div id='2' onClick={()=>clicked('2')}>
                    <Panel color='#F4B950' logo={weave} image={vr} />
                </div>
                <div id='3' onClick={()=>clicked('3')}>
                    <Panel color='#F28900' logo={midas} image={hands} />
                </div>
                <div id='4' onClick={()=>clicked('4')}>
                    <Panel color='#A4DAC3' logo={living} image={hci} />
                </div>
                <Body title='Human - Machine Interaction Lab' color='#39AEA8' info='Dr. Jainendra Shukla, A - 413' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tellus sapien, ullamcorper vel lorem at, volutpat eleifend orci. Proin sagittis tristique euismod. ' link='https://hmi.iiitd.edu.in/'/>
            </div>
        </>
    )
};

export default Research;