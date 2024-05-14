import James from "@/assets/images/Team/Dr. James Henry Logan, Jr..webp";
import loretta from "@/assets/images/Team/Dr. Loretta Sanders.webp";

import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import { StaticImageData } from "next/image";

type Datas = {
  title: string;
  subtitle: string;
}[];

type Data = {
  title: string;
  position: string;
  image: StaticImageData;
  description: JSX.Element;
  descriptionForSinglePage: string | JSX.Element;
  socialMedia: {
    link: string;
    icon: any;
  }[];
  RequestToSpeak?: {
    title: string;
    btns: {
      link: string;
      title: string;
      mode: "night" | "day";
    }[];
  };
  slug: string;
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
    descriptionForSinglePage: (
      <>
        Dr. James H Logan, II, is the founder of Jim Logan Evangelistic Ministry
        (JLEM), Co-Founder and overseer of Kingdom Fellowship Christian Center,
        birthed in 2004 with 65 members, and Founder and Presiding Bishop of
        Kingdom Fellowship of Churches, International founded in 2012.
        <br />
        <br />
        Dr. Logan finished his secondary education at Williston-Northampton
        School in Easthampton, MA; received his Bachelor of Arts Degree from
        Kenyon College in Gambier, OH; his Master of Divinity Degree from
        Princeton Theological Seminary in Princeton, NJ; and, his Doctor of
        Ministry Degree from Columbia Theological Seminary in Decatur, GA; did
        post-doctoral work at Regent University in Virginia Beach, VA. His first
        book was released in March entitled: Moses: A Profile in Effective
        Spiritual Leadership, available through Amazon.
        <br />
        <br />
        Dr. Logan is best known for his powerful preaching and teaching in
        congregations and conferences all over the United States, and
        internationally in The Democratic Republic of the Congo, Nigeria, and
        Brussels, Belgium.
        <br />
        <br />
        A former member of the Board of Trustees of Princeton Theological
        Seminary, Dr. Logan also serves on the local Board of Advisors and as an
        Adjunct Professor of Urban Ministry for the Charlotte Campus of Gordon
        Conwell Theological Seminary; and, as a professor and Head of the
        Department of Urban Christian Studies at Charlotte Christian College &
        Theological Seminary in Charlotte, North Carolina.
        <br />
        <br />
        As presiding prelate of Kingdom Fellowship of Churches, International,
        he oversees a cadre pastors, ministers and churches seeking significance
        in the Kingdom of God. <br /> <br />
        He is married to Elder Sybil ‘CeCe’ Logan, has three children: a
        daughter; two sons; and five grandchildren, along with countless numbers
        of spiritual daughters and sons.
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

    slug: "james-henry-logan-jr",
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
    descriptionForSinglePage: (
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
        <br />
        <br />
        Loving Grace Assembly received its charter from the state of North
        Carolina on December 20, 2017 (Loretta’s birthday). Pastor Loretta was
        elected to serve as Pastor by board members and consecrated in January
        2018. As the ministry continued to expand, so did Pastor Loretta. In
        2019, Loving Grace Assembly joined with Kingdom Fellowship of Churches
        International, headquartered in Charlotte, NC, under Bishop James Logan,
        where Pastor Loretta was ordained an Elder. Besides joining Kingdom
        Fellowship of Churches International, she also became a member of the
        Potter House International Pastor Alliance Dallas, TX. Since starting
        Loving Grace Assembly, Pastor Loretta has completed theology and
        homiletics courses. Elder Dr. Loretta has also received her Master’s
        Degree in Theology and Doctorate in Christian Counseling.
        <br />
        <br />
        Loretta’s favorite scripture comes from Luke 8:50 “50 Hearing this,
        Jesus said to Jairus, “Don’t be afraid; just believe, and she will be
        healed.”
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

    RequestToSpeak: {
      title: "Request Pastor Loretta to speak",
      btns: [
        { link: "", title: "Bold & Brave", mode: "night" },
        { link: "", title: "Contact", mode: "day" },
      ],
    },
    slug: "loretta-sanders",
  },
];

export default teamData;
