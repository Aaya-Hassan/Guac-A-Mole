import { useState, useEffect } from "react";
import { Hole } from "../styles";
import avocado from "../images/avocado.png";
import guacamole from "../images/guacamole.png";

const Holes = (props) => {
  const holes = [1, 2, 3, 4, 5];
  const [image, setImage] = useState();
  const [avocadoLocation, setAvocadoLocation] = useState(0);
  const [scores, setScores] = useState(0);

  const getRandom = () => {
    setAvocadoLocation(Math.floor(Math.random() * holes.length) + 1);
  }

  const getGuacamole = () => {
    setScores(scores + 5);
    setImage(guacamole);
    props.callback(scores + 5);
  };

  useEffect(() => {
    const inte1 = setInterval(getRandom, 1000);
    const inte2 = setInterval(() => setImage(avocado), 1000);
    return () => {
      clearInterval(inte1);
      clearInterval(inte2);
    };
  }, []);

  return (
    holes.map((holenumber) => {
      if (avocadoLocation === holenumber) {
        return (

          <Hole>
            <img src={image} alt="hole" onClick={getGuacamole} />
          </Hole>
        );
      } else {
        return <Hole />;
      }
    })
  )
}

export default Holes;