// @flow
import React, { Component } from 'react'

// Node Modules Import


// Styles Import
import s from './index.module.scss'

// Assets Import
import * as characterFaces from "../../images/faces";

// Utility Imports

type Props = {};
type State = {};



class FaceChooser extends Component {
  componentDidMount() {
  }

  render() {
    const { onChoose, characters } = this.props;
    return (
      <div className={s.wrapper}>
        {characters && characters.map((item)=>{
          return (
            <div key={item.id} className={s.facePane} onClick={()=>onChoose(item)}>
              <img src={characterFaces[`${item.id}_default`]} id={`${item.id}`} alt={`${item.id}`} />
            </div>
          );
        })}
      </div>
    );
  }
}
export default FaceChooser;


