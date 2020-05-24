import Team from '../team';
import Character from '../character';

describe('Team:', () => {
  test('should create new Object of Team', () => {
    const team = new Team();
    const vaka = new Character('Vaka');
    const bunga = new Character('Bunga');
    const zauber = new Character('Zauber');
    const thrall = new Character('Thrall');
    const zombie = new Character('Zombie');
    team.addAll(vaka, bunga, zauber, thrall, zombie);
    expect(team).toEqual();
  });
});
