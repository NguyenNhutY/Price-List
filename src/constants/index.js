import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Reactjs Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Call API Developer",
    icon: backend,
  },
  {
    title: "Technology Bussiness Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 2",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
 const projects = [
  {
    title: "Gói Web Cơ Bản",
    price: "4.000.000 VND",
    description: "Website giới thiệu công ty, cửa hàng nhỏ, tối ưu SEO cơ bản, hiển thị tốt trên mobile.",
    features: [
      "Tên miền .com/.vn miễn phí 1.5 năm",
      "Bảo trì Web miễn phí 6 tháng",
      "Hosting SSD tốc độ cao 2GB",
      "Bảo mật SSL miễn phí",
      "Tích hợp Google Maps, liên hệ qua Zalo",
      "Giao diện tùy chỉnh theo yêu cầu",
    ],
  },
  {
    title: "Gói Web Chuyên Nghiệp",
    price: "8.000.000 VNĐ",
    description: "Dành cho doanh nghiệp, có nhiều tính năng nâng cao như quản lý sản phẩm, dịch vụ.",
    features: [
      "Tên miền .com/.vn miễn phí 1.5 năm",
      "Bảo trì Web miễn phí 6 tháng",
      "Hosting SSD tốc độ cao 5GB",
      "Bảo mật SSL miễn phí",
      "Tích hợp chatbot, hỗ trợ đa ngôn ngữ",
      "Quản lý sản phẩm, đơn hàng, khách hàng",
    ],
  },
  {
    title: "Gói Cao Cấp",
    price: "18.000.000 VNĐ",
    description: "Website thương mại điện tử, tích hợp thanh toán online, hệ thống bảo mật cao.",
    features: [
      "Tên miền .com/.vn miễn phí 1.5 năm",
      "Bảo trì Web miễn phí 6 tháng",
      "Hosting SSD tốc độ cao 10GB",
      "Bảo mật SSL miễn phí, bảo vệ DDoS",
      "Tích hợp thanh toán Momo, VNPAY, Paypal",
      "Quản lý kho, vận chuyển, chi tiết sản phẩm",
    ],
  },
  // Bạn có thể thêm nhiều gói khác ở đây nếu muốn
];
const prizelistfe = [
  {
    title: "Gói Làm Giao Diện Cơ Bản",
    price: "400.000 VND/Page",
    description: "Có kho dữ liệu Template Lading Page sẵn chỉnh theo thông tin khách hàng",
    time:"Giao hàng trong vòng 1-2 ngày"
  },
  {
    title: "Gói Làm Giao Diện Chuyên Nghiệp",
    price: " 1.200.000 VND/Page",
    description: "Lập trình giao diện theo yêu cầu figma. Cắt HTML đảm bảo pixel chuẩn",
    time:"Giao hàng trong vòng 1-4 ngày"
  },
  {
    title: "Gói Làm Giao Diện Cao Cấp",
    price: "2.000.000 VNĐ/Page",
    description: "Lập trình giao diện DashBoard Admin, hệ thống quản lý nội bộ dữ liệu.",
    time:"Giao hàng trong 4-8 ngày"
  }
  // Bạn có thể thêm nhiều gói khác ở đây nếu muốn
];
const prizelistfeapi = [
  {
    title: "Gói Làm API FE Cơ Bản",
    price: "1.000.000 VND",
    description: "Gọi API từ BE NODEJS (CRUD) Form Đăng Ký, Danh sách sản phẩm, bảng dữ liệu,Đăng Nhập, Đăng Xuất, Firebase.",
    time:"Giao hàng trong vòng 2-6 ngày"
  },
  {
    title: "Gói Làm API FE Chuyên Nghiệp",
    price: " 4.000.000 VND",
    description: "Gọi API từ BE (lọc, tìm kiếm, phân trang, xác thực người dùng, quản lý cơ sử dữ liệu), tích hợp JWT, Oauth",
    time:"Giao hàng trong vòng 6-14 ngày"
  },
  {
    title: "Gói Làm API FE Cao Cấp",
    price: "12.000.000 VNĐ",
    description: "Kết nối API realtime (WebSocket, GraphQL)",
    time:"Giao hàng trong 1-5 tháng"
  }
  // Bạn có thể thêm nhiều gói khác ở đây nếu muốn
];

const prizelistbeapi = [
  {
    title: "Gói Làm API BE Cơ Bản",
    price: "2.000.000 VND ",
    description: "Tạo Logic API BE Nodejs Form Đăng Ký, Danh Sách Sản Phẩm, Bảng Dữ Liệu, Đăng Nhập, Đăng Xuất, Firebase",
    time:"Giao hàng trong vòng 2-6 ngày"
  },
  {
    title: "Gói Làm API BE Chuyên Nghiệp",
    price: " 4.000.000 VND",
    description: "Tạo logic API BE Nodejs (lọc, tìm kiếm, phân trang, xác thực người dùng, quản lý cơ sử dữ liệu), tích hợp JWT, Oauth",
    time:"Giao hàng trong vòng 6-14 ngày"
  },
  {
    title: "Gói Làm API FE Cao Cấp",
    price: "15.000.000 VNĐ",
    description: "Tạo API BE Nodejs GraphQL, WebSocket, Microservice, Blockchain",
    time:"Giao hàng trong 1-5 tháng"
  }
  // Bạn có thể thêm nhiều gói khác ở đây nếu muốn
];

const prizelistool =[
  {
    title: "Dịch Vụ Tên Miền Cơ Bản",
    price: "200.000-400.000 VND",
    description: "Với những đuôi tên miền .bz; .de; .cc; .pw)",

  }, 
  {
    title: "Dịch Vụ Tên Miền Chuyên Nghiệp",
    price: "700.000-800.000 VND",
    description: "Với đuôi tên miền .com/ .vn/ .net)",

  }, 
  {
    title: "Dịch Vụ Tạo Hosting",
    price: "~1.000.000 VND",
    description: "Giá cả giao động tùy vào băng thông và dung lượng",

  }, 
  {
    title: "Dịch vụ bảo trì Web",
    price: "1.000.000 VND/ năm",
  },
  {
    title: "Dịch vụ chuyển file nói sang Word",
    price: "40.000 VND/ Turn",
  },
]

export {prizelistool,prizelistfe,prizelistbeapi,prizelistfeapi, services, technologies, experiences, testimonials, projects };
