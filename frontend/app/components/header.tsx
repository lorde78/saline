import React, { useContext, useEffect, useState } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import LanguageSelect from './selectlanguage';
import { NavLink } from '@remix-run/react';
import { useGlobalEffect } from '../helper/globalHelper';
import useGetCurrentUserId from '../hook/useGetCurrentUserId';
import { signinContext } from '../context/signinContext';
import useGetCurrentElement from '../hook/useGetCurrentElement';
import Header_search from "~/components/header_search";

type Props = {
    search?: boolean;
    onSearch?: (searchTerm: string) => void;
    setActiveFilters?: (activeFilters: any) => void;
};

export default function Header({ search, setActiveFilters, onSearch }: Props) {
    useGlobalEffect();
    const [loader, setLoader] = useState(false);
    // @ts-ignore
    const [signin, setSignin] = useContext(signinContext);

    const [currentUser, setCurrentUser] = useState<string>('');
    const getCurrentUser = useGetCurrentElement();

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [windowInnerWidth, setWindowInnerWidth] = useState(0);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setWindowInnerWidth(window.innerWidth);
        if (window.innerWidth >= 750) {
            setMenuOpen(false);
        }
        const fetchUser = async () => {
            try {
                if (signin) {
                    const currentUserId = await useGetCurrentUserId(signin);
                    setLoader(true);
                    getCurrentUser('user', currentUserId).then((r: any) => {
                        if (currentUser === '') {
                            setCurrentUser(r.profilePicture);
                            setLoader(true);
                        }
                    });
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, [signin, currentUser, getCurrentUser]);

    useEffect(() => {
        const handleResize = () => {
            const currentWidth = window.innerWidth;
            setWindowInnerWidth(currentWidth);

            if (currentWidth === 750 && isMenuOpen) {
                setMenuOpen(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    return (
        <header>
            <nav className="header_nav">
                <div>
                    <Link to="/">
                        <svg width="35" height="48" viewBox="0 0 35 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M35 22.9938C35 22.8102 34.9967 22.6264 34.9901 22.4428V0H0V29.612V29.9594C0 39.7566 7.84902 47.7273 17.4967 47.7273C27.0293 47.7273 34.806 39.9435 34.9868 30.3099H34.9901V29.9627V29.6154V23.3444H35V22.9938ZM31.5605 22.6465C31.3763 14.9329 25.1452 8.71199 17.5033 8.71199C9.86142 8.71199 3.63021 14.9329 3.44608 22.6465H0.700394C0.881247 13.3936 8.35212 5.92375 17.5065 5.92375C26.6019 5.92375 34.0299 13.2967 34.3062 22.4662V22.6465H31.5605ZM28.1374 22.6465H28.1309C27.9501 16.853 23.2545 12.1948 17.5033 12.1948C11.7554 12.1948 7.05985 16.853 6.8757 22.6465H6.86584H4.12673C4.31088 15.317 10.2396 9.40988 17.5 9.40988C24.7637 9.40988 30.6924 15.317 30.8733 22.6465H28.1374ZM34.293 30.567C34.2897 30.6405 34.2897 30.7174 34.2832 30.7908C34.2799 30.8609 34.2765 30.9344 34.27 31.0045C34.2667 31.078 34.2601 31.1515 34.2568 31.225C34.2503 31.295 34.2436 31.3685 34.2404 31.4387C34.2338 31.5087 34.2273 31.5822 34.2207 31.6524C34.2141 31.7257 34.2042 31.7959 34.1977 31.8694C34.1911 31.9394 34.1812 32.0096 34.1747 32.0764C34.1648 32.1499 34.1549 32.2233 34.1451 32.2935C34.1351 32.3603 34.1253 32.4303 34.1154 32.4971C34.1056 32.5706 34.0924 32.644 34.0825 32.7175C34.0727 32.7843 34.0628 32.8512 34.0497 32.9179C34.0366 32.9914 34.0234 33.0649 34.0102 33.1382C33.9971 33.2051 33.9872 33.2685 33.974 33.3354C33.961 33.4087 33.9445 33.4822 33.9281 33.5557C33.9149 33.6191 33.9017 33.6826 33.8885 33.746C33.8722 33.8194 33.8557 33.8929 33.836 33.9664C33.8196 34.0299 33.8064 34.0899 33.7899 34.1534C33.7702 34.2269 33.7505 34.3003 33.734 34.3738C33.7176 34.4339 33.7011 34.4974 33.6847 34.5574C33.665 34.6309 33.642 34.7044 33.6223 34.7778C33.6058 34.8379 33.586 34.8981 33.5697 34.9582C33.5466 35.0316 33.5236 35.1051 33.5006 35.1786C33.4809 35.2386 33.4644 35.2954 33.4447 35.3522C33.4216 35.4257 33.3954 35.4991 33.369 35.5726C33.3493 35.6294 33.3296 35.686 33.3098 35.7462C33.2835 35.8197 33.2572 35.8932 33.231 35.9632C33.2111 36.02 33.1882 36.0768 33.1684 36.1336C33.1422 36.207 33.1126 36.2805 33.0829 36.3506C33.0599 36.4073 33.0402 36.4608 33.0172 36.5176C32.9876 36.5911 32.958 36.6611 32.9251 36.7346C32.9021 36.7881 32.8791 36.8415 32.856 36.8982C32.8232 36.9684 32.7936 37.0419 32.7607 37.1119C32.7377 37.1653 32.7113 37.2188 32.6884 37.2723C32.6555 37.3423 32.6226 37.4125 32.5864 37.486C32.5601 37.5394 32.5338 37.5894 32.5108 37.6429C32.4746 37.713 32.4417 37.7831 32.4056 37.8499C32.3793 37.9033 32.3529 37.9534 32.3234 38.0069C32.2905 38.0703 32.2544 38.1337 32.2215 38.2006L18.7791 30.3199H34.3029C34.3029 30.3366 34.3029 30.35 34.3029 30.3667C34.2996 30.4268 34.2963 30.497 34.293 30.567ZM31.715 39.0587C31.6723 39.1255 31.6329 39.1922 31.5901 39.2557C31.5605 39.3025 31.5276 39.3526 31.498 39.3993C31.4553 39.466 31.4125 39.5295 31.3665 39.5963C31.3336 39.6431 31.3007 39.6898 31.2711 39.7365C31.2251 39.8 31.1823 39.8635 31.1363 39.9302C31.1034 39.977 31.0705 40.0237 31.0376 40.0705C30.9917 40.1339 30.9456 40.1973 30.8995 40.2608C30.8667 40.3076 30.8306 40.351 30.7977 40.3977C30.7516 40.4612 30.7022 40.5213 30.6563 40.5814C30.6201 40.6247 30.5839 40.6715 30.551 40.7149C30.5017 40.7751 30.4523 40.8351 30.4031 40.8952C30.3668 40.9387 30.3306 40.9821 30.2945 41.0289C30.2452 41.0889 30.1959 41.149 30.1433 41.2058C30.1071 41.2492 30.0677 41.2926 30.0315 41.336C29.9789 41.3928 29.9296 41.4529 29.8769 41.5097C29.8375 41.553 29.8013 41.5931 29.7618 41.6366C29.7093 41.6934 29.6567 41.7501 29.604 41.8068C29.5645 41.8469 29.5251 41.8903 29.4856 41.9304C29.433 41.9872 29.3771 42.0406 29.3245 42.0974C29.2851 42.1375 29.2423 42.1775 29.2028 42.2176C29.1469 42.271 29.0943 42.3244 29.0384 42.3779C28.9956 42.418 28.9562 42.4581 28.9135 42.4947C28.8576 42.5481 28.8016 42.5983 28.7457 42.6517C28.703 42.6918 28.6603 42.7284 28.6175 42.7685C28.5616 42.8186 28.5025 42.8721 28.4466 42.9222C28.4038 42.9622 28.3578 42.9989 28.3117 43.0357C28.2526 43.0858 28.1966 43.1326 28.1374 43.1826C28.0915 43.2193 28.0454 43.2561 28.0027 43.2928C27.9434 43.3396 27.8843 43.3897 27.8251 43.4364C27.779 43.4731 27.733 43.5099 27.687 43.5433C27.6277 43.59 27.5686 43.6367 27.5061 43.6801C27.4601 43.7169 27.4107 43.7503 27.3647 43.787C27.3055 43.8305 27.2431 43.8771 27.1805 43.9205C27.1313 43.954 27.0819 43.9907 27.0326 44.0241C26.9702 44.0675 26.9109 44.1109 26.8485 44.1509C26.7991 44.1844 26.7498 44.2178 26.7004 44.2512C26.638 44.2913 26.5755 44.3347 26.5131 44.3747C26.4637 44.4081 26.4111 44.4381 26.3618 44.4716C26.3125 44.5016 26.2632 44.535 26.2138 44.5651L18.4536 30.9144L31.8958 38.7949C31.8729 38.835 31.8499 38.8717 31.8269 38.9118C31.7743 38.9585 31.7446 39.0086 31.715 39.0587ZM25.2898 45.0826C25.224 45.116 25.1616 45.1527 25.0958 45.1862C25.0399 45.2162 24.984 45.2429 24.9282 45.2697C24.8624 45.303 24.7966 45.3364 24.7309 45.3664C24.6749 45.3932 24.619 45.4199 24.5598 45.4466C24.494 45.4767 24.4284 45.51 24.3626 45.54C24.3034 45.5668 24.2474 45.5902 24.1883 45.6169C24.1225 45.647 24.0568 45.677 23.991 45.7038C23.9318 45.7305 23.8726 45.7537 23.8134 45.7771C23.7476 45.8039 23.6819 45.8339 23.6129 45.8607C23.5536 45.884 23.4912 45.9074 23.432 45.9308C23.3662 45.9575 23.2972 45.9808 23.2314 46.0075C23.1689 46.0309 23.1097 46.051 23.0473 46.0744C22.9815 46.0977 22.9124 46.1211 22.8467 46.1445C22.7842 46.1646 22.7218 46.1846 22.6592 46.2079C22.5934 46.2313 22.5245 46.2513 22.4587 46.2747C22.3961 46.2947 22.3305 46.3148 22.2647 46.3315C22.1989 46.3515 22.1298 46.3716 22.0641 46.3916C21.9983 46.4117 21.9325 46.4284 21.8668 46.445C21.801 46.465 21.732 46.4817 21.6629 46.5018C21.5971 46.5185 21.528 46.5352 21.4623 46.5519C21.3965 46.5686 21.3275 46.5853 21.2618 46.602C21.1927 46.6187 21.1237 46.632 21.0546 46.6488C20.9888 46.6621 20.9197 46.6788 20.8541 46.6921C20.785 46.7054 20.7159 46.7188 20.6436 46.7322C20.5778 46.7455 20.512 46.7589 20.4429 46.7722C20.3706 46.7856 20.3016 46.7956 20.2292 46.809C20.1635 46.819 20.0977 46.8324 20.0286 46.8424C19.9563 46.8524 19.884 46.8625 19.8084 46.8725C19.7426 46.8825 19.6768 46.8925 19.6111 46.8992C19.5354 46.9092 19.4598 46.9158 19.3842 46.9258C19.3216 46.9325 19.2559 46.9425 19.1934 46.9492C19.1145 46.9559 19.0323 46.9626 18.9534 46.9726C18.8942 46.9793 18.8317 46.9826 18.7726 46.9893C18.6871 46.996 18.6048 46.9993 18.5193 47.006C18.4634 47.0093 18.4043 47.0127 18.3484 47.016C18.2596 47.0194 18.1676 47.0227 18.0788 47.026C18.0262 47.0294 17.9735 47.0294 17.9209 47.0327C17.8913 47.0327 17.8617 47.0327 17.8354 47.0327V31.2683L25.5956 44.919C25.5463 44.9457 25.497 44.9758 25.4477 45.0025C25.3983 45.0259 25.3424 45.0525 25.2898 45.0826ZM16.9081 47.0194C16.8194 47.016 16.7273 47.0127 16.6385 47.0093C16.5825 47.006 16.5234 47.0027 16.4675 46.9993C16.382 46.9926 16.2965 46.9893 16.2143 46.9826C16.1518 46.9793 16.0926 46.9726 16.0335 46.9659C15.9545 46.9592 15.8723 46.9525 15.7934 46.9425C15.7276 46.9358 15.6652 46.9292 15.6026 46.9191C15.527 46.9092 15.4514 46.9025 15.3758 46.8925C15.31 46.8858 15.2442 46.8725 15.1784 46.8658C15.1061 46.8558 15.0305 46.8457 14.9582 46.8357C14.8924 46.8257 14.8267 46.8123 14.7576 46.8023C14.6853 46.789 14.6162 46.7789 14.5439 46.7656C14.4781 46.7522 14.4123 46.7388 14.3433 46.7255C14.2743 46.7121 14.2019 46.6987 14.1329 46.6854C14.0671 46.6721 13.998 46.6554 13.9322 46.6421C13.8633 46.6287 13.7942 46.612 13.7251 46.5953C13.6593 46.5786 13.5903 46.5619 13.5245 46.5452C13.4588 46.5285 13.3897 46.5118 13.3239 46.4951C13.2548 46.4784 13.1892 46.4583 13.1201 46.4384C13.0543 46.4217 12.9885 46.4016 12.9228 46.3849C12.8537 46.3649 12.7879 46.3449 12.7221 46.3248C12.6565 46.3048 12.5939 46.2881 12.5281 46.268C12.4592 46.248 12.3934 46.2246 12.3276 46.2013C12.2652 46.1813 12.2026 46.1612 12.1402 46.1378C12.0711 46.1144 12.0053 46.0911 11.9395 46.0677C11.8771 46.0443 11.818 46.0242 11.7555 46.0009C11.6897 45.9775 11.6206 45.9509 11.5549 45.9241C11.4957 45.9007 11.4332 45.8774 11.374 45.854C11.3083 45.8272 11.2425 45.8005 11.1734 45.7705C11.1142 45.7471 11.0551 45.7205 10.9959 45.6971C10.9301 45.6703 10.8643 45.6403 10.7986 45.6102C10.7394 45.5835 10.6802 45.5601 10.6243 45.5334C10.5585 45.5034 10.4928 45.4734 10.427 45.4399C10.3711 45.4132 10.3152 45.3865 10.256 45.3598C10.1902 45.3264 10.1245 45.2963 10.0587 45.263C10.0028 45.2363 9.94692 45.2062 9.89102 45.1795C9.82526 45.1461 9.76277 45.1127 9.69701 45.0759C9.64111 45.0458 9.58849 45.0192 9.5326 44.9892C9.48327 44.9624 9.43396 44.9357 9.38463 44.9056L17.1449 31.2549V47.0194C17.1152 47.0194 17.0857 47.0194 17.0593 47.0194C17.0134 47.026 16.9608 47.0227 16.9081 47.0194ZM8.49681 44.3747C8.43433 44.3347 8.37185 44.2913 8.30937 44.2512C8.26006 44.2178 8.21073 44.1844 8.1614 44.1509C8.09893 44.1075 8.03974 44.0675 7.97727 44.0241C7.92794 43.9907 7.87862 43.9573 7.82929 43.9205C7.76681 43.8771 7.70763 43.8305 7.64515 43.787C7.59912 43.7536 7.54979 43.7169 7.50375 43.6801C7.44457 43.6335 7.38209 43.5867 7.32291 43.5433C7.27687 43.5065 7.23084 43.4731 7.1848 43.4364C7.12561 43.3897 7.06642 43.3429 7.00723 43.2928C6.9612 43.2561 6.91516 43.2193 6.87241 43.1826C6.81323 43.1326 6.75733 43.0858 6.69814 43.0357C6.6521 42.9989 6.60935 42.9588 6.56332 42.9222C6.50413 42.8721 6.44824 42.822 6.39233 42.7685C6.34958 42.7284 6.30684 42.6918 6.26409 42.6517C6.20819 42.5983 6.15229 42.5481 6.09639 42.4947C6.05365 42.4547 6.01419 42.4146 5.97144 42.3779C5.91554 42.3244 5.85964 42.271 5.80702 42.2176C5.76757 42.1775 5.72482 42.1375 5.68536 42.0974C5.62946 42.0439 5.57685 41.9872 5.52424 41.9304C5.48478 41.8903 5.44532 41.8469 5.40587 41.8068C5.35325 41.7501 5.30064 41.6934 5.24803 41.6366C5.20857 41.5931 5.16911 41.553 5.13294 41.5097C5.08033 41.4529 5.031 41.3961 4.97839 41.336C4.93893 41.2926 4.90276 41.2492 4.86659 41.2058C4.81727 41.1457 4.76465 41.0889 4.71533 41.0289C4.67916 40.9854 4.64299 40.942 4.60682 40.8952C4.5575 40.8351 4.50817 40.7751 4.45885 40.7149C4.42268 40.6715 4.3865 40.6247 4.35363 40.5814C4.3043 40.5213 4.25826 40.4578 4.20895 40.3977C4.17606 40.351 4.13989 40.3076 4.107 40.2608C4.06097 40.1973 4.01494 40.1339 3.96891 40.0705C3.93602 40.0237 3.90314 39.977 3.87025 39.9302C3.82422 39.8668 3.78147 39.8034 3.73543 39.7365C3.70256 39.6898 3.66967 39.6431 3.64008 39.5963C3.59733 39.5329 3.5513 39.466 3.50855 39.3993C3.47566 39.3526 3.44608 39.3025 3.41648 39.2557C3.37373 39.1889 3.33098 39.1222 3.29153 39.0587C3.26193 39.0086 3.23234 38.9618 3.20274 38.9118C3.17973 38.8717 3.15671 38.835 3.13369 38.7949L16.576 30.9144L8.81576 44.5651C8.76644 44.535 8.71712 44.505 8.6678 44.4716C8.59874 44.4381 8.54612 44.4047 8.49681 44.3747ZM2.58784 37.8432C2.55167 37.7732 2.5155 37.703 2.48262 37.6362C2.45631 37.5827 2.43 37.5327 2.40698 37.4793C2.37411 37.4091 2.33794 37.339 2.30505 37.2656C2.27874 37.2121 2.25573 37.1587 2.23271 37.1052C2.19983 37.0352 2.16694 36.9617 2.13736 36.8915C2.11434 36.8382 2.09132 36.7814 2.0683 36.7279C2.0387 36.6578 2.00912 36.5844 1.97952 36.5142C1.9565 36.4574 1.93348 36.404 1.91375 36.3473C1.88415 36.2738 1.85786 36.2036 1.82826 36.1303C1.80524 36.0735 1.78551 36.0167 1.76578 35.9599C1.73948 35.8865 1.71317 35.813 1.68687 35.7428C1.66713 35.686 1.6474 35.6294 1.62767 35.5692C1.60137 35.4957 1.57835 35.4223 1.55205 35.3488C1.53232 35.292 1.51587 35.2319 1.49614 35.1752C1.47313 35.1017 1.45011 35.0282 1.42709 34.9549C1.41065 34.8947 1.39092 34.8346 1.37448 34.7744C1.35476 34.7011 1.33174 34.6276 1.31201 34.5541C1.29556 34.494 1.27912 34.4339 1.26268 34.3704C1.24295 34.2969 1.22323 34.2236 1.20679 34.1501C1.19034 34.0866 1.17719 34.0266 1.16075 33.9631C1.14431 33.8896 1.12458 33.8161 1.10814 33.7427C1.09498 33.6792 1.08183 33.6157 1.06868 33.5524C1.05224 33.4789 1.03908 33.4054 1.02264 33.332C1.00949 33.2685 0.996336 33.2017 0.986471 33.1349C0.973318 33.0615 0.960165 32.988 0.947012 32.9145C0.937148 32.8478 0.923995 32.781 0.91413 32.7142C0.900977 32.6407 0.891113 32.5673 0.881247 32.4938C0.871383 32.427 0.861518 32.3569 0.851654 32.2901C0.841788 32.2166 0.831924 32.1432 0.822059 32.0731C0.812195 32.0029 0.805618 31.9328 0.799042 31.8661C0.792465 31.7926 0.7826 31.7224 0.776023 31.649C0.769447 31.5789 0.762872 31.5054 0.756295 31.4353C0.749719 31.3652 0.743142 31.2917 0.739853 31.2216C0.733277 31.1481 0.729989 31.0746 0.7267 31.0011C0.723413 30.9311 0.716836 30.8609 0.713547 30.7874C0.71026 30.714 0.706971 30.6372 0.703683 30.5637C0.700394 30.4937 0.697107 30.4235 0.697107 30.3533C0.697107 30.3366 0.697107 30.3233 0.697107 30.3066H16.2209L2.77856 38.1872C2.74239 38.1237 2.70951 38.0602 2.67662 37.9935C2.64375 37.9468 2.61415 37.8933 2.58784 37.8432ZM6.86912 23.341V29.612H0.693818V23.341H3.4395H6.86912ZM10.3021 23.341H13.7317V29.612H7.55637V23.341H10.3021ZM27.4436 23.341V29.612H21.2781V23.341H24.7078H27.4436ZM20.591 23.341V29.612H14.4157V23.341H20.591ZM14.4354 22.6465C14.6063 21.0804 15.9183 19.8582 17.5033 19.8582C19.0882 19.8582 20.4002 21.0804 20.5712 22.6465H14.4354ZM21.2781 22.6465H21.2618C21.0875 20.6965 19.4697 19.1637 17.5033 19.1637C15.537 19.1637 13.9191 20.6965 13.7448 22.6465H13.7284H10.9926C11.1734 19.157 14.0244 16.3755 17.5033 16.3755C20.9823 16.3755 23.8331 19.157 24.014 22.6465H21.2781ZM27.4436 22.6465H24.698C24.5171 18.773 21.3604 15.6776 17.5033 15.6776C13.6461 15.6776 10.4862 18.773 10.3086 22.6465H7.56295C7.7438 17.2369 12.1336 12.8927 17.5065 12.8927C22.8762 12.8927 27.266 17.2369 27.4436 22.6465ZM34.3062 0.697894V18.0317C32.1853 10.642 25.4575 5.22586 17.5065 5.22586C9.5326 5.22586 2.78843 10.6721 0.687241 18.0919V0.694556H34.3062V0.697894ZM34.3062 29.612H28.1374V23.341H31.5671H34.3029V29.612H34.3062Z"
                                fill="#121525" />
                        </svg>
                    </Link>
                    {isMenuOpen ?
                        <span className={"overlay"}
                            onClick={toggleMenu}
                        ></span>
                        :
                        <></>}
                    <div className={isMenuOpen ? 'menu_initiale menu_open' : 'menu_initiale'}>
                        <ul>
                            {isMenuOpen ?
                                <li>
                                    {loader ? (
                                        <NavLink to={"/profile"}>
                                            <div className={"pp_card_small"}>
                                                <img src={currentUser} />
                                            </div>
                                        </NavLink>
                                    ) : (
                                        <div className={"pp_card_small"} />
                                    )}
                                </li>
                                :
                                <></>
                            }
                            <li><NavLink to={"/courses"}>Cours</NavLink></li>
                            <li><NavLink to={"/trainings"}>Parcours</NavLink></li>
                            <li><NavLink to={"/classrooms"}>Classe</NavLink></li>
                            <li><NavLink to={"/professors"}>Professeurs</NavLink></li>
                            <li><NavLink to={"/logout"} className={"text_alert"}>Déconnexion</NavLink></li>
                            {/*<li><NavLink to={"/authentication"}>Connexion</NavLink></li>*/}
                            {/*<li><NavLink to={"/professors"}>Professeurs</NavLink></li>*/}
                        </ul>
                    </div>
                </div>
                <div style={{ display: "flex", gap: 20, }}>
                    <LanguageSelect />
                    {isMenuOpen || windowInnerWidth <= 750 ?
                        <></>
                        :
                        <>
                            {loader ? (
                                <NavLink to={"/profile"}>
                                    <div className={"pp_card_small"}>
                                        <img src={currentUser} />
                                    </div>
                                </NavLink>
                            ) : (
                                <div className={"pp_card_small"} />
                            )}
                        </>
                    }
                </div>
                <div className={`burger burger-button ${isMenuOpen ? "croix" : ""}`} onClick={toggleMenu}>
                    <div className="line top"></div>
                    <div className="line middle"></div>
                    <div className="line bottom"></div>
                </div>

            </nav>
            {search ?
                // @ts-ignore
                <Header_search onSearch={onSearch} setActiveFilters={setActiveFilters} />
                :
                <></>
            }
        </header>
    );
}
