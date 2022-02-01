import { storeState, stateControl, stateControl2, changeState, feed, blueFood, hydrate, superWater, sunLight, noLight, powerUp, powerDown} from "../src/plant.js";

describe('storeState', () => {
  test('Should increase feed by 1', () => {
    let plantObject = { soil: 0, light: 0, water: 0};
    const plant = storeState(plantObject);
    const pothos = feed(plant);
    expect(pothos.soil).toEqual(1);
  });

  test('Should increase light by 3', () => {
    let plantObject = { soil:0, light:0, water:0}
    let plant = storeState(plantObject);
    const evergreen = sunLight(plant);
    expect(evergreen.light).toEqual(3);
  });
});
