'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Images', [
    {userId: 3, hauntId: 1, url: 'https://st2.depositphotos.com/3461853/12028/i/950/depositphotos_120280950-stock-photo-old-house-in-a-swamp.jpg'},
    {userId: 3, hauntId: 1, url: 'https://cdn.thecrazytourist.com/wp-content/uploads/2019/02/ccimage-shutterstock_302009690.jpg'},
    {userId: 3, hauntId: 1, url: 'https://static.wikia.nocookie.net/cryptidz/images/3/31/HONEY_ISLAND_SWAMP_MONSTER.jpg/'},
    {userId: 3, hauntId: 1, url: 'https://static.wikia.nocookie.net/monster/images/0/09/Rougarou.jpg/'},

    {userId: 4, hauntId: 2, url: 'https://d194ip2226q57d.cloudfront.net/original_images/Camp-Out_Mount-Magazine_Cave-Lake-Camp_By-Jeff-Rose.jpg'},
    {userId: 4, hauntId: 2, url: 'https://static.wikia.nocookie.net/cryptidz/images/c/ca/Art_Momo.jpg/'},
    {userId: 4, hauntId: 2, url: 'https://whiterockmountain.com/wp-content/uploads/2019/08/MatthewRay1.jpg'},
    {userId: 4, hauntId: 2, url: 'https://static.wikia.nocookie.net/cryptidz/images/3/3d/Ozark_Howler_Beast_%28Crypid%29.png'},
    
    {userId: 3, hauntId: 3, url: 'https://www.visitsavannah.com/sites/default/files/styles/background/public/15874658_1202030849844100_3255715247662473901_o.jpg?itok=TOGGuiFo'},
    {userId: 3, hauntId: 3, url: 'https://www.kehoehouse.com/files/4120/old_kehoe.jpg'},
    {userId: 3, hauntId: 3, url: 'https://www.visitsavannah.com/sites/default/files/styles/background/public/screen_shot_2017-09-21_at_4.32.09_pm.png?itok=u94kheJV'},
    {userId: 3, hauntId: 3, url: 'https://a0.muscache.com/pictures/7a59d882-01d0-473e-badf-44fafc4f73c3.jpg'},

    {userId: 3, hauntId: 4, url: 'https://www.pennlive.com/resizer/8l0t1mfax7HZSfp32FwgbGszaRE=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.pennlive.com/home/penn-media/width2048/img/wildaboutpa/photo/raystown-ray-photojpg-ab72696451655631.jpg'},
    {userId: 3, hauntId: 4, url: 'https://static.wikia.nocookie.net/cryptidz/images/8/8c/Raystown_ray.png'},
    {userId: 3, hauntId: 4, url: 'https://www.getawaymavens.com/wp-content/uploads/2017/08/Houseboat7PointMarinaRaystownLakePA.jpg'},

    {userId: 3, hauntId: 5, url: 'https://media.npr.org/assets/img/2017/10/18/ghost-story.jpg-7a2986c062f0a3d65ca25aed5dae223eed999602-s900-c85.webp'},
    {userId: 3, hauntId: 5, url: 'https://www.gannett-cdn.com/presto/2019/01/14/PLOU/7a0d22e5-843b-4322-bca6-ccd346835579-lcjdc5-5l7838x1urbm5jpxdc2_original.jpg?crop=2651%2C1503%2Cx0%2Cy459&width=1200'},
    {userId: 3, hauntId: 5, url: 'https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2018/10/1/1/CI-The-Real-Waverly-Hills-Sanatorium_Creepiest-Places-Kentucky.jpg.rend.hgtvcom.406.271.suffix/1538422766545.jpeg'},
    {userId: 3, hauntId: 5, url: 'https://www.gannett-cdn.com/presto/2019/01/14/PLOU/08656239-3795-4bbd-99f6-f6e87e751bac-2019-01-14-0001.jpg?width=640'},

    {userId: 4, hauntId: 6, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Pie_Grande.jpg/530px-Pie_Grande.jpg'},
    {userId: 4, hauntId: 6, url: 'https://www.myolympicpark.com/wp-content/uploads/2021/01/ol-hohrainforest-hallofmosses-trail-kids_justinbailie_700v.jpg?width=730'},
    {userId: 4, hauntId: 6, url: 'https://images.squarespace-cdn.com/content/v1/550ed02fe4b00ccc1d9e9000/1472913822958-FDWIDV3AQHVY8U8NRFSG/Olympic_Nicholson_DSC6460.jpg'},
    {userId: 4, hauntId: 6, url: 'https://www.beyondthetent.com/wp-content/uploads/2019/02/Staircase-Campground.jpg.webp'},

    {userId: 3, hauntId: 7, url: 'https://farm9.staticflickr.com/8101/8468639646_a290c01b94_b.jpg'},
    {userId: 3, hauntId: 7, url: 'https://carolinatheatre.org/wp-content/uploads/2020/10/BoggyCreek1_1440x810-1280x720.jpg'},
    {userId: 3, hauntId: 7, url: 'https://static.wikia.nocookie.net/cryptidz/images/7/75/Fouke_Monster.jpg'},

    {userId: 4, hauntId: 8, url: 'https://www.campadk.com/campsiteguide/cumberlandbay/20190530/DSC04007.jpg'},
    {userId: 4, hauntId: 8, url: 'https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/williamgpomery-photo-1637264653.jpg?crop=1.00xw:0.634xh;0,0.0404xh&resize=640:*'},
    {userId: 4, hauntId: 8, url: 'https://www.campsitereports.com/photos/Approved/United%20States/New%20York/Campground-1117/Campground/Cumberland-Bay-State-Park-CID16271.jpg'},
    {userId: 4, hauntId: 8, url: 'https://static.wikia.nocookie.net/cryptidz/images/6/6c/Swimsharlie.jpg'},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Images', null, {});
  }
};
