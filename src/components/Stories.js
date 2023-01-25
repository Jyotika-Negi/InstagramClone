import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/ahmed1.jpg", name: "RedSunshine" },
    { id: 2, image: "/images/ahsan1.jpg", name: "CrazyWard" },
    { id: 3, image: "/images/babar1.jpg", name: "RishavM_" },
    { id: 4, image: "/images/fawad1.jpg", name: "Shreyyyy" },
    { id: 5, image: "/images/feroz1.jpg", name: "_IG_STAR_" },
    { id: 6, image: "/images/0.jfif", name: "Mohi_says_" },
    { id: 7, image: "/images/imrankhan1.jpg", name: "Hope12" },
    { id: 8, image: "/images/imrankhan3.jpg", name: "Alisha23" },
    { id: 9, image: "/images/imrankhanpost.jpg", name: "Wandererr12" },
  ]);
  return (
    <div className="stories">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
