import James from "@/assets/images/Team/Dr. James Henry Logan, Jr..webp";
import loretta from "@/assets/images/Team/Dr. Loretta Sanders.webp";

import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import { StaticImageData } from "next/image";

type Data = {
  title: string;
  position: string;
  image: StaticImageData;
  description: JSX.Element;
  socialMedia: {
    link: string;
    icon: any;
  }[];
  readMoreLink: string;
  RequestToSpeak?: {
    title: string;
    btns: {
      link: string;
      title: string;
      mode: "night" | "day";
    }[];
  };
}[];

const teamData: Data = [
  {
    title: "Dr. James Henry Logan, Jr.",
    position: "Bishop",
    image: James,
    description: (
      <>
        Dr. James H Logan, II, is the founder of Jim Logan Evangelistic Ministry
        (JLEM), Co-Founder and overseer of Kingdom Fellowship Christian Center,
        birthed in 2004 with 65 members, and Founder and Presiding Bishop of
        Kingdom Fellowship of Churches, International founded in 2012.
        <br /> <br />
        Dr. Logan finished his secondary education at Williston-Northampton
        School in Easthampton, MA; received his Bachelor of Arts Degree from
        Kenyon College in Gambier, OH; his Master of Divinity Degree from
        Princeton Theological Seminary in Princeton, NJ; and, his Doctor of
        Ministry Degree from Columbia Theological Seminary in Decatur, GA; did
        post-doctoral work at Regent University in Virginia Beach, VA. His first
        book was released in March entitled: Moses: A Profile in Effective
        Spiritual Leadership, available through Amazon.
      </>
    ),
    socialMedia: [
      {
        link: "",
        icon: facebook,
      },
      {
        link: "",
        icon: instagram,
      },
    ],
    readMoreLink: "",
  },
  {
    title: "Dr. Loretta Sanders",
    position: "Pastor",
    image: loretta,
    description: (
      <>
        Elder Dr. Loretta Sanders is a Pastor, Educator, Counselor, Mother, and
        proud Grandmother of four. After ten years in North Carolina Schools,
        being led by a dream, in 2011, Loretta moved to Abu Dhabi, UAE, in
        pursuit of making a difference in the lives of children. She has served
        as Elementary Curriculum Director, Academic Principal, Conference
        Presenter, and Trainer. Loretta has presented at educational conferences
        throughout the Middle East and as far away as Porto, Portugal. However,
        none of these modes of presentation compares to God calling her to,
        Loving Grace Assembly. Built on the scripture 1 Tim1:14, “14 And the
        grace of our Lord was exceeding abundant with faith and love which is in
        Christ Jesus.” <br />
        <br />
        Before moving to the UAE, Loretta was a Hood Memorial AME Zion church
        member. Over her years at Hood, she served as Quarterly Conference
        secretary, Lay Council vice president, Sunday School Teacher, Christian
        Education Director, Varick Christian Education (VCE) president, sang in
        the choir, and served as Evangelism Assistant. She also served as youth
        minister at Calvary church here in Abu Dhabi. She never thought that
        these roles were preparing her for a pastoral role in the UAE.
      </>
    ),
    socialMedia: [
      {
        link: "",
        icon: facebook,
      },
      {
        link: "",
        icon: instagram,
      },
    ],
    readMoreLink: "",
    RequestToSpeak: {
      title: "Request Pastor Loretta to speak",
      btns: [
        { link: "", title: "Bold & Brave", mode: "night" },
        { link: "", title: "Contact", mode: "day" },
      ],
    },
  },
];

export default teamData;
