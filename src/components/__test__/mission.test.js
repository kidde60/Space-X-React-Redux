import renderer from 'react-test-renderer';

import missions from '../missions/missions';

const mission = {
    name: 'SpaceX',
    desc: 'Lorem ipsum text generate',
    id: '56DFRE',
    join: () => true,
    reserved: false,
};

const mission2 = {
    name: 'SpaceX',
    desc: 'Lorem ipsum text generate',
    id: '56DFRE',
    join: () => true,
    reserved: true,
};

it('<missions /> renders properly as expected', () => {
    const {
        name, desc, id, join, reserved,
    } = mission;
    const tree = renderer.create(<missions
        name={name}
        id={id}
        desc={desc}
        join={join}
        reserved={reserved}
    />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('<missions /> renders properly as expected', () => {
    const {
        name, desc, id, join, reserved,
    } = mission2;
    const tree = renderer.create(<missions
        name={name}
        id={id}
        desc={desc}
        join={join}
        reserved={reserved}
    />).toJSON();
    expect(tree).toMatchSnapshot();
});