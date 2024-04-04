import React, { useState } from 'react';
import InputField from './components/InputField/InputField.tsx'; 
import Button from './components/Button/Button.tsx';
import Label from './components/Label/Label.tsx';
import Dropdown from './components/Dropdown/Dropdown.tsx';
import Table from './components/Table/Table.tsx'; 
import Img from './components/Img/Img.tsx';
import Card from './components/Card/Card.tsx'; 
import RadioButton from './components/RadioButton/RadioButton.tsx'; 
import Text from './components/Text/Text.tsx';

function App() {
  // State variables
  const [inputValue, setInputValue] = useState('');
  const [inputHovered, setInputHovered] = useState(false);
  const [inputActive, setInputActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [activePage, setActivePage] = useState('About');
  const [activeButton, setActiveButton] = useState(null);

  // Event handlers
  const handleImgClick = () => {
    console.log('Image clicked!');
  };
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputClick = () => {
    setInputActive(true);
    setInputHovered(false);
  };

  const handleInputHover = () => {
    setInputHovered(true);
  };

  const handleInputLeave = () => {
    setInputHovered(false);
  };

  const handleInputBlur = () => {
    setInputActive(false);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleCardClick = () => {
    console.log('Card clicked!');
  };

  const handleTableClick = (category) => {
    console.log(`${category} clicked`);
  };

  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} Button clicked`);
    setActiveButton(buttonName);
  };

  const handleButtonHover = (buttonName) => {
    console.log(`${buttonName} Button hovered`);
    setActiveButton(buttonName);
  };

  const handleLabelClick = (label) => {
    console.log(`${label} Label clicked`);
    setActivePage(label);
  };

  const handleLabelHover = (label) => {
    console.log(`${label} Label hovered`);
  };

  const handleDropdownClick = () => {
    console.log('Dropdown clicked');
  };
 

 // Render
 return (
  <div className="App" style={{ textAlign: 'center' }}>
    <h1>Web Component Library</h1>

    {/* Img Section */}
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      {/* Default State */}
      <div style={{ marginRight: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Default State */}
          <Img
            src="https://via.placeholder.com/100"
            alt="Logo Sample"
            className="image"
            onClick={handleImgClick} // Add onClick event handler
          />
          {/* Disabled State */}
          <Img
            src="https://via.placeholder.com/100"
            alt="Disabled Logo"
            className="image"
            disabled
            style={{ cursor: 'not-allowed', marginLeft: '20px' }} // Apply disabled styles
          />
        </div>
      </div>
      {/* Default State Column */}
      <div style={{ marginRight: '20px' }}>
        <h2>Default State</h2>
        {/* Default State */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <InputField
            placeholder="Keyword Search"
            value={inputValue}
            onChange={handleInputChange}
            onClick={handleInputClick}
            onBlur={handleInputBlur}
            onMouseEnter={handleInputHover}
            onMouseLeave={handleInputLeave}
            style={{
              backgroundColor: inputActive ? '#c0deed' : (inputHovered ? '#eee' : 'transparent'),
              border: inputActive ? '2px solid #4CAF50' : 'none'
            }}
          />
        </div>
      </div>

      {/* Disabled State Column */}
      <div>
        <h2>Disabled State</h2>
        {/* Disabled State */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <InputField
            placeholder="Keyword Search"
            disabled
            style={{
              backgroundColor: '#C0C0C0',
              border: '2px solid #ddd',
              color: '#aaa'
            }}
          />
        </div>
      </div>
    </div>

    {/* Button Section */}
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      {/* Default State Column */}
      <div style={{ marginRight: '20px' }}>
        <h2>Default State</h2>
        {/* Button Section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Search Button */}
          <Button text="Search" backgroundColor="#FF5733" style={{ marginBottom: '10px' }} />
          {/* View Button */}
          <Button text="View" backgroundColor="#FFC300" style={{ marginBottom: '10px' }} />
          {/* View More Projects Button */}
          <Button text="View More Projects" backgroundColor="#28A745" style={{ marginBottom: '10px' }} />
          {/* Left Arrow Button */}
          <Button text="&lt;" backgroundColor="#2E86C1" style={{ marginBottom: '10px' }} />
          {/* Right Arrow Button */}
          <Button text="&gt;" backgroundColor="#F39C12" style={{ marginBottom: '10px' }} />
          {/* About Button */}
          <Button text="About" backgroundColor="#6A5ACD" style={{ marginBottom: '10px' }} />
          {/* Projects Button */}
          <Button text="Projects" backgroundColor="#FF1493" style={{ marginBottom: '10px' }} />
        </div>
      </div>

      {/* Hover State Column */}
      <div style={{ marginRight: '20px' }}>
        <h2>Hover State</h2>
        {/* Button Section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Search Button */}
          <Button text="Search" backgroundColor="#FF5733" hoverBackgroundColor="#FF4500" onClick={() => handleButtonClick('Search')} onMouseEnter={() => handleButtonHover('Search')} style={{ marginBottom: '10px' }} />
          {/* View Button */}
          <Button text="View" backgroundColor="#FFC300" hoverBackgroundColor="#FFD700" onClick={() => handleButtonClick('View')} onMouseEnter={() => handleButtonHover('View')} style={{ marginBottom: '10px' }} />
          {/* View More Projects Button */}
          <Button text="View More Projects" backgroundColor="#28A745" hoverBackgroundColor="#32CD32" onClick={() => handleButtonClick('View More Projects')} onMouseEnter={() => handleButtonHover('View More Projects')} style={{ marginBottom: '10px' }} />
          {/* Left Arrow Button */}
          <Button text="&lt;" backgroundColor="#2E86C1" hoverBackgroundColor="#4c667b" onClick={() => handleButtonClick('Left Arrow')} onMouseEnter={() => handleButtonHover('Left Arrow')} style={{ marginBottom: '10px' }} />
          {/* Right Arrow Button */}
          <Button text="&gt;" backgroundColor="#F39C12" hoverBackgroundColor="#9a7022" onClick={() => handleButtonClick('Right Arrow')} onMouseEnter={() => handleButtonHover('Right Arrow')} style={{ marginBottom: '10px' }} />
          {/* About Button */}
          <Button text="About" backgroundColor="#6A5ACD" hoverBackgroundColor="#9370DB" onClick={() => handleButtonClick('About')} onMouseEnter={() => handleButtonHover('About')} style={{ marginBottom: '10px' }} />
          {/* Projects Button */}
          <Button text="Projects" backgroundColor="#FF1493" hoverBackgroundColor="#FF69B4" onClick={() => handleButtonClick('Projects')} onMouseEnter={() => handleButtonHover('Projects')} style={{ marginBottom: '10px' }} />
        </div>
      </div>

      {/* Active/Pressed State Column */}
      <div style={{ marginRight: '20px' }}>
        <h2>Active/Pressed State</h2>
        {/* Button Section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Search Button */}
          <Button
            text="Search" backgroundColor={activeButton === 'Search' ? '#8c3622' : '#FF5733'} onClick={() => handleButtonClick('Search')} style={{ marginBottom: '10px', border: activeButton === 'Search' ? '2px solid black' : 'none', }} />
          {/* View Button */}
          <Button
            text="View" backgroundColor={activeButton === 'View' ? '#FFA500' : '#FFC300'} onClick={() => handleButtonClick('View')} style={{ marginBottom: '10px', border: activeButton === 'View' ? '2px solid black' : 'none', }} />
          {/* View More Projects Button */}
          <Button
            text="View More Projects" backgroundColor={activeButton === 'View More Projects' ? '#32704d' : '#28A745'} onClick={() => handleButtonClick('View More Projects')} style={{ marginBottom: '10px', border: activeButton === 'View More Projects' ? '2px solid black' : 'none', }} />
          {/* Left Arrow Button */}
          <Button
            text="&lt;" backgroundColor={activeButton === 'Left Arrow' ? '#233340' : '#2E86C1'} onClick={() => handleButtonClick('Left Arrow')} style={{ marginBottom: '10px', border: activeButton === 'Left Arrow' ? '2px solid black' : 'none', }} />
          {/* Right Arrow Button */}
          <Button
            text="&gt;" backgroundColor={activeButton === 'Right Arrow' ? '#5a400e' : '#F39C12'} onClick={() => handleButtonClick('Right Arrow')} style={{ marginBottom: '10px', border: activeButton === 'Right Arrow' ? '2px solid black' : 'none', }} />
          {/* About Button */}
          <Button
            text="About" backgroundColor={activeButton === 'About' ? '#341f97' : '#6A5ACD'} onClick={() => handleButtonClick('About')} style={{ marginBottom: '10px', border: activeButton === 'About' ? '2px solid black' : 'none', }} />
          {/* Projects Button */}
          <Button
            text="Projects" backgroundColor={activeButton === 'Projects' ? '#D81B60' : '#FF1493'} onClick={() => handleButtonClick('Projects')} style={{ marginBottom: '10px', border: activeButton === 'Projects' ? '2px solid black' : 'none', }} />
        </div>
      </div>

      {/* Disabled State Column */}
      <div>
        <h2>Disabled State</h2>
        {/* Button Section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Disabled Search Button */}
          <Button text="Search" backgroundColor="#FF5733" disabled style={{ marginBottom: '10px' }} />
          {/* Disabled View Button */}
          <Button text="View" backgroundColor="#FFC300" disabled style={{ marginBottom: '10px' }} />
          {/* Disabled View More Projects Button */}
          <Button text="View More Projects" backgroundColor="#28A745" disabled style={{ marginBottom: '10px' }} />
          {/* Disabled Left Arrow Button */}
          <Button text="&lt;" backgroundColor="#2E86C1" disabled style={{ marginBottom: '10px' }} />
          {/* Disabled Right Arrow Button */}
          <Button text="&gt;" backgroundColor="#F39C12" disabled style={{ marginBottom: '10px' }} />
          {/* Disabled About Button */}
          <Button text="About" backgroundColor="#6A5ACD" disabled style={{ marginBottom: '10px' }} />
          {/* Disabled Projects Button */}
          <Button text="Projects" backgroundColor="#FF1493" disabled style={{ marginBottom: '10px' }} />
        </div>
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Default state */}
      <Label
        text="About Us"
        onClick={() => handleLabelClick('About')}
        active={activePage === 'About'}
        onMouseEnter={() => handleLabelHover('About')}
        style={{ marginRight: '20px' }} 
      />
      {/* Disabled state */}
      <Label
        text="Our Projects"
        onClick={() => handleLabelClick('Projects')}
        active={activePage === 'Projects'}
        onMouseEnter={() => handleLabelHover('Projects')}
        disabled
      />
    </div>

    {/* Table Section */}
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Default State */}
        <div style={{ marginRight: '20px' }}>
          <Table
            categories={['Brand City', 'Design Avenue', 'Social Media District', 'UX Factory', 'Web Town']}
            onClickCategory={handleTableClick}
            backgroundColor="#327573"
          />
        </div>
        {/* Disabled State */}
        <div>
          <Table
            categories={['Brand City', 'Design Avenue', 'Social Media District', 'UX Factory', 'Web Town']}
            onClickCategory={handleTableClick}
            backgroundColor="#C0C0C0"
            disabled
          />
        </div>
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Default state */}
      <Card
        title="Project 1"
        subtitle="Point to Point Network Wireless Bridge"
        description="This project is all about implementing one hop to the other hop wireless bridge."
        image="https://via.placeholder.com/300"
        onClick={handleCardClick}
        style={{ marginRight: '20px' }} 
      />
      {/* Disabled state */}
      <Card
        title="Project 1"
        subtitle="Point to Point Network Wireless Bridge"
        description="Point to Point Network Wireless Bridge."
        image="https://via.placeholder.com/300"
        disabled
      />
    </div>

    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', marginBottom: '50px' }}>
      {/* Render Text component with different configurations */}
      <Text
        text="Hello, World!"
        color="blue"
        fontSize="20px"
        fontWeight="bold"
        style={{ marginRight: '20px' }} 
      />
      <Text
        text="Disabled Text"
        color="gray"
        fontSize="16px"
        fontWeight="normal"
        disabled
      />
    </div>                                                 

    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  marginBottom: '20px', marginTop: '20px' }}>
      {/* Render RadioButton components with different configurations */}
      <RadioButton
        label="Visa"
        checked={selectedOption === 'Visa'}
        onChange={() => handleOptionChange('Visa')}
      />
      <RadioButton
        label="MasterCard"
        checked={selectedOption === 'MasterCard'}
        onChange={() => handleOptionChange('MasterCard')}
      />
      <RadioButton
        label="Avion"
        checked={selectedOption === 'Avion'}
        onChange={() => handleOptionChange('Avion')}
        disabled
      />
      <p>Selected Option: {selectedOption}</p>
    </div>

    {/* Dropdown Section */}
    <div style={{ marginBottom: '20px', marginTop: '20px'}}>
      <div style={{ display: 'inline-block' }}>
        <Dropdown 
          options={['Brand City', 'Design Avenue', 'Social Media District', 'UX Factory', 'Web Town']}
          onClick={handleDropdownClick}
        />
        <Dropdown 
          options={['Brand City', 'Design Avenue', 'Social Media District', 'UX Factory', 'Web Town']}
          disabled
        />
      </div>
    </div>
  </div>
);
          }
          export default App;
