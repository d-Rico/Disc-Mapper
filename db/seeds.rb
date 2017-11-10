# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Course.create(
  name: "Borderland State Park",
  address: "259 Massapoag Avenue",
  city: "Easton",
  state: "MA",
  zip: "02334",
  description: "Scenic and challenging combination of grassy fields and woods with some elevation. Longest course in New England. Scorecards at info stand/practice basket. 1st tee behind visitors center to the right. Dual tees and baskets. Parking; $5/day or $60/year. Gates close at 8pm in the summer; 4pm in winter.",
  difficulty: "Suitable for players of all levels",
  water_hazard: false,
  latitude: 42.062648,
  longitude: -71.1667187,
  photo_url: "https://www.theclio.com/web/ul/22732.48064.jpg",
  user_id: 1
)
Course.create(
  name: "Maple Hill",
  address: "132 Marshall St.",
  city: "Leicester",
  state: "MA",
  zip: "01524",
  description: "A beautiful, challenging championship caliber course with multiple ponds, long fairways, wooded holes, open fields, and a clever use of elevation. Four configurations, Red (5071'), White (6089'), Blue (7975') and Gold (8415') to challenge ams to touring pros. Open from New Years to Thanksgiving. Home of the Vibram Open.",
  difficulty: "Suitable for players of higher level",
  water_hazard: true,
  latitude: 42.2760662,
  longitude: -71.8974943,
  photo_url: "https://m.discgolfscene.com/courses/513/f8264bde950e.jpg",
  user_id: 1
)
Course.create(
  name: "Pyramids",
  address: "103 Marshall St.",
  city: "Leicester",
  state: "MA",
  zip: "01524",
  description: "Mostly wooded but not overly tight. Hilly with a casual stream. Pond is OB. Private, but open to public. 2 sets of baskets (Chainstars and DISCatchers). No dogs please. Home of the Marshall Street Pro Shop. Fee/$6 &amp; $10.",
  difficulty: "Intermediate",
  water_hazard: false,
  latitude: 42.2760857,
  longitude: -71.9040604,
  photo_url: "https://igx.4sqi.net/img/general/600x600/753015_4xafqDYOM37xCXWkxDaj96SnhSiunLKgmLAiKSXw6TY.jpg",
  user_id: 1
)
Course.create(
  name: "Devens Disc Golf Course",
  address: "80 Antietam St.",
  city: "Devens",
  state: "MA",
  zip: "01434",
  description: "The Hill is the original course of two courses here. Technical - plays up and down an old military training hill. Hilly, rocky, wooded, fair, and tight in spots. Beautiful boulders and lots of elevation. Sturdy shoes a good idea.",
  difficulty: "Suitable for players of all levels",
  water_hazard: false,
  latitude: 42.54858,
  longitude: -71.6059572,
  photo_url: "https://4.bp.blogspot.com/-vGIj16p6esE/VvKKXq274-I/AAAAAAAAAiU/3TIKtoLRyIIeHZKrNLron1DU3iKwlCmPw/s1600/12G%2Bbasket.JPG",
  user_id: 1
)
Course.create(
  name: "Tully Lake",
  address: "6 Athol-Richmond Rd.",
  city: "Royalston",
  state: "MA",
  zip: "01331",
  description: "Beautifully located at Tully Lake with a variety of challenging holes. Scorecards at 1st tee. Campground: (978) 249-4957. US Army Corps of Engineers facility.",
  difficulty: "Intermediate",
  water_hazard: true,
  latitude: 42.6452936,
  longitude: -72.2248439,
  photo_url: "https://www.pdga.com/files/styles/large/public/course_photos/9736_m.jpg?itok=HC8qfeun",
  user_id: 1
)
Course.create(
  name: "Flat Rock",
  address: "2260 Flat Rock Rd.",
  city: "Athol",
  state: "MA",
  zip: "01331",
  description: "Rolling landscape - open meadows with some water hazards. Technical but not as wooded as most New England courses.",
  difficulty: "Intermediate",
  water_hazard: true,
  latitude: 42.5225217,
  longitude: -72.2355756,
  photo_url: "http://www.explorediscgolf.com/wp-content/uploads/2012/03/IMG_1389-475x356.jpg",
  user_id: 1
)
Course.create(
  name: "Barre Falls",
  address: "200 Coldbrook Rd.",
  city: "Barre",
  state: "MA",
  zip: "01005",
  description: "This US Army Corps of Engineers dam course is open by New England standards, with nice elevation changes, abundant diversity and plenty of water. Good tee signs.",
  difficulty: "Intermediate",
  water_hazard: true,
  latitude: 42.4278914,
  longitude: -72.0258884,
  photo_url: "https://m.discgolfscene.com/courses/506/20a4f71232c7.jpg",
  user_id: 1
)
Course.create(
  name: "Dacey Field",
  address: "632 Lincoln St.",
  city: "Franklin",
  state: "MA",
  zip: "02038",
  description: "Through the woods behind a town park. Mostly long holes, with a mix of left, right, uphill, and downhill.",
  difficulty: "Novice and Intermediate",
  water_hazard: false,
  latitude: 42.1193848,
  longitude: -71.4027801,
  photo_url: "http://4.bp.blogspot.com/-QEGiIZSYffU/U5ZimNC4_5I/AAAAAAAAnBc/rWXEXbhh8pY/s1600/10Dacey+Field+Trail+3.JPG",
  user_id: 1
)
Course.create(
  name: "Riverhead Field",
  address: "Barnes Rd.",
  city: "Oak Bluffs",
  state: "MA",
  zip: "02568",
  description: "On an ancient riverhead in a state forest that spans 15 acres. Tight wooded areas balanced with long open fairways. Dual tees.",
  difficulty: "Suitable for players of all levels",
  water_hazard: false,
  latitude: 41.4044613,
  longitude: -70.6066441,
  photo_url: "https://m.discgolfscene.com/courses/518/c9aaf048e556.jpg",
  user_id: 1
)
Course.create(
  name: "Nantucket",
  address: "21 Lovers Lane",
  city: "Nantucket Island",
  state: "MA",
  zip: "02554",
  description: "Championship style course in the beautiful South Pasture of the Nantucket State Forest. Wide (and occasional tight) fairways through the woods, many with multiple routes to enhance challenge and enjoyment. The short tees are great for new players, and the long tees will test the very best with a par 68 layout featuring three par five holes and a variety of lengths and shot shapes. Top quality tees and signs.",
  difficulty: "Intermediate",
  water_hazard: false,
  latitude: 41.260651,
  longitude: -70.0818327,
  photo_url: "https://www.pdga.com/files/styles/large/public/course_photos/NDG.jpg?itok=wmQhcSex",
  user_id: 1
)
Course.create(
  name: "The Highlands of Conway",
  address: "1270 Shelburne Falls Rd",
  city: "Conway",
  state: "MA",
  zip: "01341",
  description: "The design utilizes much of the 45 acre site to challenge players with natural fairways and elevation changes. Hemlocks, white birches, and veins of white quartz offer a gorgeous setting. $5/round. Pro Shop is 0.25 mile away - see web site.",
  difficulty: "Intermediate",
  water_hazard: false,
  latitude: 42.5374355,
  longitude: -72.7127722,
  photo_url: "https://m.discgolfscene.com/courses/508/4df7fc5bc035.jpg",
  user_id: 1
)
Course.create(
  name: "Crane Hill",
  address: "100 Crane Hill Rd.",
  city: "Wilbraham",
  state: "MA",
  zip: "01095",
  description: "Mix of open and wooded, up and downhill shots. OB stream in play on two holes.",
  difficulty: "Novice and Intermediate",
  water_hazard: false,
  latitude: 42.1466033,
  longitude: -72.4024279,
  photo_url: "https://m.discgolfscene.com/courses/2700/3e3c462c0b11.jpg",
  user_id: 1
)
