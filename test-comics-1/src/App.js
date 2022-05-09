import { useEffect } from 'react';
import lax from 'lax.js';
import './App.css';
import human1 from './assets/images/human-1.png';
import human2 from './assets/images/human-2.png';
import human3 from './assets/images/human-3.png';
import human4 from './assets/images/human-4.png';
import dialog2 from './assets/images/dialog-2.png';
import dialog3 from './assets/images/dialog-3.png';
import dialog4 from './assets/images/dialog-4.png';
import nlo1 from './assets/images/nlo-1.png';
import nlo2 from './assets/images/nlo-2.png';
import nlo3 from './assets/images/nlo-3.png';
import nlo4 from './assets/images/nlo-4.png';


function App() {
  useEffect(() => {
    lax.init();

    lax.addDriver('scrollY', function () {
      return window.scrollY;
    });

    lax.addElements('.Human-1', {
      scrollY: {
        opacity: [
          [100, 500, 1500, 1900],
          [0, 1, 1, 0]
        ]
      }
    }, []);

    lax.addElements('.Human-2', {
      scrollY: {
        opacity: [
          [1800, 2200, 5800, 6200],
          [0, 1, 1, 0]
        ]
      }
    }, []);

    lax.addElements('.Nlo-1', {
      scrollY: {
        opacity: [
          [2500, 2900, 4400, 6000],
          [0, 1, 1, 0]
        ]
      }
    }, []);

    lax.addElements('.Dialog-2', {
      scrollY: {
        opacity: [
          [3000, 3400, 4400, 4800],
          [0, 1, 1, 0]
        ]
      }
    }, []);

    lax.addElements('.Nlo-2', {
      scrollY: {
        opacity: [
          [5900, 6300, 7500, 7900],
          [0, 1, 1, 0]
        ]
      }
    }, []);

    lax.addElements('.Human-3', {
      scrollY: {
        opacity: [
          [5900, 6300, 11600, 12000],
          [0, 1, 1, 0]
        ]
      }
    }, []);

    lax.addElements('.Dialog-3', {
      scrollY: {
        opacity: [
          [7300, 7700, 8700, 9100],
          [0, 1, 1, 0]
        ]
      }
    }, []);

    lax.addElements('.Nlo-3', {
      scrollY: {
        opacity: [
          [7800, 8200, 11500, 11900],
          [0, 1, 1, 0]
        ]
      }
    }, []);

    lax.addElements('.Nlo-4', {
      scrollY: {
        opacity: [
          [11800, 12200, 13000, 13400],
          [0, 1, 1, 0]
        ]
      }
    }, []);

    lax.addElements('.Human-4', {
      scrollY: {
        opacity: [
          [11800, 12200, 13000, 13400],
          [0, 1, 1, 0]
        ]
      }
    }, []);

    lax.addElements('.Dialog-4', {
      scrollY: {
        opacity: [
          [11800, 12200, 13000, 13400],
          [0, 1, 1, 0]
        ]
      }
    }, []);
  }, []);

  return (
    <div className="App">
      <div className="Frame">
        <div className="Scene Human-1">
          <img src={human1} alt="Scene1" />
        </div>
        <div className="Scene Human-2">
          <img src={human2} alt="Scene2" />
        </div>
        <div className="Scene Nlo-1">
          <img src={nlo1} alt="Scene3" />
        </div>
        <div className="Scene Dialog-2">
          <img src={dialog2} alt="Scene4" />
        </div>
        <div className="Scene Nlo-2">
          <img src={nlo2} alt="Scene5" />
        </div>
        <div className="Scene Human-3">
          <img src={human3} alt="Scene6" />
        </div>
        <div className="Scene Dialog-3">
          <img src={dialog3} alt="Scene7" />
        </div>
        <div className="Scene Nlo-3">
          <img src={nlo3} alt="Scene8" />
        </div>
        <div className="Scene Nlo-4">
          <img src={nlo4} alt="Scene9" />
        </div>
        <div className="Scene Human-4">
          <img src={human4} alt="Scene10" />
        </div>
        <div className="Scene Dialog-4">
          <img src={dialog4} alt="Scene11" />
        </div>
      </div>
    </div>
  );
}

export default App;
