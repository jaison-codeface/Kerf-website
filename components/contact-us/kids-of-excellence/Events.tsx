import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import React from "react";
import discoveringPurpose from "@/assets/images/events/Discovering Purpose in God's Plan.webp";
import FaithAsTheBedrock from "@/assets/images/events/Faith as the Bedrock.webp";
import FosteringACommunityOfBelievers from "@/assets/images/events/Fostering a Community of Believers.webp";
import TheEmbodimentOfVirtue from "@/assets/images/events/The Embodiment of Virtue.webp";
import LeftContentRightImg from "@/ui/LeftContentRightImg";

const data = [
  {
    title: "Faith as the Bedrock",
    description:
      "Faith is the cornerstone upon which ‘Our Kids of Excellence’ will build their lives. In a world teeming with uncertainties, faith provides a steadfast anchor, a source of unwavering strength, and an unshakable belief in a Higher Power. By imparting the knowledge of scripture, fostering an intimate connection with prayer, and exemplifying a life lived in accordance with God’s teachings, we sow the seeds of a profound and lasting faith within their hearts. In doing so, we equip them with a spiritual armor that will shield them from the storms of doubt and adversity they are bound to face.",
    image: FaithAsTheBedrock,
  },
  {
    title: "The Embodiment of Virtue",
    description:
      "Character is the outward manifestation of inner virtue, the moral compass that guides ‘Our Kids of Excellence’ in their interactions with the world. It is through character that they will navigate challenges, make ethical choices, and demonstrate integrity in all they do. Through the teachings of compassion, honesty, humility, and love, we sculpt their character, creating a solid foundation upon which they will build a life of purpose and righteousness.",
    image: TheEmbodimentOfVirtue,
  },
  {
    title: "Discovering Purpose in God's Plan",
    description:
      "Each child, a unique creation of the Divine, has a purpose woven into the very fabric of their being. As stewards, it is our sacred duty to help them discern and embrace this purpose. By nurturing their spiritual gifts, talents, and inclinations, we empower them to fulfill their destined roles in the grand tapestry of God’s design. Through prayerful discernment and a deep exploration of their passions, ‘Our Kids of Excellence’ embark on a journey of self-discovery that will lead them to their God-ordained calling.",
    image: discoveringPurpose,
  },
  {
    title: "Fostering a Community of Believers",
    description:
      "In the quest to raise ‘Our Kids of Excellence’, we recognize the invaluable role of community. Through a nurturing and supportive environment, we create a space where these young souls can grow, learn, and flourish together. By surrounding them with like-minded mentors, peers, and examples of faith, we provide a solid framework of fellowship, reinforcing the values we seek to instill.",
    image: FosteringACommunityOfBelievers,
  },
];

const Events = () => {
  return (
    <SectionWrapper
      classBottom={`${main_padding.y} flex-col items-center gap-20`}
    >
      {data.map((item, idx) => (
        <LeftContentRightImg
          key={idx}
          image={item.image}
          title={item.title}
          subtitle={item.description}
          direction={idx % 2 === 0 ? "opposite" : "normal"}
        />
      ))}
    </SectionWrapper>
  );
};

export default Events;
