const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyCq-Ekgu1Oe67Gzkdx0AKZExL8pqJ8dCE0");

async function testGenerateContentStream() {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt_text = [ 
            "Intro",
            "0:00 the mafia Italians Irish Russians Jews",
            "0:03 Mexicanos throughout U.S history every",
            "0:06 minority group in America has",
            "0:07 established a formidable Mafia at one",
            "0:09 time except one",
            "0:11 the Germans so why was there never a",
            "0:13 German Mafia in American history you may History",
            "0:15 have never noticed but the lack of a",
            "0:17 American history as logically it",
            "0:20 definitely should exist you see between",
            "0:22 1840 and 1890 the Germans were the",
            "0:25 largest single ethnic group immigrating",
            "0:27 to the United States for over 50 years",
            "0:30 millions of Germans washed ashore in New",
            "0:33 York and Boston like algae overgrowing a",
            "0:36 warm lake Indie during several key",
            "0:38 battles of the U.S Civil War native",
            "0:40 Germans speaking zero English filled out",
            "0:42 entire regiments in the Union Army the",
            "0:44 52nd of New York 9th of Iowa and 74th",
            "0:47 Pennsylvania to name just a few so vast",
            "0:50 were the waves of German bodies crashing",
            "0:52 on America's Shores every year that of",
            "0:54 approximately 516 000 Union Soldiers two",
            "0:57 hundred thousand were born in the German",
            "0:59 Confederation and after the war it did",
            "1:02 not stop between 1880 and 1890 another 1",
            "1:05 million five hundred thousand Germans",
            "1:07 immigrated to the U.S by this time",
            "1:09 forcing the Garfield Administration to",
            "1:10 Grapple simulating the largest share of",
            "1:13 foreign-born people in the United States",
            "1:14 in her entire history and only three",
            "1:17 years later by 1893 over 800 German",
            "1:20 language journals were being printed in",
            "1:22 the United States every month it may",
            "1:24 seem hard to believe now but more",
            "1:26 Germans fled Europe for America than",
            "1:28 Irish and Italians combined by 1930 one",
            "1:31 in 10 U.S citizens were German Americans",
            "1:33 and mafias had spread their Roots deep",
            "1:35 into American society you see at the",
            "1:37 dawn of the 20th century there were many",
            "1:39 lucrative mafias including the costra",
            "1:41 Nostra Italian the kosher Nostra Jewish",
            "1:44 the Hudson Mobsters Irish the Purple",
            "1:47 Gang Jewish West Side mob Irish and the",
            "1:50 infamous Russian mafia",
            "1:53 Bingo however crucially there were no Migration",
            "1:55 sauerkraut kids despite vast",
            "1:58 overwhelming immigration and a shared",
            "1:59 sense of cultural Identity or a language",
            "2:01 at least the Germans never developed a",
            "2:04 mafia in the United States why well the",
            "2:07 answer is unclear it's never been",
            "2:09 studied Chet gbt won't give you a good",
            "2:12 answer however from our investigation",
            "2:14 German American immigrants can be",
            "2:15 divided into two categories during the",
            "2:18 19th century when millions of German",
            "2:19 speakers were traveling to the new world",
            "2:21 the majority were Southern Germans from",
            "2:23 rural farms while a minority were",
            "2:26 Northern German political Exiles like",
            "2:27 the 48ers and once they arrived in the",
            "2:29 U.S rather than settling in port cities",
            "2:31 in New York and Boston like their",
            "2:34 European comrades they instead chose to",
            "2:36 move largely west of the Appalachians",
            "2:38 Germans chose farming in newly created",
            "2:40 States like Ohio Indiana and Wisconsin",
            "2:42 this unique decision LED early Germans",
            "2:44 to live largely excluded from America's",
            "2:46 new developing industrial city life and",
            "2:49 as the Germans primarily worked on large",
            "2:51 Farms it meant new German immigrants",
            "2:53 lived large physical distances from",
            "2:55 other German immigrants and this trend",
            "2:57 continued well into the 1900s until many",
            "2:59 rural towns were primarily German",
            "3:01 speaking and culturally Protestant a map",
            "3:03 of demographics in 2023 shows how this",
            "3:06 unique German migration pattern birthed",
            "3:08 and primarily shaped what we now call",
            "3:10 the American West a region culturally",
            "3:13 distinct from other parts of America",
            "3:15 while Irish and Italian Americans",
            "3:16 densely clustered around Boston and",
            "3:18 Russian Jews set up in New York and",
            "3:20 later Florida Germans at the time chose",
            "3:22 to spread thinly over a vast area of the",
            "3:24 Republic and this decentralized life",
            "3:26 made it less likely a family or families",
            "3:28 could seize power and set up a",
            "3:30 centralized economic structure like the",
            "3:32 mafia",
            "3:34 foreign",
            "3:39 [Music]",
            "3:40 because Germans compared to other",
            "3:43 Europeans earn their living from farming",
            "3:44 and Rural trade far away from the",
            "3:46 epicenter of American industry it's",
            "3:48 likely they didn't experience the",
            "3:50 extreme levels of discrimination their",
            "3:52 Irish and Italian brothers did like",
            "3:54 being cut out of labor jobs therefore",
            "3:55 they likely felt less of a necessity to",
            "3:58 organize into hierarchies like the",
            "3:59 Italians that Irish did in order to open",
            "4:01 illicit businesses where they could earn",
            "4:03 a living in the city and provide for",
            "4:05 their families in a more libertarian",
            "4:07 markets like gambling drug running",
            "4:08 prostitution and racketeering but",
            "4:10 finally the total lack of a German Mafia",
            "4:12 could rest on perception as outside",
            "4:15 Chicago all major American cities during",
            "4:17 the Gilded Age were located on the east",
            "4:19 coast and since Metropolitan Life took",
            "4:21 place far away from the Heartland what",
            "4:23 nefarious activities did occur one",
            "4:25 thousand miles away on the great lakes",
            "4:27 or Great Plains were of little concern",
            "4:29 to the average American let alone the",
            "4:30 wealthy prior to the automobile",
            "4:32 telephone or radio it's likely any",
            "4:35 German criminal organizations that did",
            "4:37 occur went less documented by newspapers",
            "4:39 and police as at the time these",
            "4:41 institutions existed mainly in large",
            "4:42 cities where the Irish Italian Jews were",
            "4:46 already attracting focus and operating",
            "4:48 indeed almost as a corollary to the",
            "4:50 millions of poor Germans settling the",
            "4:52 Midwest the rich educated Germans did",
            "4:54 prefer the cities people like Albert",
            "4:56 Einstein Fritz Lang Marlene Dietrich",
            "4:59 Hans Hoffman Walter cropus Kurt wheel",
            "5:02 Franz Boaz Max Weber again however these",
            "5:05 German immigrants faced less",
            "5:06 discrimination to earning a living as",
            "5:08 they were able to write or teach for a",
            "5:10 living rather than forced to sell their",
            "5:12 labor over time this meant the",
            "5:13 german-american organization that did",
            "5:15 occur in the United States was often",
            "5:17 frequently more political than economic",
            "5:19 a La Mafia in nature by the 1930s German",
            "5:22 American thinkers and writers had had",
            "5:24 more time to unify their Brethren on",
            "5:26 political or scientific causes like",
            "5:28 teaching physics at the University of",
            "5:30 Chicago brewing beer in Milwaukee or",
            "5:32 Goose stepping in New York City",
            "5:34 Ironically in a karmic twist of fate in",
            "5:36 the U.S it would be the Jewish Mafia the",
            "5:39 beat German senseless during Adolf",
            "5:41 Hitler's rise to power",
            "5:43 with us and feel",
            "5:46 you see by 1930 12 million German The Jewish Mafia",
            "5:49 immigrants lived in the U.S and some 1",
            "5:51 in 500 were active members of the German",
            "5:54 American wound the wound thrived as a",
            "5:56 National Organization that supported",
            "5:58 Adolf Hitler and pledged allegiance to",
            "6:00 the new Reich and on a crisp day in",
            "6:02 October 1938 many American Nazis marched",
            "6:05 excitedly to a rally on New York's Upper",
            "6:07 East Side the heart of the historic",
            "6:09 German Town in New York City after the",
            "6:11 American booned Nazi rally finished",
            "6:13 members gathered into a swastika Laden",
            "6:16 Ballroom do here Albert a fervor",
            "6:19 Hitler supporter deliver what would have",
            "6:21 been I'm sure a pathos invoking speech",
            "6:24 but it never happened according to news",
            "6:26 reports at the time a Mr Mayor Lansky",
            "6:29 and his Jewish gangster friends along",
            "6:31 with a group called Murder Inc quietly",
            "6:33 arrived at the rally broke into three",
            "6:36 groups and surrounded the building as",
            "6:37 gathered his notes to give his talk",
            "6:39 five Jewish gangsters entered the",
            "6:41 ballroom second floor while five more",
            "6:43 waited outside with pool cues and",
            "6:45 baseball bats in the back of the room Mr",
            "6:47 Lansky and his Jewish men entered",
            "6:49 listened briefly to the Nazi speech and",
            "6:52 then Unleashed Mayhem a firsthand",
            "6:54 witness at the event said men who knew",
            "6:56 how to March were fighting men who knew",
            "6:58 how to hurt quickly scattered about late",
            "7:00 injured Nazis everywhere some lay",
            "7:02 unconscious from being pummeled in the",
            "7:04 head the gangster's only agreement with",
            "7:06 the New York police was apparently not",
            "7:08 to kill anyone a goal they only barely",
            "7:10 accomplished after beating one Boon",
            "7:12 member semi-conscious members of Murder",
            "7:14 Inc tossed the man out a second story",
            "7:16 window it seems farming and philosophy",
            "7:18 would only take German Americans so far",
            "7:20 in this life so the absent German Mafia",
            "7:22 in American history is a curious",
            "7:24 question without a single answer",
            "7:26 nonetheless German immigrants unique",
            "7:28 migration patterns and economic",
            "7:30 background being mainly Farmers thinkers",
            "7:32 or Nazis rather than laborers likely led",
            "7:35 to less of a need for organized crime",
            "7:36 and therefore a German Mafia if you",
            "7:39 found this video as interesting as I did",
            "7:41 researching it please like And subscribe",
            "7:43 thank you for watching I'll see in the",
            "7:44 next one bye",
            "8:02 thank you",
          
          
          ]
          
        const result = await model.generateContentStream(prompt_text);
        
        // Handle stream
        const stream = result.stream;
        // console.log(result.stream);
        // console.log(typeof result.stream);
        
        for await (const chunk of stream) {
        //     const chunkString = chunk.text().toString();
            console.log(chunk.text());}}
            // const words = chunkString.split(/\s+/);
            // let accumulatedWords = '';
            // for (const word of words) {
            // //     // Call a function to handle each word individually
            //     accumulatedWords += word + ' '
            //     // await processWord(word);
                
            // }
            
            // await processWord(accumulatedWords.trim());
            // accumulatedWords = '';
            // await delay(100);
        

        // Call the other function and pass the generated content
       

        // Handle promise
        // const response = await result.response;}
        // console.log("Final response:", response);
     catch (error) {
        console.error("Error:", error);
    }
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

testGenerateContentStream();
// async function processContent(content) {
//     // Process the generated content here
//     console.log(content);
// }