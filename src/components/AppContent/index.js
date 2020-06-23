// @flow
import React, { Component } from 'react'

// Node Modules Import


// Styles Import
import s from './index.module.scss'

// Asset Imports
import characters from "../../utilities/characters";
import * as characterFaces from "../../images/faces";
import slap from "../../Media/slap.wav";
import logo from "../../images/logo.svg";
import github from "../../images/github.svg";
import linkedIn from "../../images/linkedin.png";


// Component Imports
import FaceChooser from '../FaceChooser'
import Docker from '../Docker';
import Button from '../Button';



type Props = {};
type State = {};



class AppContent extends Component {
  state = {
    currentCharacter: null,
    className: null,
    slapPower: 10,
    characterMean: null,
    characterMood: "default",
    gameOver:false,
    characters:null,
    health:100
  };
  componentDidMount() {
    this.setState({ characters: characters})
  }

  componentDidUpdate = (prevProps, prevState) =>{
    const { currentCharacter, health, characterMean, gameOver } = this.state;
    if (currentCharacter && (!health || health < characterMean) && !gameOver){
      this.setState({ gameOver: true });
    }
  }

  onCharacterChoose = (character) => {
    const { slapPower } = this.state;
    const mean = Math.ceil(
      (character.stats.arrogance +
        character.stats.jerk +
        character.stats.cunning) /
        (3 * slapPower)
    );
    
    const character_ = { ...character };
    this.setState({ currentCharacter: character_, characterMean: mean });
  };

  getCurrentMood = (health) => {
    if (health <= 100 && health > 70) {
      return "anxious";
    }
    if (health <= 70 && health > 40) {
      return "angry";
    }
    if (health <= 40 && health > 20) {
      return "anxious";
    }

    if (health <= 20) {
      return "zero";
    }
  };

  hitFace = () => {
    const { currentCharacter, characterMean, health } = this.state;
    const currentChar_ = { ...currentCharacter };
    if (
      health &&
      health >= characterMean
    ) {

      var snd = new Audio(slap);
      snd.play();
      let currentMood = this.getCurrentMood(currentChar_.stats.health);
      let health_ = health - characterMean;

      this.setState({
        className: s.hit,
        currentCharacter: currentChar_,
        characterMood: currentMood,
        health: health_
      });
      
    }
    
    setTimeout(() => {
      this.setState({ className: null });
    }, 820);
  };

  reset = () =>{
    this.setState({
      currentCharacter:null,
      gameOver: false,
      characters:characters,
      characterMood:'default',
      health:100
    });
  }

  onClickHandler = (type) =>{
    switch(type){
      case "github":
        window.location.href = 'https://www.github.com/kaustubh03/snapster';
        break;
      case "meridian":
        window.location.href = 'https://meridian.epsilon.now.sh/';
        break;
      case "monochroma":
        window.location.href = 'https://monochroma.epsilon.now.sh/';
        break;
      default:
        window.location.href = 'https://www.linkedin.com/in/kaustubh-saxena-b953ba27/';
        break;
    }
  }

  closeTab = () =>{
    window.location.href ="https://www.youtube.com/watch?v=r_0JjYUe5jo";
  }

  render() {
    const {
      currentCharacter,
      className,
      characterMood,
      gameOver,
      characters,
      health
    } = this.state;
    
    return (
      <div className={s.layoutParent}>
        {currentCharacter && (
          <div className={s.activeLogo}>
            <img src={logo} alt="logo" />
          </div>
        )}

        <div className={`${s.sideBar}`}>
          <FaceChooser onChoose={this.onCharacterChoose} characters={characters} />
        </div>

        {!currentCharacter && (
          <div className={s.content}>
            <span className={s.credits}>Developed By <a href="https://github.com/kaustubh03">Kaustubh Saxena</a></span>
            <img className={s.logo} src={logo} alt="logo" />
            <span className={s.subtitle}>Let Go off your Frustrations!!</span>
            <div className={s.rules}>
              <span>Simple To Play</span>
              <span>Choose a Character</span>
              <span>Slap it till its down.</span>
              <span>For editing Name , Click on the Name to Edit.</span>
            </div>
            <div className={s.disclaimer}>
              <span>Disclaimer : Only for fun Purposes. Don't Promote Violence :D</span>
              <span>Vector Art Credits : www.freepik.com, Logo is exclusive property of Slapster, Cursor Icons: Icons 8</span>
              {/* <div className={s.icons}>
                <a href="https://github.com/kaustubh03/slapster"><img src={github} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/kaustubh-saxena-b953ba27"><img src={linkedIn} alt="LinkedIn" /></a>
              </div> */}
            </div>
            
          </div>
        )}

        {currentCharacter && (
          <div className={s.bottomBar}>
            <Docker data={currentCharacter} currenthealth={health} />
          </div>
        )}
        {currentCharacter && <div>
          <div className={s.subjectWrapper}>
            {gameOver && (
              <div className={s.gameOverParent}>
                <span className={s.title}>Game Over</span>
                <span className={s.subtitle}>
                  You Slayed It!! Lets Leave this loser. Hope your anger is gone
                  Now.
                </span>
                <div className={s.actionBtns}>
                  <span onClick={this.reset}>Wanna Beatup Again?</span>
                  <span onClick={this.closeTab}>Nah! I'm Relaxed Now.</span>
                </div>
                <span className={s.coolStuffHeader}>More Cool Stuff : </span>
                <div className={s.coolStuff}>
                  <Button onClickHandler={() => this.onClickHandler('github')}>
                    <div className={s.button}>
                      <img className={s.icon} src={github} alt="github" />
                    </div>
                 </Button>
                 <Button onClickHandler={()=>this.onClickHandler('linkedin')}>
                    <div className={s.button}>
                      <img className={s.icon} src={linkedIn} alt="linkedin" />
                    </div>
                 </Button>
                 <Button onClickHandler={()=>this.onClickHandler('meridian')}>
                    <div className={s.button}>
                      <span>M</span>
                    </div>
                 </Button>
                 <Button onClickHandler={()=>this.onClickHandler('monochroma')}>
                    <div className={s.button}>
                      <img className={s.icon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Icon_Night_Mode_Dark_Theme.svg/1200px-Icon_Night_Mode_Dark_Theme.svg.png" alt="linkedin" />
                    </div>
                 </Button>
                </div>
              </div>
            )}

            {!gameOver && currentCharacter && (
              <>
                <span
                  contentEditable
                  suppressContentEditableWarning={true}
                  className={s.name}
                >
                  {currentCharacter &&
                    currentCharacter.name &&
                    currentCharacter.name}
                </span>
                <img
                  className={`${className}`}
                  src={
                    characterFaces[`${currentCharacter.id}_${characterMood}`]
                  }
                  alt={"subject"}
                  onClick={
                    !className && !gameOver ? this.hitFace : undefined
                  }
                />
              </>
            )}
          </div>
        </div>}
      </div>
    );
  }
}
export default AppContent;


