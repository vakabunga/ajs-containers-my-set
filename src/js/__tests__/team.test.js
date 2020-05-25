import Team from '../team';
import Character from '../character';

describe('Team:', () => {
  test('should add new Character to the Team', () => {
    const team = new Team();
    const vaka = new Character('Vaka');
    team.add(vaka);
    const result = new Set();
    expect(result.add(vaka)).toEqual(team.members);
  });
  test('should add several Characters to the Team', () => {
    const team = new Team();
    const vaka = new Character('Vaka');
    const bunga = new Character('Bunga');
    const zauber = new Character('Zauber');
    const thrall = new Character('Thrall');
    const zombie = new Character('Zombie');
    team.addAll(vaka, bunga, zauber, thrall, zombie);
    const result = new Set();
    result.add(vaka);
    result.add(bunga);
    result.add(zauber);
    result.add(thrall);
    result.add(zombie);
    expect(result).toEqual(team.members);
  });
  test('should return Array of team', () => {
    const team = new Team();
    const vaka = new Character('Vaka');
    const bunga = new Character('Bunga');
    team.addAll(vaka, bunga);
    const result = new Set();
    result.add(vaka);
    result.add(bunga);
    expect([...result]).toEqual(team.toArray());
  });
  test('should throw error if add the same Character to team, usin team.add()', () => {
    const team = new Team();
    const vaka = new Character('Vaka');
    team.add(vaka);
    expect(() => {
      team.add(vaka);
    }).toThrow();
  });
});
describe('Character:', () => {
  test('should create new Character with name', () => {
    const result = new Character('Vaka');
    expect(result).toEqual({ name: 'Vaka' });
  });
});
