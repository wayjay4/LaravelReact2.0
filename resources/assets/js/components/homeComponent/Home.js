import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Cdclock from '../cdclockComponent/Cdclock';
import Stopwatch from '../stopwatchComponent/Stopwatch';
import MusicMaster from '../musicmasterComponent/MusicMaster';
import ReminderPro from '../reminderproComponent/ReminderPro';
import GoalCoach from '../goalcoachComponent/GoalCoach';

import '../../../sass/home.css';

export default class Home extends Component {
    render(){
        return(
            <div className={"home-container"}>
              <h1>Waylon Dixon</h1>

              <h2>From the Internet</h2>

              <p>
                I am Waylon, a designer from Arizona. I work as a freelance web developer where I design
                and build web applications, big and small.
              </p>

              <p>
                I have a hardwired desire to be better, an instinct for good design, and a strong ambition to make a difference on the web. With over 12 years experience in Web Development, I have the skillset and creative flair needed to build custom and powerful websites for a range of clients.
              </p>

              <h3>
                My recent projects using Laravel and ReactJS
              </h3>

              <div className={"home-projectlist"}>
                <ul>
                  <li><Link to={'/projects/cdclock'}>Countdown Clock</Link></li>
                  <li><Link to={"/projects/goalcoach"}>Goal Coach</Link></li>
                  <li><Link to={"/projects/musicmaster"}>Music Master (under construction)</Link></li>
                  <li><Link to={"/projects/reminderpro"}>Reminder Pro</Link></li>
                  <li><Link to={"/projects/stopwatch"}>Stop Watch</Link></li>
                </ul>
              </div>
            </div>
        );
    }
}
