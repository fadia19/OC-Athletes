import { IAthlete, IAthleteMedals } from "../models/athletes";

export const athlete: IAthlete = {
  athlete_id: "1234",
  name: "Arianna",
  surname: "Fontana",
  date_of_birth: "14/04/1990",
  bio: `Arianna Fontana OMRI (born April 14, 1990) is an Italian short track speed skater, who has won eight Olympic medals, among these a gold in the 500m short track at the 2018 Winter Olympics in Pyeongchang. Her medal haul following the 2018 Games made her the female short track skater with the most Olympic medals, and tied her with male skaters Apolo Ohno and Viktor An. It also made her the Italian sportswoman with the second highest number of Winter Olympic medals, behind Stefania Belmondo. She specialises in the 500 m event. She is nicknamed La Freccia Bionda (The Blonde Arrow).

    Biography
    =======
    Fontana started skating at the age of four, following in the footsteps of her brother Alessandro, initially on roller skates before switching to ice skating. She first trained in Lanzada until the rink there closed, when she switched her training base to Bormio.
    
    Fontana made her international championship debut at the 2006 European Short Track Speed Skating Championships in Krynica-Zdrój, where she took the overall silver medal. At the 2006 Winter Olympics in Turin, she won bronze in the 3000 m relay. She placed 11th in the 500m and 6th in the 1000 m. The relay medal was the first for Italy in short track speed skating: at 15 years of age, Fontana became the youngest Italian to win a Winter Olympic medal. Following the 2006 Games, Fontana and her relay team-mates were appointed Knights of the Order of Merit of the Italian Republic.
    
    At the 2010 Winter Olympics in Vancouver, she won a bronze medal in the 500 metre event, was eliminated in the semifinals of the 1500 metre event, and was eliminated in the quarterfinals of the 1000 metre event. Her 500m bronze made her the first Italian to take an individual Olympic medal in short track.
    
    Fontano began dating Italian-American skater Anthony Lobello Jr. in 2012: the couple were engaged the following year and married in May 2014 in Colico. The couple split their time between homes in Valtellina, Courmayeur and Tallahassee, Florida.
    
    At the 2014 Winter Olympics in Sochi, she was upgraded from a bronze to a silver medal in the 500 m event after colliding with British skater Elise Christie. Christie was disqualified after causing a crash in the final. She won a bronze medal in the 1500 m event and in the Team-event, and was disqualified in the 1000 m event. Following the Games, Lobello began coaching Fontana following his retirement from competition. The following year Fontana took her first title at the World Short Track Speed Skating Championships, winning the gold in the 1500m and taking the overall silver.
    
    In October 2017, Fontana was named as Italy's flag bearer for the opening ceremony of the 2018 Winter Olympics in PyeongChang, South Korea. She was the first short track skater to be selected as flag bearer for the Italian Olympic team and the second flag bearer from the Italian Ice Sports Federation, after Carolina Kostner. She won her first Olympic gold medal there, in the 500 m event.She was the first European to win a 500 m Olympic gold. She also won silver in the team event and bronze in the 1000 m event, becoming the woman with most medals in the sport. It also meant that she had won Olympic medals at every contested distance.`,
  score: {
    gold: 2,
    silver: 3,
    bronze: 1,
  },
  weight: 70,
  height: 175,
  athletePhoto: {
    mime_type: "image/jpg",
    photo_id: 1,
  },
  globalScore: 0,
};

export const athleteMedalsMock: IAthleteMedals[] = [
  {
    athlete_id: "1",
    game_id: 2,
    year: 2022,
    city: "Tokyo",
    medals: {
      gold: 2,
      silver: 4,
      bronze: 1,
    },
  },
  {
    athlete_id: "1",
    game_id: 4,
    year: 2022,
    city: "Rio de Janeiro",
    medals: {
      gold: 5,
      silver: 1,
      bronze: 1,
    },
  },
];
