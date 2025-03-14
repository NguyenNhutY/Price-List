// ✅ Lazy-load cho hình ảnh lớn
const logo = async () => await import("./logo.png");
const backend = async () => await import("./backend.png");
const creator = async () => await import("./creator.png");
const mobile = async () => await import("./mobile.png");
const web = async () => await import("./web.png");

// ❌ Không cần lazy-load icon nhỏ vì chúng có dung lượng thấp
import github from "./github.png";
import menu from "./menu.svg";
import close from "./close.svg";

// ✅ Nhóm ảnh tech vào một object để dễ quản lý
const techImages = {
  css: () => import("./tech/css.png"),
  docker: () => import("./tech/docker.png"),
  figma: () => import("./tech/figma.png"),
  git: () => import("./tech/git.png"),
  html: () => import("./tech/html.png"),
  javascript: () => import("./tech/javascript.png"),
  mongodb: () => import("./tech/mongodb.png"),
  nodejs: () => import("./tech/nodejs.png"),
  reactjs: () => import("./tech/reactjs.png"),
  redux: () => import("./tech/redux.png"),
  tailwind: () => import("./tech/tailwind.png"),
  typescript: () => import("./tech/typescript.png"),
  threejs: () => import("./tech/threejs.svg"),
};

// ✅ Nhóm logo công ty
const companyLogos = {
  meta: () => import("./company/meta.png"),
  shopify: () => import("./company/shopify.png"),
  starbucks: () => import("./company/starbucks.png"),
  tesla: () => import("./company/tesla.png"),
};

// ✅ Nhóm hình ảnh dự án


export {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  techImages,
  companyLogos,

};
