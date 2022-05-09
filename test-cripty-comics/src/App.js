import { useEffect } from 'react';
import lax from 'lax.js';
import './App.css';

function App() {
  useEffect(() => {
    lax.init();

    lax.addDriver('scrollY', function () {
      return window.scrollY;
    });

    lax.addElements(
      '.cube',
      {
        scrollY: {
          rotate: [
            [0, 1e9],
            [0, 1e9],
          ],
          translateX: [
            // CSS property
            [0, 1000], // Driver value map
            [0, 'screenWidth'], // Animation value map
            {
              inertia: 10, // Options
            },
          ],
          translateY: [
            [0, 200, 300, 350],
            [0, 0, -100, 0],
          ],
        },
      },
      []
    );
  }, []);

  return (
    <div className="App">
      <div className="Frame">
        <div className="cube"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default App;
