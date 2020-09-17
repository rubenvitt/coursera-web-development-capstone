import React from "react";

export const MenuList = [
    {
        name: 'Home',
        url: '/',
        icon:
            <>
                <path fill="none" strokeWidth="2"
                      d="M3 3C3 2.44772 3.44772 2 4 2H8C8.26522 2 8.51957 2.10536 8.70711 2.29289C8.89464 2.48043 9 2.73478 9 3V6H7V4H5V14H3V3Z"
                      clipRule="evenodd" fillRule="evenodd"/>
                <path fill="none" strokeWidth="2"
                      d="M2 12H22L20.4823 19.5883C20.2019 20.9906 18.9706 22 17.5406 22H6.45939C5.02934 22 3.7981 20.9906 3.51765 19.5883L2 12Z"
                      clipRule="evenodd" fillRule="evenodd"/>
                <path fill="none" strokeWidth="2"
                      d="M8 7C8.55228 7 9 7.44772 9 8V8.01C9 8.56228 8.55228 9.01 8 9.01C7.44772 9.01 7 8.56228 7 8.01V8C7 7.44772 7.44772 7 8 7Z"
                      clipRule="evenodd" fillRule="evenodd"/>
            </>
    },
    {
        name: 'Contact',
        url: '/contact',
        icon: <>
            <path strokeWidth="2" fill="none" d="M12 3V10H15V13L18 10H22V3H12Z"/>
            <path strokeWidth="2" fill="none"
                  d="M2.99069 7.91051L4.78963 6L8.08679 9.92875C8.36281 10.2576 8.4562 10.6897 8.33774 11.0897L7.91559 12.515L10.3427 15.407L11.588 15.0816C11.9967 14.9748 12.4367 15.1119 12.7028 15.429L16 19.3578L13.6086 20.5624C11.9127 21.4167 9.79506 20.9894 8.58623 19.5491L2.87485 12.7436C1.66602 11.3033 1.71486 9.26546 2.99069 7.91051Z"/>
        </>
    },
    {
        name: 'Coursera List',
        url: '/coursera-list',
        icon: <>
            <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"
                  fill="none" d="M22 10.5H2V13.5H22V10.5Z"/>
            <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"
                  fill="none" d="M22 4H2V7H22V4Z"/>
            <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"
                  fill="none" d="M22 17H2V20H22V17Z"/>
        </>
    }
]