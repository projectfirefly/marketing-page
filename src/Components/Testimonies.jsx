import React, { useState } from "react";
import MediaQuery from "react-responsive";

import Badges from "./Badges";
import TestimonyButton from "./TestimonyButton";
import TestimonyComponent from "./TestimonyComponent";

import "../Styles/marketing_testimony.scss";
const Testimonies = _ => {
  const [userState] = useState([
    {
      name: "Jennifer Smalls",
      pictureName: "Mom",
      title: "Preschool Teacher",
      testimony:
        "I love how easy it is to communicate with parents. I love that it is now used for our classroom portfolios and parents can have access to their child's learning. Firefly is easy to set up and very user friendly for parents!!! I don't think I could survive without Firefly!!!"
    },
    {
      name: "Jeff Smalls",
      pictureName: "Dad",
      title: "Real World Dad",
      testimony:
        "I love how easy it is to communicate with parents. I love that it is now used for our classroom portfolios and parents can have access to their child's learning. Firefly is easy to set up and very user friendly for parents!!! I don't think I could survive without Firefly!!!"
    },
    {
      name: "Sarah Smalls",
      pictureName: "Girl",
      title: "Real World Teen",
      testimony:
        "I love how easy it is to communicate with parents. I love that it is now used for our classroom portfolios and parents can have access to their child's learning. Firefly is easy to set up and very user friendly for parents!!! I don't think i could survive without Firefly!!!"
    }
  ]);

  const Mobile = 700;
  const Desktop = 701;

  return (
    <>
      <MediaQuery maxWidth={Mobile}>
        <div class="all-testimonies">
          {userState.map(user => (
            <div class="testimony_container">
              <TestimonyComponent
                name={user.name}
                pictureName={user.pictureName}
                title={user.title}
                testimony={user.testimony}
              />
            </div>
          ))}
        </div>
        <Badges />
      </MediaQuery>
      <MediaQuery minWidth={Desktop}>
        <div class="all-testimonies">
          {userState.map(user => (
            <div class="testimony_container">
              <TestimonyComponent
                name={user.name}
                pictureName={user.pictureName}
                title={user.title}
                testimony={user.testimony}
              />
            </div>
          ))}
        </div>
        <TestimonyButton />
      </MediaQuery>
    </>
  );
};

export default Testimonies;
