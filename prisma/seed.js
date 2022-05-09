const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const node = await prisma.mission.upsert({
      where: { name: 'Mission Node' },
      update: {},
      create: {
        name: 'Mission Node',
        lang: 'Node',
        missionCommander: 'Carlo Gilmar',
        enrollments: 1
      },
    });

    const java = await prisma.mission.upsert({
      where: { name: 'Mission Java'},
      update: {},
      create: {
        name: 'Mission Java',
        lang: 'Java',
        missionCommander: 'Fernanda',
        enrollments: 2
      },
    });

    const mc1 = await prisma.missionCommander.upsert({
      where: { name: 'Carlo Gilmar'},
      update: {},
      create: {
        name: 'Carlo Gilmar',
        username: 'carlogilmar_',
        mainStack: 'Node'
      },
    });

    const mc2 = await prisma.missionCommander.upsert({
      where: { name: 'Fernanda'},
      update: {},
      create: {
        name: 'Fernanda',
        username: 'fer',
        mainStack: 'Java'
      },
    });

    const mc3 = await prisma.missionCommander.upsert({
      where: { name: 'Rodrigo'},
      update: {},
      create: {
        name: 'Rodrigo',
        username: 'romarpla',
        mainStack: 'Javascript'
      },
    });

    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();