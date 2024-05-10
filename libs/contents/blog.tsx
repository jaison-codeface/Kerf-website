import { StaticImageData } from "next/image";
import whoDoYouTrust from "@/assets/images/blogs/Who Do You Trust _.webp";
import LiveonPurpose from "@/assets/images/blogs/Live on Purpose.webp";
import GodOverTheInevitable from "@/assets/images/blogs/God Over The Inevitable.webp";

type Data = {
  title: string;
  subtitle: string;
  description: string | JSX.Element;
  author: string;
  date: string;

  heroSectionImage: StaticImageData;
  slug: string;
}[];

const data: Data = [
  {
    title: "Who Do You Trust ?",
    author: "Loretta Sanders",
    subtitle:
      "Transcending Life's Dissonant Melodies Through Steadfast Trust: How the Off-Key Anthems of the Faithful Become Sweet Praises to Heaven's Ears",
    description: (
      <>
        Trust in the Lord with all your heart And do not lean on your own
        understanding.Proverbs 3:5 NASB1995 The song says “I will trust in the
        Lord. I will trust in the Lord until I die”. As a youth and young adult,
        it worked my nerves every time the senior choir sang the hymn “I Will
        Trust In Lord.” As a person that hears the sounds of music, It seemed
        everybody in the church picked their own note and melody to sing it by.
        It didn’t matter if it was 10 people or 110 people in the church, it
        always sounded the same…OFF! And let’s not forget the random “Yes Sir!”
        From the men’s corner. Drove me nuts! Now as a seasoned adult, that is,
        and have lived through some stuff, I’m screaming this song all off key
        right along with the senior choir. As I’ve become wiser, I have realized
        that everyone was singing a different note and tune because to each one
        this song carried a different testimony. Every note that was held too
        long was powered with the praise that the Father had come through on His
        promise. <br />
        Every note sung off-key symbolized the expectation of hope. <br />
        Every shake in someone’s voice caused by the flowing of tears witnessed
        to the glory of our Lord and Savior turning sorrow to joy. <br />
        What was unpleasing to me was a sweet sound to heaven. <br />
        Are you trusting Him today? Or are you like I was? So confused by the
        noise that you are missing your moments in His presence. <br />
        How would you sound if you sang the song I Will Trust in the Lord? Would
        tears fall? Would you be off key? Would he hear your praise in the
        melody? Psalm 20:7-8 says Some trust in chariots and some in horses, but
        we trust in the name of the Lord our God. They are brought to their
        knees and fall, but we rise up and stand firm. <br />
        Sing your tune! Don’t get distracted! Trust Him! And as His word
        promised you will stand.
      </>
    ),
    date: "Aug 18",
    heroSectionImage: whoDoYouTrust,
    slug: "who-do-you-trust",
  },
  {
    title: "Live on Purpose",
    author: "Loretta Sanders",
    subtitle:
      "Transcending Life's Dissonant Melodies Through Steadfast Trust: How the Off-Key Anthems of the Faithful Become Sweet Praises to Heaven's Ears",
    description: (
      <>
        Today I want to encourage you to continue living on purpose. When we are
        living according to God’s purpose for our life, there are two common
        challenges that we will meet. <br /> <br />
        1. Movement outside of our comfort zone. <br />
        2. Opposition <br /> <br />
        These two seem to be married to each other. Sometimes they come
        separately and other times it seems like they show up together.
        Nonetheless, we must believe that with God’s help, we shall overcome
        them. The Bible says in 1John 4:4, “greater is He who is in you than he
        who is in the world.” Knowing that our Lord Jesus Christ has already
        overcome the world, and it is His spirit that lives inside of each of
        us, we are already victorious outside our comfort zone and the
        challenges of opposition. <br /> <br />
        No matter what it looks like, feels like, or the report of man, if we
        continue to live according to God’s purpose for our life, Psm 34:10
        teaches us, “The lions may grow weak and hungry, but those who seek the
        Lord lack no good thing. <br /> <br />
        Beloved, choose this day to live on purpose. <br /> <br />
        Peace and Blessings <br /> <br />
        Pastor Loretta
      </>
    ),
    date: "Aug 18",
    heroSectionImage: LiveonPurpose,
    slug: "live-on-purpose",
  },
  {
    title: "God Over The Inevitable",
    author: "Loretta Sanders",
    subtitle:
      "Transcending Life's Dissonant Melodies Through Steadfast Trust: How the Off-Key Anthems of the Faithful Become Sweet Praises to Heaven's Ears",
    description: (
      <>
        A stone was brought and placed over the mouth of the den, and the king
        sealed it with his own signet ring and with the rings of his nobles so
        that Daniel’s situation might not be changed. Daniel had no way out of
        his situation. Even the person who thought they had all power, the king,
        could not change Daniel’s situation. Death was all but inevitable for
        Daniel. Are you looking at what appears to be an inevitable death? Maybe
        not physical death, but the death of your marriage, death of your
        finances, death of your joy, death of your peace, death of self-worth,
        or death of ___. <br />
        <br />
        Glory be to God that we serve a living God that has power over life and
        death. <br />
        <br />
        Let’s look at what the king did. The king returned to his palace and
        spent the night without eating and without any entertainment being
        brought to him. And he could not sleep. The king was fasting and praying
        for the safety of Daniel. Even as a nonbeliever, the king knew the power
        of fasting. I also think that he was sorrowful and was asking the God of
        Daniel for forgiveness.
        <br />
        <br />
        The bible says in verse 22 that ultimately, God saved Daniel because He
        found him innocent. But it’s the testimony of king that still rings true
        for us today <br />
        <br />
        He rescues, and he saves; he performs signs and wonders in the heavens
        and on the earth. He has rescued Daniel from the power of the lions.”
        <br />
        <br />
        And He will rescue us. Beloved, allow the testimony of King to encourage
        you. No matter what the situation looks like, only God has the final
        say. Daniel was facing inevitable death, and no one on the face of the
        earth could have changed his situation. BUT GOD!! We serve a God that
        sits high and looks low. He will never leave us nor forsake us. He loves
        us. Glory to his name! As we continue in our fasting, put that situation
        that appears to be heading for inevitable death before God, and watch
        Him work. Remember He is a miracle worker.
        <br />
        <br />
        Peace and Blessings,
        <br />
        <br />
        Pastor Loretta
      </>
    ),
    date: "Aug 18",
    heroSectionImage: GodOverTheInevitable,
    slug: "god-over-the-nevitable",
  },
];

export default data;
