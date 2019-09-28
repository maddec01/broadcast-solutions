import React from 'react';

import './rugby.css';

const Rugby = () => (
  <div id='controlpanel' className='ctable'>
    <div className='cbody'>
      <div id='controlpanel_buttons' className='crow'>
        <div id='team_names_panel' className='ccell'>
          <div id='title'>SETUP</div>
          <div>
            <input type='text' defaultValue='TM1' id='team01_name_input' className='inputSMALL'/>
          </div>
          <div>
            <input type='text' defaultValue='TM2' id='team02_name_input' className='inputSMALL'/>
          </div>
          <div>
            <button id='team_name_update' className='buttonSMALL'>SET</button>
          </div>
        </div>
        <div id='team01_score_panel' className='ccell'>
          <div id='team01_title'>TM1</div>
          <div><button id='team01_plus5' className='buttonBIG'>+5</button></div>
          <div><button id='team01_plus2' className='buttonBIG'>+2</button></div>
          <div><button id='team01_plus3' className='buttonBIG'>+3</button></div>
          <div><input type='text' name='team01_score' defaultValue='0' id='team01_score_input' className='inputBIG'/></div>
          <div><button id='team01_score_update' className='buttonBIG'>SET</button></div>
        </div>
        <div id='team02_score_panel' className='ccell'>
          <div id='team02_title'>TM2</div>
          <div><button id='team02_plus5' className='buttonBIG'>+5</button></div>
          <div><button id='team02_plus2' className='buttonBIG'>+2</button></div>
          <div><button id='team02_plus3' className='buttonBIG'>+3</button></div>
          <div><input type='text' name='team02_score' defaultValue='0' id='team02_score_input' className='inputBIG'/></div>
          <div><button id='team02_score_update' className='buttonBIG'>SET</button></div>
        </div>
        <div id='score_panel' className='ccell'>
          <div id='title'>CLOCK</div>
          <div><button id='clock_start' className='buttonBIG'>START</button></div>
          <div><button id='clock_stop' className='buttonSMALL'>STOP</button></div>
          <div id='spacer'></div>
          <div><button id='clock_reset' className='buttonSMALL'>RESET</button></div>
          <div id='spacer'></div>
          <div>
            <input type='text' defaultValue='00' id='clock_min_input' className='inputSMALL'/>
          </div>
          <div>
            <input type='text' defaultValue='00' id='clock_sec_input' className='inputSMALL'/>
          </div>
          <div><button id='clock_set' className='buttonBIG'>SET</button></div>
        </div>
      </div>
    </div>
</div>
);

export default Rugby;