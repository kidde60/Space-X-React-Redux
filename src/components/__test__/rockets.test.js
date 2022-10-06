import renderer from 'react-test-renderer';
import Rockets from '../rockets/rockets';

const rocket_1 = {
  id: 1,
  rocket_name: "Space X 1",
  describe: "Some Infromation about Space X 1",
  image: "https://imgur.com/DaCfMsj.jpg",
  reserve: true,
  cancel: true,
  reserved: false,
};

it("Check for the first Space X haub", () => {
  const { id, rocket_name, describe, image, reserve, cancel, reserved } =
    rocket_1;
  const firstRocket = renderer
    .create(
      <Rockets
        id={id}
        rocket_name={rocket_name}
        describe={describe}
        image={image}
        reserve={reserve}
        cancel={cancel}
        reserved={reserved}
      />
    )
    .toJSON();
  expect(firstRocket).toMatchSnapshot();
});

const rocket_2 = {
  id: 2,
  rocket_name: 'Space X 2',
  describe: 'More Infromation About Second Space X Hub',
  image: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
  reserve: false,
  cancel: true,
  reserved: false,
};
it('Check for second Space X hub', () => {
  const {id, rocket_name, describe, image, reserve, cancel, reserved} = rocket_2
  const secondRocket = renderer.create(<Rockets
    id = {id}
    rocket_name= {rocket_name}
    describe={describe}
    image={image}
    reserve={reserve}
    cancel={cancel}
    reserved ={reserved}
    />).toJSON();
    expect(secondRocket).toMatchSnapshot();
});

const rocket_3 = {
  id: 3,
  rocket_name: 'Space X 3',
  describe: 'More details Aboute space X 3 Hub',
  image: '	https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
  reserve: false,
  cancel: true,
  reserved: true
};
it('Check for the Third Space X hub', () => {
  const {id, rocket_name, descrip, image, reserve, cancel, reserved} = rocket_3;
  const thirdRocket = renderer.create(<Rockets 
  id={id}
  rocket_name= {rocket_name}
  describe={descrip}
  image={image}
  reserve ={reserve}
  cancel={cancel}
  reserved ={reserved}
  />)
  expect(thirdRocket).toMatchSnapshot();
});
