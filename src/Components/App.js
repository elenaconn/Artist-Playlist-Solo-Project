// import React, { Component } from 'react';
import styled from 'styled-components';
import React, { useState } from 'react';
import Artist from './Artist';
import { useForm } from 'react-hook-form';

export const Grid = styled.div`
  border: 5px solid black;
  display: block;
  margin: auto;
  width: 50%;
  box-shadow: 2px 2px 7px 1px black;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 17px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #000000;
  font-weight: 400;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: none;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  text-align: center;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  border: 2px solid black;
  text-align: center;
`;


function App() {
    return (
      <div>
        <h1>Artist Playlist Tracker</h1>
        <Grid>
            <Row>
                <Col size={1}>
                    Artist
                </Col>
                <Col size={1}>
                    Song List
                </Col>
            </Row>
            <Row>
              <SongContainer/>
            </Row>
        </Grid>
      </div>
    );
};

function SongContainer() {

    const [Lucy, setLucy] = useState([]);
    const [Camille, setCamille] = useState([]);
    const [Sariah, setSariah] = useState([]);

    const [inputText, setInputText] = useState([]);
    
    const lucyArr = [];
    for (let i = 0; i < Lucy.length; i++){
      lucyArr.push(<ul>{Lucy[i]}</ul>)
    };

    return (
    <div>
      <Row>
        <Col size={1}>
          <ArtistName />
        </Col>
        <Col size={1}>
          {lucyArr}
          <br />
          <SongListForm setLucy={setLucy} inputText={inputText} setIT={setInputText}/>
        </Col>
      </Row>
    </div>
    )
};

function ArtistName() {
    const artists = ['Lucy', 'Camille', 'Sariah'];
    const artistArr = [];
    for (let i = 0; i < 3; i++){
      artistArr.push(
        <Artist name={artists[i]}/>
      )
    };

  return (
    <div className="Arist-Container">
      <ul className="Artist-List" key="al"></ul>
        {artistArr}
    </div>
  )
};


function SongListForm({setLucy, setIT, inputText}) {
    const {register, handleSubmit} = useForm();
    
    const onSubmit = (data) => {
      setLucy(oldArray => [...oldArray, `• ${data.setSong}\n`]);
      setIT('');
    };
    const textState = (e) => {
        console.log(e)
      setIT(e.target.value);
    }

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <fieldset>
            <label>
                <p>Add New Song Name</p>
                <input onChange={textState} value={inputText} autoComplete="off" name="setSong" type='text' ref={register}/>
            </label>
          </fieldset>
          <button type="submit">Add Song</button>
        </form>
      </div>
    )
};

export default App;