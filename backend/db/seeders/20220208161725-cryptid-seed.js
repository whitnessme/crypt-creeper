'use strict';

let options = {};
options.tableName = 'Cryptids'; 
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert(options, [
      { name: 'Honey Island Swamp Monster', icon:  '/images/cryptid-icons/bigfoot.pdf'},
      { name: 'Rougaru', icon: '/images/cryptid-icons/werewolf.pdf'},
      { name: 'Momo', icon:  '/images/cryptid-icons/bigfoot.pdf'},
      { name: 'Ozark Howler', icon: '/images/cryptid-icons/wolf.pdf'},
      { name: 'Ghosts', icon: '/images/cryptid-icons/ghost.pdf'},
      { name: 'Raytown Ray', icon: '/images/cryptid-icons/seamonster.pdf'},
      { name: 'Bigfoot', icon: '/images/cryptid-icons/bigfoot.pdf'},
      { name: 'Boggy Creek Monster', icon: '/images/cryptid-icons/bigfoot.pdf'},
      { name: 'Champ', icon: '/images/cryptid-icons/seamonster.pdf'},
      { name: 'Vampires', icon: '/images/cryptid-icons/vampire.pdf'},
      { name: 'Werewolves', icon: '/images/cryptid-icons/werewolf.pdf'},
      { name: 'Demons', icon: '/images/cryptid-icons/demon.pdf'},
      { name: 'Chimeras', icon: '/images/cryptid-icons/chimera.pdf'},
      { name: 'Zombies', icon: '/images/cryptid-icons/zombie.pdf'},
      { name: 'Aliens', icon: '/images/cryptid-icons/zombie.pdf'},
      { name: 'Unidentified Creatures', icon: '/images/cryptid-icons/lens.pdf'},
      { name: 'Mothman', icon: '/images/cryptid-icons/mothman.pdf'},
      { name: 'Yeti', icon: '/images/cryptid-icons/bigfoot.pdf'},
      { name: 'Chupacabra', icon: '/images/cryptid-icons/chup.pdf'},
      { name: 'Wendigo', icon: '/images/cryptid-icons/wendigo.pdf'},
      { name: 'Jersey Devil', icon: '/images/cryptid-icons/demon.pdf'},
      { name: 'Loch Ness Monster', icon: '/images/cryptid-icons/seamonster.pdf'},
      { name: 'Thunderbirds', icon: '/images/cryptid-icons/bird.pdf'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
  
   return queryInterface.bulkDelete(options, null, {});
  }
};
