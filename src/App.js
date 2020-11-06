import React, {useState} from 'react';
import './App.css';
import Chip from "./components/Chip/Chip";
import Icon from "./components/Icon/Icon";


function App() {
    const [selectedHobbies, setSelectedHobbies] = useState({skate_boarding: true});
    const handleHobbyClick = (hobby) => {
        setSelectedHobbies({...selectedHobbies, [hobby]: !selectedHobbies[hobby]});
    };
    return (
        <div className="App">
            <div className="container">
                <div className='title-container'>
                    <h1>Beautiful Chips, Awesome use!</h1>
                </div>
                <div className="list-cards">
                    <div className="card">
                        <h1 className='title'>Beautiful chips example</h1>
                        <div className='subtitle'>This example shows how to use the react-beautiful-chips</div>
                        <img
                            src="https://images.unsplash.com/photo-1570357324388-bb51d0f1a636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80"
                            alt=""/>
                        <div className="list-chips">
                            <Chip text='#city'/>
                            <Chip text='#architecture'/>
                            <Chip text='#building'/>
                        </div>
                    </div>
                    <div className="card">
                        <h1 className='title'>Form example</h1>
                        <div className='subtitle'>This example shows how to use the react-beautiful-chips with forms
                        </div>
                        <div className='form-group'>
                            <label>Name</label>
                            <input placeholder='Enter your name'/>
                        </div>
                        <div className='form-group'>
                            <label>Hobbies</label>
                            <div className="list-chips">
                                <Chip text='Skate boarding' isSelected={selectedHobbies['skate_boarding']}
                                      onClick={() => setSelectedHobbies({
                                          ...selectedHobbies,
                                          skate_boarding: !selectedHobbies.skate_boarding
                                      })}/>
                                <Chip text='Video games' isSelected={selectedHobbies['video_games']}
                                      onClick={() => handleHobbyClick('video_games')}/>
                                <Chip text='Travel' isSelected={selectedHobbies['travel']}
                                      onClick={() => handleHobbyClick('travel')}/>
                                <Chip text='Programming' isSelected={selectedHobbies['programming']}
                                      onClick={() => handleHobbyClick('programming')}/>
                                <Chip text='Snow board' isSelected={selectedHobbies['snow_boarding']}
                                      onClick={() => handleHobbyClick('snow_boarding')}/>
                                <Chip text='Surf' isSelected={selectedHobbies['surf']}
                                      onClick={() => handleHobbyClick('surf')}/>
                                <Chip text='Wine tasting' isSelected={selectedHobbies['wine_tasting']}
                                      onClick={() => handleHobbyClick('wine_tasting')}/>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h1 className='title'>Action's example</h1>
                        <div className='subtitle'>This example shows how to use the react-beautiful-chips like actions
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1604593684136-c4d78ce11585?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                            alt=""/>
                        <div className="list-chips">
                            <Chip text='Like' thumbnail={<Icon name='like'/>}/>
                            <Chip text='Add to favorites' thumbnail={<Icon name='heart'/>}/>
                            <Chip text='Share' thumbnail={<Icon name='share'/>}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
