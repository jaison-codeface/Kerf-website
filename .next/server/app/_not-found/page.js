(()=>{var e={};e.id=409,e.ids=[409],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9285:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>r.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>f,tree:()=>c}),i(7352),i(5866),i(9640),i(9644);var n=i(3191),o=i(8716),s=i(7922),r=i.n(s),a=i(5231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);i.d(t,l);let c=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.t.bind(i,5866,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,9640)),"/home/ameen/Desktop/codeface/Kerf website/app/layout.tsx"],loading:[()=>Promise.resolve().then(i.bind(i,9644)),"/home/ameen/Desktop/codeface/Kerf website/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,5866,23)),"next/dist/client/components/not-found-error"]}],d=[],u="/_not-found/page",m={require:i,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1887:(e,t,i)=>{Promise.resolve().then(i.bind(i,1698)),Promise.resolve().then(i.t.bind(i,2481,23))},7588:(e,t,i)=>{Promise.resolve().then(i.bind(i,4325))},7258:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2994,23)),Promise.resolve().then(i.t.bind(i,6114,23)),Promise.resolve().then(i.t.bind(i,9727,23)),Promise.resolve().then(i.t.bind(i,9671,23)),Promise.resolve().then(i.t.bind(i,1868,23)),Promise.resolve().then(i.t.bind(i,4759,23))},4325:(e,t,i)=>{"use strict";i.d(t,{default:()=>o});var n=i(8142);let o=({children:e,data:t})=>((0,n.Z)(e=>e.setUtilities)(t),e)},8142:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});let n=(0,i(114).Ue)(e=>({utilities:"",setUtilities:t=>e({utilities:t})}))},9640:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>f,generateMetadata:()=>m});var n=i(9510);i(7633);var o=i(1401),s=i.n(o),r=i(8570);let a=(0,r.createProxy)(String.raw`/home/ameen/Desktop/codeface/Kerf website/components/UtilitiesProvider.tsx`),{__esModule:l,$$typeof:c}=a;a.default;let d=(0,r.createProxy)(String.raw`/home/ameen/Desktop/codeface/Kerf website/components/UtilitiesProvider.tsx#default`);var u=i(6655);async function m({},e){let t=await (0,u.B)("seo"),i=(await e).openGraph?.images||[];return{title:t.utility.acf.title,description:t.utility.acf.description,keywords:t.utility.acf.keyWords,openGraph:{type:"website",url:"",title:t.utility.acf.title,description:t.utility.acf.description,siteName:"KERF",images:[t.utility.acf.favIcon.sourceUrl,...i]},icons:{icon:t.utility.acf.favIcon.sourceUrl,other:[{rel:"preconnect",url:"https://cfuat.in"},{rel:"dns-prefetch",url:"https://cfuat.in"}]}}}async function f({children:e}){let[t,i,o,r,a]=await Promise.all([(0,u.B)("treatments"),(0,u.B)("departments"),(0,u.B)("footer"),(0,u.B)("header"),(0,u.B)("seo")]);return n.jsx("html",{lang:"en",className:"scroll-smooth antialiased",suppressHydrationWarning:!0,children:n.jsx(d,{data:{treatments:t,departments:i,footer:o,header:r,seo:a},children:n.jsx("body",{className:`${s().className} ${s().variable}`,children:e})})})}},9644:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var n=i(9510),o=i(7710),s=i(9905);let r=()=>n.jsx("div",{className:"w-screen h-svh bg-off-white flex items-center justify-center ",children:(0,n.jsxs)("div",{role:"status",className:"flex items-center justify-center sm:h-20 h-[45px] max-w-sm  rounded-lg animate-pulse",children:[n.jsx(o.default,{src:s.Z,alt:"",placeholder:"empty",priority:!0,className:"h-full w-full object-contain"}),n.jsx("span",{className:"sr-only",children:"Loading..."})]})})},6655:(e,t,i)=>{"use strict";i.d(t,{B:()=>x});let n=`sourceUrl
          altText
          mediaDetails {
            width
            height
          }`,o=`
      title
      date
      slug
      author {
        node {
          name
        }
      }
      acf: acfBlog {
        featuredImage {
          ${n}
        }
        subtitle
        content
      }
`,s=` id
        title
        slug
        acf : acfDepartments {
          bannerImage {
            ${n}
          }
          sectionImage {
             ${n}
          }
          content
        }`,r=`title
                      slug
                      acf: acfDoctor {
                        designation
                        bannerImage {
                          ${n}
                        }
                        image {
                          ${n}
                        }
                        content
                      }`,a=`{
  page(id: "cG9zdDo3") {
    title
    slug
    id
    acf: acfHomePage {
      homeBanner {
        sectionImage {
          ${n}
        }
        sectionTitle
        sectionDescription
      }
      sectionAbout {
        title
        subtitle
        sectionImage {
           ${n}
        }
        description
        buttonText
        buttonLink
      }
      sectionBlog {
        sectionTitle
        sectionSubtitle
      }
      sectionContactUs {
        sectionDescription
        sectionTitle
        subtitle
        title
        sectionImage {
           ${n}
        }
        links {
          icon {
           ${n}
          }
          link
          linkTitle
          title
        }
      }
      sectionSpecialties {
        title
        subtitle
        buttonText
        buttonLink
        specialties {
          image {
           ${n}
          }
          title
        }
      }
      sectionTreatments {
        title
        subtitle
        services {
          image {
             ${n}
          }
          service
        }
      }
    }
  }
}`,l=`{
  page(id: "cG9zdDo2Mg==") {
    id
    title
    acf: acfAboutPage {
      bannerImage {
        ${n}
      }
      sectionAboutKerf {
        title
        content
      }
      sectionChairman {
        title
        subtitle
        description
        image {
          ${n}
        }
      }
      sectionMedicalInsurance {
        title
        description
        companyLogo {
          logoImage {
           ${n}
          }
        }
      }
      exploreOurWorld {
        sectionTitle
        sectionSubtitle
        sectionImage {
          image {
           ${n}
          }
          sizes {
            hight
            width
          }
        }
        description
        boxContentText1
        boxContentText2
      }
      sectionTestimonials {
        title
        subtitle
        testimonials {
          name
          comment
          designation
          image {
            ${n}
          }
        }
      }
      sectionVision {
        sectionImage {
          ${n}
        }
        visionAndMission {
          title
          subtitle
          description
        }
      }
    }
  }
}`,c=`{
  page(id: "cG9zdDoxMjc=") {
    title
    acf : acfContactUs {
      pageHeader {
        headerBanner {
          ${n}
        }
        pageTitle
      }
      firstSection {
        subtitle
        sectionTitle
        locations {
          title
          links {
            icon {
              ${n}
            }
            link
            title
          }
        }
        backgroundColors {
          color
        }
      }
      secondSection {
        title
        sectionImage {
          ${n}
        }
        mapImage {
          ${n}
        }
        directionLink
      }
    }
  }
}`,d=(e,t)=>"all"===e?`{
        departmentsTaxonomies {
          edges {
            node {
              id
              name
              slug
               doctors {
                  nodes {
                   ${r}
                  }
              }
            }
          }
        }
      }`:`{
        departmentsTaxonomies(where: {slug: "${t}"}) {
          edges {
            node {
              id
              name
              slug
              doctors {
                  nodes {
                   ${r}
                  }
              }
              departments {
                nodes {
                  ${s}
                }
              }
            }
          }
        }
      }`,u=(e,t)=>"all"===e?`{
    blogs(where: {orderby: {field: MODIFIED, order: DESC}}, last: 14)  {
      nodes { 
        ${o}
        }
        }
        }`:"single"===e?`{
           blogs(where: {name: "${t}"}) {  {
            nodes { 
              ${o}
              }
              }
              }`:void 0,m=(e,t)=>{switch(e){case"all":return`{
                doctors {
                    nodes {
                      ${r}
                    }
                  }
                }`;case"single":return`{
                doctors (where: {name: "${t}"}) {
                  nodes {
                     ${r}
                  }
                }
              }`;case"page":return`{
                page(id: "cG9zdDoxNzk=") {
                  id
                  title
                  acf: acfDoctors {
                    bannerImage {
                      ${n}
                    }
                    doctorSection {
                      title
                      subtitle
                    }
                  }
                }
              }`}},f=(e,t)=>{switch(e){case"all":return`{
        treatmentCategorys {
            nodes {
              id
              name
              slug
              treatments {
                nodes {
                  title
                  slug
                }
              }
            }
          }
        }`;case"single":return`{
              treatments(where: {name: "${t}"}) {
                nodes {
                  title
                  treatmentCategorys {
                    nodes {
                      name
                      id
                      slug
                    }
                  }
                  acf: acfTreatment {
                    treatmentTitle {
                      id
                      name
                      slug
                    }
                    bannerImage {
                      ${n}
                    }
                    sectionImage {
                      ${n}
                    }
                    content
                  }
                }
              }
            }`;case"related":return`{
                treatmentCategory(id: "dGVybTo1") {
                  id
                  name
                  slug
                  treatments {
                    nodes {
                      title
                      slug
                    }
                  }
                }
              }`;case"related doctors":return`{
              treatmentsTaxonomies(where: {slug: "${t}"}) {
                nodes {
                  id
                  name
                  slug
                  doctors {
                    nodes {
                      ${r}
                    }
                  }
                }
              }
            }`}},p=`{
  utility(id: "cG9zdDoyMDY=") {
    id
    title
    acf: acfFooter {
      logo {
        ${n}
      }
      description
      footerLinks {
        title
        links {
          link
          text
        }
      }
      socialMedia {
        link
        icon {
          ${n}
        }
      }
    }
  }
}`,g=`{
  utility(id: "cG9zdDoyMjM=") {
    id
    title
    acf: acfHeader {
      logo {
        ${n}
      }
      headerLinks {
        title
        link
      }
    }
  }
}`,A=`{
  utility(id: "cG9zdDoyMzA=") {
    acf: acfSeo {
      favIcon {
       ${n}
      }
      description
      keyWords
      title
    }
  }
}`,h=e=>({footer:p,header:g,seo:A})[e];async function b(e=""){let t=await fetch("https://kerf.ddhotel.in/graphql",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({query:e}),cache:"no-store"}),i=await t.json();if(i.errors)throw console.error(i.errors),Error("Failed to fetch API");return i.data}async function x(e,t){let i={home:a,about:l,"contact-us":c,department:d("single",t),departments:d("all"),blogs:u("all"),blog:u("single",t),doctor:m("single",t),doctors:m("all"),"doctor-page":m("page"),treatment:f("single",t),"treatments-related":f("related",t),treatments:f("all"),"treatments-related doctors":f("related doctors",t),footer:h("footer"),header:h("header"),seo:h("seo")};return await b(i[e])}},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{isNotFoundError:function(){return o},notFound:function(){return n}});let i="NEXT_NOT_FOUND";function n(){let e=Error(i);throw e.digest=i,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===i}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7352:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return o},default:function(){return s}});let n=i(6399),o="next/dist/client/components/parallel-route-default.js";function s(){(0,n.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9905:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});let n={src:"/_next/static/media/logo.4b84ce0f.webp",height:164,width:342,blurDataURL:"data:image/webp;base64,UklGRoIAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAmXGYs6+hnKzupcSswqqgoX9ol5yJcYMrABIeGhQTDwAAVlA4IDoAAADwAQCdASoIAAQAAkA4JYwCdH8AF8f2P8AA/pTYylyFRJnvkZAAN0/SJRoQsWLccZhsTvwdyTSv4AAA",blurWidth:8,blurHeight:4}},1698:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});let n={src:"/_next/static/media/logo.4b84ce0f.webp",height:164,width:342,blurDataURL:"data:image/webp;base64,UklGRoIAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAmXGYs6+hnKzupcSswqqgoX9ol5yJcYMrABIeGhQTDwAAVlA4IDoAAADwAQCdASoIAAQAAkA4JYwCdH8AF8f2P8AA/pTYylyFRJnvkZAAN0/SJRoQsWLccZhsTvwdyTSv4AAA",blurWidth:8,blurHeight:4}},7633:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),n=t.X(0,[814],()=>i(9285));module.exports=n})();