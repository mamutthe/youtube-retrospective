const mockupData:any = {
  mostWatchedChannel: {
    count: 86,
    channelTitle: "Madonna",
    channelTitleUrl: "https://www.youtube.com/@MADONNAVEVO",
  },
  topChannels: [
    {
      count: 86,
      channelTitle: "Madonna",
      channelTitleUrl: "https://www.youtube.com/@MADONNAVEVO",
    },
    {
      count: 75,
      channelTitle: "BLACKPINK",
      channelTitleUrl:
        "https://www.youtube.com/channel/UCOmHUn--16B90oW2L6FRR3A",
    },
    {
      count: 70,
      channelTitle: "5-Minutes-Crafts",
      channelTitleUrl:
        "https://www.youtube.com/channel/UC295-Dw_tDNtZXFeAPAW6Aw",
    },
    {
      count: 68,
      channelTitle: "WWE",
      channelTitleUrl: "https://www.youtube.com/user/WWEFanNation",
    },
    {
      count: 65,
      channelTitle: "PewDiePie",
      channelTitleUrl: "https://www.youtube.com/pewdiepie",
    },
    {
      count: 62,
      channelTitle: "FelpsLIVE ",
      channelTitleUrl: "https://www.youtube.com/@FelpsLIVE",
    },
    {
      count: 61,
      channelTitle: "MrBeast",
      channelTitleUrl: "https://www.youtube.com/user/MrBeast6000",
    }
  ],
  topVideos:[
    {
      "header": "YouTube Music",
      "title": "Vogue",
      "titleUrl": "https://www.youtube.com/watch?v=ydFYm-oomec",
      "channelTitle": "Madonna",
      "channelTitleUrl": "https://www.youtube.com/channel/UCo4CrqhIV_tSOGdDWfVyCsg",
      "time": [""],
      "views": 38
    },
    {
      "header": "YouTube Music",
      "title": "Physical",
      "titleUrl": "https://www.youtube.com/watch?v=Yegn0dZ-BfY",
      "channelTitle": "Dua Lipa",
      "channelTitleUrl": "https://www.youtube.com/channel/UCzVb0SIXp9q9PeKCcFjsBtA",
      "time": [
        ""
      ],
      "views": 33
    },
    {
      "header": "YouTube Music",
      "title": "Like a Prayer",
      "titleUrl": "https://www.youtube.com/watch?v=ilottRbDnGY",
      "channelTitle": "Madonna",
      "channelTitleUrl": "https://www.youtube.com/channel/UCo4CrqhIV_tSOGdDWfVyCsg",
      "time": [
       ""
      ],
      "views": 30
    },
    {
      "header": "YouTube",
      "title": "Papa Don't Preach",
      "titleUrl": "https://www.youtube.com/watch?v=6CuZARbr8o4",
      "channelTitle": "Madonna",
      "channelTitleUrl": "https://www.youtube.com/channel/UCo4CrqhIV_tSOGdDWfVyCsg",
      "time": [
        ""
      ],
      "views": 30
    },
    {
      "header": "YouTube Music",
      "title": "Running Up That Hill (A Deal With God)",
      "titleUrl": "https://www.youtube.com/watch?v=8rIjsa85UVk",
      "channelTitle": "Kate Bush",
      "channelTitleUrl": "https://www.youtube.com/channel/UCvwgfsD0OaWx0HJRExrE6uQ",
      "time": [
       ""
      ],
      "views": 29
    },
    {
      "header": "YouTube Music",
      "title": "You Keep Me Hangin On",
      "titleUrl": "https://www.youtube.com/watch?v=JoO7opqXMhk",
      "channelTitle": "Kim Wilde",
      "channelTitleUrl": "https://www.youtube.com/channel/UCE7vpq-DUtyMpQUzec9GA0g",
      "time": [
       ""
      ],
      "views": 29
    },
    {
      "title": "Radio Ga Ga",
      "titleUrl": "https://www.youtube.com/watch?v=azdwsXLmrHE",
      "channelTitleUrl": "https://www.youtube.com/channel/UCE7vpq-DUtyMpQUzec9GA0g",
      "views": 29
    }
  ]
};

export const getMockupData = (storyCard: "mostWatchedChannel" | "topChannels" | "topVideos") => {
    return mockupData[storyCard];
};
