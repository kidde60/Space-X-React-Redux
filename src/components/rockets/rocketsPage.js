import { useSelector, useDispatch } from 'react-redux';
import { rocketsCancel, rocketsReserve } from '../../redux/Rockets/rockets';
import Rockets from './rockets';

const RocketsPage = () => {
  const rocketsList = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  const reserve = (id) => {
    dispatch(rocketsReserve(id));
  };

  const cancel = (id) => {
    dispatch(rocketsCancel(id));
  };

  return (
    <div>
      {rocketsList.map((rocket) => {
        const { id, rocket_name, description, flickr_images, reserved } =
          rocket;
        return (
          <Rockets
            key={id}
            id={id}
            rocket_name={rocket_name}
            description={description}
            image={flickr_images[0]}
            reserve={reserve}
            cancel={cancel}
            isReserved={reserved}
          />
        );
      })}
    </div>
  );
};

export default RocketsPage;
