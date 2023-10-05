import {useState} from 'react';

function Headinghover() {
  return (
    <div>
      <h2></h2>
    </div>
  );
}

const Heading = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Hover over medddddddd
        </div>

        {isHovering && <Headinghover />}
      </div>
    </div>
  );
};

export default Headinghover;
