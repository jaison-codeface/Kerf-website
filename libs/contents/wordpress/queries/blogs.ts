import { blogsQuery } from "./modules";
const data = (type: "all" | "single", id?: string) => {
  if (type === "all")
    return `{
    blogs(where: {orderby: {field: MODIFIED, order: DESC}}, last: 14)  {
      nodes { 
        ${blogsQuery}
        }
        }
        }`;
  if (type === "single")
    return `{
           blogs(where: {name: "${id}"}) {  {
            nodes { 
              ${blogsQuery}
              }
              }
              }`;
};

export default data;
