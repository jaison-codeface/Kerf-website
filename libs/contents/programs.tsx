import { StaticImageData } from "next/image";

import IntercessoryPrayerMinistry from "@/assets/icons/our programs/Intercessory Prayer Ministry.webp";
import MarriageMinistry from "@/assets/icons/our programs/Marriage Ministry.webp";
import MediaMinistry from "@/assets/icons/our programs/Media Ministry.webp";
import MenOfValor from "@/assets/icons/our programs/Men of Valor.webp";
import MusicMinistry from "@/assets/icons/our programs/Music Ministry.webp";
import Outreach from "@/assets/icons/our programs/Outreach.webp";
import SinglesMinistry from "@/assets/icons/our programs/Singles Ministry.webp";
import WomenOfDestiny from "@/assets/icons/our programs/Women Of Destiny.webp";
import YouthMission from "@/assets/icons/our programs/Youth Mission.webp";

// bg images
import KidsOfExcellenceBg from "@/assets/images/our programmes/Kids Of Excellence bg.webp";
import MenOfValorBg from "@/assets/images/our programmes/Man of Valour bg.webp";
import MusicMinistryBg from "@/assets/images/our programmes/Music Ministry bg.webp";
import OutreachBg from "@/assets/images/our programmes/Outreach bg.webp";
import WomenOfDestinyBg from "@/assets/images/our programmes/Women Of Destiny bg.webp";
import YouthMissionBg from "@/assets/images/our programmes/Youth Mission bg.webp";

type Data = {
  title: string;
  subtitle: string;
  description: string | JSX.Element;
  email: string;
  logo: StaticImageData;
  heroSectionImage: StaticImageData;
  statement?: boolean;
  slug: string;
}[];

