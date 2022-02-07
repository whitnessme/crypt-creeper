"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Haunts",
      [
        {
          userId: 3,
          name: "Swamp Shack",
          address: "6007 Moonscar Dr.",
          city: "Slidell",
          state: "Louisiana",
          zipcode: 70461,
          country: "United States",
          closeLandmark: "Honey Island Swamp",
          price: 50,
          summary:
            "Come out and see the unique world of the swamp. Nature, unlike any other place; see where the land meets the water and humans are not the only top predator. Rent a boat and come out to our isolated swamp house. Be immersed in the Honey Island Swamp, where the known animal world bumps up with the unknown in a way you won't see anywhere else. Unlike werewolves, Rougaru sighting are not limited to the moon, although it is still recommended to visit when the moon is full as it is best to see the beauty of the swamp with a full moon.",
        },
        {
          userId: 4,
          name: "Momo's Campsite",
          address: "401 Jj-20",
          city: "Hollister",
          state: "Missouri",
          zipcode: 65672,
          country: "United States",
          closeLandmark: "Ozark Mountains",
          price: 20,
          summary:
            "Come see the beauty of the Ozark Mountains for yourself. This amazing range offers many wonderful hiking trails and sites. Visit and see for yourself.Just be sure to bring ear plugs; Both Momo and the Ozark Howler are known to be quite loud. Loud howling, growling and tree banging are all common. Audio recording devices are recommended.   ",
        },
        {
          userId: 3,
          name: "Spirit Hangout",
          address: "201 W Liberty St.",
          city: "Savannah",
          state: "Georgia",
          zipcode: 31401,
          country: "United States",
          closeLandmark: "One of America's Most Haunted Cities",
          price: 350,
          summary:
            "Georgia's First City—the 13th colony—that captures the souls of spirits and spurs them to stick around? Come visit one of the hottest spots in the South! This hotbed has every type of experience you could ask for. Stay in a real haunted house within a few miles of other haunted houses! ",
        },
        {
          userId: 3,
          name: "Ray's Lake Townhouse",
          address: "12900 Deerfield Ln",
          city: "Hesston",
          state: "Pennsylvania",
          zipcode: 16647,
          country: "United States",
          closeLandmark: "Raystown Lake",
          price: 350,
          summary:
            "What could be lurking out in the lake? It could be you! Come visit Raystown Lake and enjoy the lake life! While April is the best time for Ray sighting, the only way to find the creature is to be on the lake!",
        },
        {
          userId: 3,
          name: '"Did you hear that cough?" Waverly Sleepover',
          address: "4400 Paralee Dr.",
          city: "Louisville",
          state: "Kentucky",
          zipcode: 40272,
          country: "United States",
          closeLandmark: "Waverly Hills Sanatorium",
          price: 150,
          summary:
            "Located near Louisville, KY this former sanatorium is a site you don't want to miss, and won't be able to leave fast enough! Spend the night with the trapped ghosts of the patients who unfortunately never left. From the official website: 'Originally, Waverly Hills Sanatorium was a two-story frame building with a hipped roof and half-timbering. Construction on this building began in 1908 and opened for business on July 26, 1910. The building was designed to accommodate 40-50 tuberculosis patients safely. At the time, Tuberculosis was a very serious disease. People who were afflicted with Tuberculosis were isolated from the general public and placed in an area where they could rest, stay calm, and have plenty of fresh air. Sanatoriums were built on high hills surrounded by peaceful woods to create a serene atmosphere to help the patients recover… The facility served as a tuberculosis hospital until 1961 when the discovery of an antibiotic that successfully treated and cured TB rendered the facility obsolete. It was closed down and quarantined, then renovated. In 1962, the building reopened as a nursing home that eventually became known as Woodhaven Medical Services, a geriatric facility. WoodHaven Medical was closed by the state in 1981.'",
        },
        {
          userId: 4,
          name: "Bigfoot Hike and Camp",
          address: "3002 Mt Angeles Rd.",
          city: "Port Angeles",
          state: "Washington",
          zipcode: 98362,
          country: "United States",
          closeLandmark: "Olympic National Park",
          price: 75,
          summary:
            "Spend some time back in nature. Explore the beauty of the mountain region. Before your hike, ensure all electronic devices are fully charged. You never know when Bigfoot will make a noise or an appearance! Don't be another unlucky hiker with a good story but no proof! Keep devices on as much as possible, as wood knocking and sudden lack of other forest noises are common. Enjoy the view of the mountain while also studying the ground for footprints.  ",
        },
        {
          userId: 3,
          name: "Boggy Creek Visit",
          address: "104 US-71",
          city: "Fouke",
          state: "Arkansas",
          zipcode: 71837,
          country: "United States",
          closeLandmark: "Middle of Nowhere",
          price: 100,
          summary:
            "Located near the center of the small town of Fouke, AK, this unique experience will give you the chance to stay in the heart  of the Boggy Creek Monsters territory. Explore the hometown of this amazing creature and support the special themed restaurants and businesses while you look for creature during the day! And remember to lock your door at night.",
        },
        {
          userId: 4,
          name: "Camping with Champ",
          address: "152 Cumberland Head Rd.",
          city: "Plattsburgh",
          state: "New York",
          zipcode: 12901,
          country: "United States",
          closeLandmark: "Cumberland Bay State Park",
          price: 30,
          summary:
            "Come stay next to the wonderful Lake Champlain! Our campsites give you the chance to stay as close to the water as you possibly can! Take long walks on the beach to look from the shore or test your luck with a swim! Champ can be seen from anyone! Rent a canoe and visit farther out into the lake. Just remember to hold onto your water-proof camera! We won't want your proof to float to the bottom of the lake!",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Haunts", null, {});
  },
};
