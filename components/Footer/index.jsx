"use client"
import { Typography } from "@material-tailwind/react";
 
const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Our Team", "Projects"],
  },
  {
    title: "Help Center",
    links: ["Discord", "Twitter", "GitHub", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
  },
  {
    title: "Products",
    links: ["Templates", "UI Kits", "Icons", "Mockups"],
  },
];
 
 
export function Footer() {
  return (
    <footer className="mb-auto  w-full bg-black text-white">
      <div className="  px-8 flex w-full flex-col items-center justify-center">
        <div className=" grid justify-items-center  w-full grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="text-white"
                className="mb-4 fontbold uppercase opacity-50"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography key={key} as="li" color="text-white" className="myfont">
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105 "
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-text-white-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center myfont text-text-white-900 md:mb-0"
          >
            All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-text-white-900 sm:justify-center">
            <Typography as="a" href="https://linkedin.com/in/ubaidahmed04" className="opacity-80 transition-opacity hover:opacity-100">
            <svg
            xmlSpace="preserve"
            viewBox="0 0 16 16"
            className="bi bi-linkedin"
            fill="currentColor"
            height={16}
            width={16}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
            />
          </svg>
            </Typography>
            <Typography as="a" href="https://www.facebook.com/profile.php?id=100055489695083&mibextid=ZbWKwL" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="https://www.instagram.com/ubaidahmed04" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            {/* <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Typography> */}
            <Typography as="a" href="https://www.github.com/ubaidahmed04" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
          }
// 
// import React from 'react'

// export const Footer = () => {
//   return (
//     <footer className="bg-gray-800 py-5 font-sans tracking-wide">
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-8">
//     <div>
//       <h4 className="text-lg font-semibold mb-6 text-white">About Us</h4>
//       <p className="text-gray-400 text-base">
//       MORENT
//       </p>
//     </div>
//     <div>
//       <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
//       <ul className="space-y-4">
//         <li>
//           <a
//             href="javascript:void(0)"
//             className="text-gray-400 hover:text-white text-base"
//           >
//             Web Development
//           </a>
//         </li>
//         <li>
//           <a
//             href="javascript:void(0)"
//             className="text-gray-400 hover:text-white text-base"
//           >
//             Mobile App Development
//           </a>
//         </li>
//         <li>
//           <a
//             href="javascript:void(0)"
//             className="text-gray-400 hover:text-white text-base"
//           >
//             UI/UX Design
//           </a>
//         </li>
//         <li>
//           <a
//             href="javascript:void(0)"
//             className="text-gray-400 hover:text-white text-base"
//           >
//             Digital Marketing
//           </a>
//         </li>
//       </ul>
//     </div>
//     <div className="space-y-4">
//       <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
//       <p className="text-gray-400 text-base">123 Main Street</p>
//       <p className="text-gray-400 text-base">City, State, Country</p>
//       <p className="text-gray-400 text-base">contact@example.com</p>
//       <p className="text-gray-400 text-base">+1 234 567 890</p>
//     </div>
//     <div>
//       <h4 className="text-lg font-semibold mb-6 text-white">Follow Us</h4>
//       <ul className="flex flex-wrap gap-x-5 gap-4">
//         <li>
//           <a href="javascript:void(0)" className="text-xl">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="inline w-6 h-6"
//               viewBox="0 0 512 512"
//             >
//               <path
//                 fill="#1877f2"
//                 d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z"
//                 data-original="#1877f2"
//               />
//               <path
//                 fill="#fff"
//                 d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z"
//                 data-original="#ffffff"
//               />
//             </svg>
//           </a>
//         </li>
//         <li>
//           <a href="javascript:void(0)" className="text-xl">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="inline w-6 h-6"
//               viewBox="0 0 176 176"
//             >
//               <g data-name="Layer 2">
//                 <rect
//                   width={176}
//                   height={176}
//                   fill="#0077b5"
//                   data-original="#0077b5"
//                   rx={24}
//                 />
//                 <path
//                   fill="#fff"
//                   d="M63.4 48a15 15 0 1 1-15-15 15 15 0 0 1 15 15zM60 73v66.27a3.71 3.71 0 0 1-3.71 3.73H40.48a3.71 3.71 0 0 1-3.72-3.72V73a3.72 3.72 0 0 1 3.72-3.72h15.81A3.72 3.72 0 0 1 60 73zm82.64 34.5v32.08a3.41 3.41 0 0 1-3.42 3.42h-17a3.41 3.41 0 0 1-3.42-3.42v-31.09c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86A3.42 3.42 0 0 1 90.3 143H73.88a3.41 3.41 0 0 1-3.41-3.42V72.71a3.41 3.41 0 0 1 3.41-3.42H90.3a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.82 9.63-10.31 21.9-10.31 27.18 0 27.02 25.38 27.02 39.32z"
//                   data-original="#ffffff"
//                 />
//               </g>
//             </svg>
//           </a>
//         </li>
//         <li>
//           <a href="javascript:void(0)" className="text-xl">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="inline w-6 h-6"
//               viewBox="0 0 24 24"
//             >
//               <linearGradient
//                 id="a"
//                 x1="-37.106"
//                 x2="-26.555"
//                 y1="-72.705"
//                 y2="-84.047"
//                 gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop offset={0} stopColor="#fd5" />
//                 <stop offset=".5" stopColor="#ff543e" />
//                 <stop offset={1} stopColor="#c837ab" />
//               </linearGradient>
//               <path
//                 fill="url(#a)"
//                 d="M1.5 1.633C-.386 3.592 0 5.673 0 11.995c0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091C18.89.029 18.778.005 15.91 0 5.737.005 3.507-.448 1.5 1.633z"
//                 data-original="url(#a)"
//               />
//               <path
//                 fill="#fff"
//                 d="M11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471a1.063 1.063 0 1 0 0 2.126 1.063 1.063 0 0 0 0-2.126zm-4.73 1.243a4.55 4.55 0 1 0 .001 9.101 4.55 4.55 0 0 0-.001-9.101zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z"
//                 data-original="#ffffff"
//               />
//             </svg>
//           </a>
//         </li>
//         <li>
//           <a href="javascript:void(0)" className="text-xl">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="inline w-6 h-6"
//               viewBox="0 0 1227 1227"
//             >
//               <path
//                 d="M613.5 0C274.685 0 0 274.685 0 613.5S274.685 1227 613.5 1227 1227 952.315 1227 613.5 952.315 0 613.5 0z"
//                 data-original="#000000"
//               />
//               <path
//                 fill="#fff"
//                 d="m680.617 557.98 262.632-305.288h-62.235L652.97 517.77 470.833 252.692H260.759l275.427 400.844-275.427 320.142h62.239l240.82-279.931 192.35 279.931h210.074L680.601 557.98zM345.423 299.545h95.595l440.024 629.411h-95.595z"
//                 data-original="#ffffff"
//               />
//             </svg>
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
//   <div className="bg-gray-900 p-5 mt-12">
//     <p className="text-gray-400 text-base text-center">
//       © MORENT. All rights reserved.
//     </p>
//   </div>
// </footer>

//   )
// }
