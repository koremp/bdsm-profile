// 2

export const Mental = {
  Grooming: 'Grooming',
  Begging: 'Begging',
  Resist: 'Resist',
  DirtyTalk: 'Dirty Talk',
  PhysicalCheckup: 'Physical Check Up',
  Scribble: 'Scribble',
  Shame: 'Shame',
  Neglect: 'Neglect',
  Mission: 'Mission',
  EverydayManagement: 'Everyday Management',
  Discipline: 'Discipline',
  Management: 'Management',
  AnimalTraining: 'Animal Training',
  SlaveTraining: 'Slave Training',
  Kidnap: 'Kidnap',
  Confine: 'Confine',
  PublicDiscipline: 'Public Discipline',
  HouseSlave: 'House Slave',
};

export type Mental = typeof Mental[keyof typeof Mental];