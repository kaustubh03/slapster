// @flow
import React, { Component } from 'react'

// Node Modules Import

// Component Imports
import ProgressBar from "../ProgressBar";

// Styles Import
import s from './index.module.scss'

// import face from './face.svg' 


type Props = {};
type State = {};



class Docker extends Component {
  componentDidMount() {}

  render() {
    const { data, currenthealth } = this.props;
    return (
      <div className={s.wrapper}>
        <div className={s.childrenHolder}>
          <div className={s.dockChild}>
            <span>Health</span>
            <ProgressBar
              value={currenthealth}
              color={currenthealth <= 20 ? "red" : "blue"}
            />
          </div>
          <div className={s.dockChild}>
            <span>Cunning</span>
            <ProgressBar value={data.stats.cunning} color="red" />
          </div>
          <div className={s.dockChild}>
            <span>Arrogance</span>
            <ProgressBar value={data.stats.arrogance} color="gold" />
          </div>
          <div className={s.dockChild}>
            <span>Jerk</span>
            <ProgressBar value={data.stats.jerk} color="green" />
          </div>
        </div>
      </div>
    );
  }
}
export default Docker;