const data: Data = [
  {
    title: "Outreach",
    subtitle:
      "Extending God's Unconditional Love: Our Holistic Outreach Embraces the Marginalized with Compassion, Belonging, and Empowerment to Catalyze Lasting Transformation.",
    email: "outreach.lga@gmail.com",
    logo: Outreach,
    heroSectionImage: OutreachBg,
    slug: "outreach",
    statement: true,
    description: (
      <>
        Fueled by Christ`s boundless love, our church outreach program extends a
        compassionate embrace to the marginalized, vulnerable, and underserved
        in our local and global communities. We are dedicated to providing
        holistic care and practical support, meeting individuals and families
        physical, emotional, and spiritual needs. <br />
        <br /> Through collaborative partnerships and intentional
        relationship-building, we engage in a comprehensive approach that
        fosters a profound sense of belonging, instills hope, and empowers those
        we serve.
        <br />
        <br /> Our commitment lies in embodying the hands and feet of Jesus,
        transcending boundaries to create transformative impact. We strive to be
        agents of enduring change, offering more than temporary relief - our aim
        is to uplift lives, restore dignity, and pave pathways toward
        self-sufficiency and flourishing. Driven by this sacred calling, we pour
        out Christ`s unconditional love through our actions, words, and deeds,
        radiating His light into the darkest corners.
      </>
    ),
  },
  {
    title: "Music Ministry",
    subtitle:
      "Igniting Hearts for Christ through Melodic Reverence: Our Music Ministry's Passion to Guide Souls in Authentic Worship, Biblical Truth, and Unwavering Devotion.",
    email: "musicandarts.lga@gmail.com",
    logo: MusicMinistry,
    heroSectionImage: MusicMinistryBg,
    slug: "music-ministry",
    statement: true,
    description: (
      <>
        Teach the Gospel of Jesus Christ through song and praise. Our music
        ministry is dedicated to imparting the transformative message of the
        Gospel through the powerful expressions of song and praise. With
        reverence and skill, we craft melodies and lyrics that resonate with the
        eternal truths of Christ&apos;s teachings, using the universal language
        of music to touch hearts and souls alike. <br />
        <br />
        Lead the congregation in worship and praise. As worship leaders, we have
        the sacred responsibility of guiding the congregation on a profound
        journey of spiritual devotion and adoration. Through uplifting hymns,
        contemporary anthems, and heartfelt invocations, we create an atmosphere
        of transcendent praise, fostering an intimate connection between the
        faithful and their Heavenly Father. Encourage believers in their walk
        with Jesus Christ by telling of God&apos;s good works. <br /> Our
        testimonies resound with the boundless grace and innumerable good works
        of our Almighty God, serving as a beacon of hope and inspiration for
        believers striving to walk the righteous path alongside Christ.
      </>
    ),
  },
  {
    title: "Men of Valor",
    subtitle: "",
    email: "menofvalor.lga@gmail.com",
    logo: MenOfValor,
    heroSectionImage: Outreach,
    slug: "men-of-valor",
    description: "",
  },
  {
    title: "Media Ministry",
    subtitle: "",
    email: "mediaministrylga@gmail.com",
    logo: MediaMinistry,
    heroSectionImage: Outreach,
    slug: "",
    description: "",
  },
  {
    title: "Children & Youth Mission",
    subtitle:
      "Cultivating the Next Generation of Steadfast Believers: Innovative Biblical Discipleship Forging Credible, Committed Youth into Lifelong Disciples Through Doctrinally-Sound, Relevant Training and Christ-Centered Worship.",
    email: "outreach.lga@gmail.com",
    logo: YouthMission,
    heroSectionImage: YouthMissionBg,
    slug: "children-and-youth-mission",
    description: (
      <>
        The sacred mission of the Youth Department at Loving Grace Assembly is
        to nurture and guide the holistic development of credible, steadfast
        Christian disciples. <br />
        <br /> Through a multifaceted approach rooted in Biblical truth and
        sound doctrine, we aim to shape the next generation of believers. Our
        innovative educational programs, immersive training initiatives, and
        spiritually enriching worship experiences are meticulously designed to
        be relevant and engaging for young minds and hearts. We strive to
        empower youth with the tools, knowledge, and unwavering faith required
        to navigate life&apos;s challenges while remaining committed to Christ&apos;s
        teachings. <br />
        <br />
        By fostering an environment of intellectual curiosity, spiritual growth,
        and personal accountability, we equip our youth to become beacons of
        light, exemplifying Christ&apos;s love through their words and actions. The
        Youth Department is devoted to raising credible, resilient disciples who
        will carry forth the Gospel message with conviction and authenticity
        throughout their lifelong journey of faith.
      </>
    ),
  },
  {
    title: "Intercessory Prayer Ministry",
    subtitle: "",
    email: "prayer.lga@gmail.com",
    logo: IntercessoryPrayerMinistry,
    heroSectionImage: Outreach,
    slug: "",

    description: "",
  },
  {
    title: "Singles Ministry",
    subtitle: "",
    email: "singles.lga@gmail.com",
    logo: SinglesMinistry,
    heroSectionImage: Outreach,
    slug: "",
    description: "",
  },
  {
    title: "Marriage Ministry",
    subtitle: "",
    email: "marriage.lga@gmail.com",
    logo: MarriageMinistry,
    heroSectionImage: Outreach,
    slug: "",
    description: "",
  },
  {
    title: "Women Of Destiny",
    subtitle:
      "Awakening Women's Divine Potential: Empowering Purpose, Identity, and World-Changing Faith Through Biblical Mentorship and Compassionate Community.",
    email: "",
    logo: WomenOfDestiny,
    heroSectionImage: WomenOfDestinyBg,
    slug: "women-of-destiny",
    statement: true,
    description: (
      <>
        Women of Destiny empowers women to uncover their divine purpose, embrace
        their unique identity, and nurture a vibrant faith. We foster a
        supportive, encouraging community that uplifts and inspires. <br />
        <br />
        Through transformative biblical teachings, mentorship, and outreach
        initiatives, we equip women with the tools to live purposeful lives. Our
        aim is to catalyze positive change by helping women profoundly impact
        their families, communities, and the world at large. We guide women to
        become agents of spiritual and societal transformation. By awakening
        their God-given potential, we enable women to confidently walk in their
        calling, using their gifts and influence to better the lives of others.{" "}
        <br />
        <br />
        Women of Destiny provides a nurturing environment for personal growth,
        character development, and the cultivation of an unwavering relationship
        with Christ. Our ministry champions women as they step into their
        eternal destiny.
      </>
    ),
  },
];

export default data;
