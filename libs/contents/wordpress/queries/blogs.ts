import { blogsQuery } from "./modules";
const data = `{
  blogs(where: {orderby: {field: MODIFIED, order: DESC}}, last: 14)  {
  nodes { 
    ${blogsQuery}
    }
  }
}`;

export default data;
