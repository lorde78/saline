import * as React from "react";
import "swiper/swiper-bundle.min.css";
import '../styles/section_formule.css';
import '../styles/style.css';

interface Offre {
    title: string;
    price: string;
    reduction: string;
    avantage_1: string;
    avantage_2: string;
    avantage_3: string;
    avantage_4: string;
    avantage_5: string;
    payment: string;
    showPromo: boolean;
    buttonText: string;
}

interface SliderProps {
    offres: Offre[];
}

export const Offre: React.FunctionComponent<SliderProps> = ({
}) => {
    const [Swiper, setSwiper] = React.useState<any>(null);
    const offres: Offre[] = [

        {
            title: "Gratuit",
            price: "0€/Mois",
            reduction: "",
            payment: "",
            avantage_1: "Accès limité à toutes nos masterclasses",
            avantage_2: "Vidéos multi-angles disponibles en HD sur tous vos appareils",
            avantage_3: "",
            avantage_4: "",
            avantage_5: "",
            showPromo: false,
            buttonText: "Commencer"
        },
        {
            title: "Annuel",
            price: "9.9€/Mois",
            reduction: "Au lieu de 19.8€",
            payment: "Paiement annuel de 118.8€",
            avantage_1: "Accès illimité à toutes nos masterclasses.",
            avantage_2: "De nouvelles vidéos sont disponibles chaque mois.",
            avantage_3: "Des interviews exclusives avec les plus grands professeurs du monde.",
            avantage_4: "Partitions annotées par nos professeurs et prêtes à être téléchargées.",
            avantage_5: "Vidéos multi-angles disponibles en HD sur tous vos appareils.",
            showPromo: true,
            buttonText: "Souscrire"
        },
        {
            title: "Mensuel",
            price: "19.8€/Mois",
            reduction: "",
            payment: "",
            avantage_1: "Accès illimité à toutes nos masterclasses.",
            avantage_2: "De nouvelles vidéos sont disponibles chaque mois.",
            avantage_3: "Des interviews exclusives avec les plus grands professeurs du monde.",
            avantage_4: "Partitions annotées par nos professeurs et prêtes à être téléchargées.",
            avantage_5: "Vidéos multi-angles disponibles en HD sur tous vos appareils.",
            showPromo: false,
            buttonText: "Souscrire"
        },
    ];

    React.useEffect(() => {
        import("swiper/react").then((module) => {
            setSwiper(module);
        });
    }, []);

    if (!Swiper) {
        return null;
    }

    const { Swiper: SwiperComponent, SwiperSlide } = Swiper;

    const defaultOffre: Offre[] = [];

    const allOffre = offres.length > 0 ? offres : defaultOffre;

    return (
        <div className="section_formule_container">
            <h2>Choississez votre offre</h2>
            <SwiperComponent

                initialSlide={1}
                spaceBetween={20}
                slidesPerView={'auto'}
                centeredSlides={true}

            >
                {allOffre.map((offre, index) => (
                    <SwiperSlide key={index}>
                        <div className="section_formule_item">
                            {offre.showPromo && (
                                <div className="section_formule_item_promo">
                                    <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_180_708)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M65.0372 18.7174C61.5113 11.3587 52.2533 8.87801 45.5205 13.4879C43.5208 14.857 40.9735 15.1485 38.7163 14.2667C31.6892 11.5213 23.9297 16.0012 22.7938 23.4596C22.4289 25.8553 20.9027 27.9156 18.7172 28.9628C11.3585 32.4886 8.87786 41.7467 13.4877 48.4795C14.8568 50.4792 15.1484 53.0265 14.2665 55.2837C11.5211 62.3108 16.001 70.0702 23.4594 71.2062C25.8551 71.5711 27.9154 73.0972 28.9626 75.2827C32.4885 82.6415 41.7465 85.1221 48.4793 80.5122C50.479 79.1431 53.0263 78.8516 55.2835 79.7334C62.3106 82.4788 70.07 77.9989 71.2061 70.5406C71.5709 68.1448 73.0971 66.0846 75.2825 65.0374C82.6413 61.5115 85.1219 52.2535 80.512 45.5206C79.143 43.521 78.8514 40.9737 79.7334 38.7165C82.4786 31.6894 77.9987 23.9299 70.5404 22.7939C68.1447 22.429 66.0844 20.9029 65.0372 18.7174Z" fill="#E5DF52" />
                                            <path d="M15.8527 41.6551C15.6806 41.609 15.5544 41.5167 15.4741 41.3781C15.3939 41.2395 15.3767 41.0844 15.4227 40.9128L16.0121 38.7133C16.058 38.5417 16.1504 38.4159 16.2892 38.3361C16.428 38.2562 16.5835 38.2394 16.7556 38.2855L24.102 40.254C24.2742 40.3001 24.4004 40.3924 24.4807 40.531C24.561 40.6695 24.578 40.8246 24.532 40.9962L23.9427 43.1958C23.8967 43.3674 23.8044 43.4931 23.6656 43.573C23.5268 43.6529 23.3713 43.6697 23.1991 43.6236L15.8527 41.6551ZM31.0341 51.7171C29.5633 51.323 28.3955 50.7677 27.5309 50.0511C26.6705 49.319 26.0805 48.5171 25.7605 47.6456C25.4604 46.7625 25.4097 45.8878 25.6084 45.0215C25.646 44.8811 25.7242 44.7767 25.8432 44.7082C25.9622 44.6398 26.092 44.6245 26.2329 44.6622L29.378 45.5049C29.5815 45.5595 29.7254 45.6482 29.8098 45.7711C29.9141 45.8827 29.9808 46.0092 30.01 46.1507C30.0546 46.5473 30.1552 46.892 30.3115 47.1846C30.4835 47.4816 30.7035 47.7244 30.9716 47.9132C31.2552 48.1063 31.5849 48.2531 31.9605 48.3538C32.3986 48.4712 32.8305 48.4866 33.2562 48.3999C33.6819 48.3134 34.0523 48.1201 34.3676 47.82C34.7025 47.5084 34.9391 47.0953 35.077 46.5805C35.2024 46.1125 35.2016 45.6775 35.0745 45.2756C34.9631 44.8779 34.7467 44.5274 34.4254 44.2239C34.1043 43.9205 33.7089 43.7059 33.2396 43.5801C32.864 43.4795 32.5463 43.4445 32.2865 43.4752C32.0309 43.4903 31.8081 43.5394 31.6182 43.6222C31.4284 43.7051 31.2582 43.7766 31.108 43.8366C30.9619 43.8811 30.8106 43.8824 30.6541 43.8404L27.5795 43.0166C27.4386 42.9788 27.3259 42.8985 27.2415 42.7756C27.1769 42.6412 27.1634 42.5038 27.201 42.3634L30.2343 34.4231C30.3282 34.1975 30.4602 34.049 30.6304 33.9775C30.8046 33.8904 30.9934 33.8742 31.1969 33.9287L40.6089 36.4506C40.781 36.4967 40.9073 36.5891 40.9874 36.7276C41.0676 36.8661 41.0848 37.0213 41.0388 37.1929L40.4495 39.3924C40.4035 39.564 40.311 39.6898 40.1723 39.7696C40.0336 39.8496 39.8781 39.8664 39.706 39.8202L32.8992 37.9964L31.779 40.9566C32.186 40.8149 32.6352 40.7346 33.1266 40.7158C33.6377 40.6855 34.2924 40.7774 35.0904 40.9913C35.8416 41.1925 36.5201 41.5081 37.126 41.9379C37.7477 42.372 38.2617 42.8944 38.6682 43.5049C39.0906 44.1197 39.3626 44.7945 39.4843 45.5293C39.6259 46.2528 39.588 47.0201 39.3706 47.8313C39.0738 48.9389 38.5368 49.8484 37.7591 50.5596C36.9973 51.275 36.0409 51.7461 34.8899 51.9728C33.7433 52.1838 32.4579 52.0986 31.0341 51.7171ZM46.6601 55.8789C45.5335 55.5771 44.5973 55.1591 43.8516 54.6248C43.1099 54.0751 42.5407 53.4459 42.1435 52.7376C41.762 52.0335 41.5307 51.2693 41.4497 50.445C41.3687 49.6208 41.4196 48.7733 41.6026 47.9027C41.6999 47.4773 41.8116 46.9973 41.9382 46.4627C42.0845 45.9166 42.2307 45.3707 42.377 44.8247C42.5431 44.2673 42.6927 43.7723 42.8252 43.3397C43.1021 42.4943 43.4796 41.7427 43.9577 41.0849C44.4556 40.4157 45.0516 39.8815 45.7455 39.4822C46.4593 39.0716 47.2649 38.8193 48.1621 38.7252C49.0751 38.6355 50.0791 38.7374 51.1745 39.0309C52.2855 39.3286 53.206 39.7424 53.936 40.2723C54.6661 40.8025 55.2296 41.4216 55.6269 42.13C56.0439 42.8269 56.3007 43.5896 56.3974 44.4181C56.4982 45.231 56.4493 46.0706 56.2508 46.937C56.1651 47.3822 56.0469 47.8856 55.8964 48.4472C55.7657 48.9974 55.6194 49.5433 55.4575 50.0852C55.3154 50.6157 55.1723 51.0873 55.0281 51.5001C54.7668 52.3497 54.3872 53.1091 53.8894 53.7782C53.4071 54.4516 52.8169 54.9956 52.1187 55.4104C51.4363 55.8295 50.6364 56.0918 49.7194 56.1971C48.8221 56.2911 47.8022 56.185 46.6601 55.8789ZM47.5692 52.486C48.3828 52.704 49.0385 52.6038 49.5364 52.1855C50.0542 51.7556 50.4399 51.0983 50.6937 50.2133C50.8463 49.7692 50.9895 49.2976 51.1233 48.7984C51.2726 48.3034 51.4063 47.8042 51.5246 47.3008C51.6583 46.8017 51.7659 46.3372 51.8474 45.9076C52.0618 45.0455 52.0522 44.2989 51.8187 43.6678C51.6009 43.041 51.0873 42.6107 50.2779 42.3771C49.4601 42.1747 48.8001 42.2905 48.298 42.7244C47.796 43.1584 47.4145 43.8002 47.1532 44.6498C47.0248 45.0669 46.8857 45.5229 46.7364 46.0178C46.6026 46.517 46.4689 47.0163 46.3351 47.5154C46.2169 48.0188 46.1052 48.4988 45.9996 48.9555C45.7927 49.8531 45.8058 50.6173 46.0392 51.2484C46.2769 51.8638 46.7868 52.2763 47.5692 52.486ZM57.3478 58.492C56.9878 58.3955 56.8497 58.1913 56.9333 57.8793C56.9584 57.7857 57.0128 57.7083 57.0963 57.6471L72.7666 45.5437C72.9136 45.4327 73.0525 45.3529 73.1829 45.3042C73.3133 45.2556 73.488 45.2606 73.7072 45.3193L75.3736 45.7658C75.7335 45.8623 75.8716 46.0665 75.788 46.3785C75.763 46.472 75.7086 46.5494 75.6252 46.6107L59.955 58.714C59.8078 58.8251 59.6689 58.9049 59.5385 58.9535C59.4082 59.0022 59.2334 58.9972 59.0143 58.9385L57.3478 58.492ZM69.1224 61.7724C68.0583 61.4873 67.281 60.978 66.7899 60.2445C66.3144 59.5152 66.1631 58.672 66.3356 57.715C66.4287 57.3053 66.517 56.9443 66.6005 56.6323C66.6841 56.3204 66.7924 55.9481 66.925 55.5155C67.2424 54.5805 67.7816 53.9142 68.5425 53.516C69.3229 53.1065 70.2686 53.0506 71.3797 53.3483C72.5063 53.6502 73.2974 54.1715 73.753 54.9122C74.2127 55.6374 74.3465 56.484 74.1541 57.4525C74.0684 57.8977 73.9837 58.2763 73.9001 58.5882C73.8165 58.9002 73.7048 59.2549 73.5647 59.6521C73.2513 60.5713 72.6986 61.2258 71.9066 61.6155C71.1145 62.0052 70.1865 62.0575 69.1224 61.7724ZM69.6742 59.7131C69.9403 59.7844 70.1583 59.7843 70.3284 59.713C70.514 59.6456 70.669 59.5367 70.7933 59.3861C70.9218 59.2198 71.013 59.0353 71.0674 58.8324C71.1949 58.482 71.2982 58.1586 71.3776 57.8622C71.4571 57.5658 71.5272 57.2418 71.5878 56.8902C71.6516 56.5897 71.6365 56.3013 71.5428 56.0255C71.4534 55.734 71.2128 55.5357 70.8216 55.4309C70.4306 55.3261 70.1231 55.3775 69.8998 55.5852C69.6807 55.7773 69.5234 56.0195 69.4285 56.3116C69.3209 56.6506 69.2273 56.9684 69.1479 57.2648C69.0685 57.5612 68.9886 57.8908 68.908 58.2539C68.8692 58.4609 68.8563 58.6663 68.8687 58.8704C68.901 59.0629 68.9807 59.2347 69.1079 59.3859C69.2351 59.537 69.4239 59.646 69.6742 59.7131ZM61.4012 50.8753C60.3215 50.586 59.5342 50.0823 59.0389 49.3644C58.5635 48.6351 58.4197 47.7941 58.608 46.8413C58.6854 46.4273 58.7639 46.0721 58.8433 45.7757C58.9424 45.4679 59.0586 45.0977 59.1912 44.6651C59.4931 43.726 60.0243 43.0575 60.7852 42.6595C61.5656 42.2499 62.5193 42.1961 63.6459 42.4979C64.7726 42.7998 65.5636 43.3212 66.0192 44.0619C66.4789 44.787 66.6049 45.6316 66.3968 46.5959C66.3112 47.041 66.2264 47.4196 66.1428 47.7316C66.0634 48.028 65.9538 48.3748 65.8137 48.7721C65.516 49.6955 64.9711 50.352 64.1791 50.7417C63.3912 51.1158 62.4653 51.1604 61.4012 50.8753ZM61.9404 48.8628C62.1908 48.9298 62.4089 48.9298 62.5946 48.8626C62.7844 48.7797 62.9415 48.6629 63.0658 48.5122C63.1942 48.3461 63.2834 48.1692 63.3336 47.9821C63.4611 47.6318 63.5645 47.3083 63.644 47.0119C63.7234 46.7155 63.7934 46.3914 63.854 46.0398C63.9178 45.7394 63.8951 45.4489 63.7855 45.1688C63.6961 44.8773 63.4634 44.6812 63.0878 44.5806C62.6968 44.4758 62.3817 44.5251 62.1425 44.7286C61.9236 44.9207 61.7663 45.1629 61.6712 45.4549C61.5637 45.794 61.4701 46.1117 61.3906 46.4081C61.3112 46.7045 61.2313 47.0343 61.1508 47.3972C61.1163 47.5886 61.1053 47.7863 61.1177 47.9903C61.15 48.1828 61.2276 48.3625 61.3506 48.5293C61.4778 48.6803 61.6744 48.7915 61.9404 48.8628Z" fill="#121525" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_180_708">
                                                <rect width="76" height="76" fill="white" transform="translate(20.1298 0.459656) rotate(15)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            )}
                              <div>
                            <h3>{offre.title}</h3>
                            <div className="section_formule_item_information">
                                <span>{offre.price}</span>
                                <span>{offre.reduction}</span>
                                <span>{offre.payment}</span>
                            </div>
                          
                            <ul>
                                {offre.avantage_1 && (
                                    <li>
                                        <div className="items">
                                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 0.341888C14.6095 -0.0486359 13.9763 -0.0486359 13.5858 0.341888L6.34068 7.58699C5.95016 7.97752 5.31699 7.97752 4.92647 7.58699L2.38507 5.04559C1.99454 4.65507 1.36138 4.65507 0.970855 5.04559C0.580331 5.43612 0.58033 6.06928 0.970855 6.45981L3.51774 9C4.68969 10.1689 6.58688 10.1677 7.7574 8.9974L15 1.7561C15.3905 1.36558 15.3905 0.732413 15 0.341888Z" fill="white" />
                                            </svg>
                                        </div>
                                        <span className="items">{offre.avantage_1}</span>
                                    </li>
                                )}
                                {offre.avantage_2 && (
                                    <li>
                                        <div className="items">
                                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 0.341888C14.6095 -0.0486359 13.9763 -0.0486359 13.5858 0.341888L6.34068 7.58699C5.95016 7.97752 5.31699 7.97752 4.92647 7.58699L2.38507 5.04559C1.99454 4.65507 1.36138 4.65507 0.970855 5.04559C0.580331 5.43612 0.58033 6.06928 0.970855 6.45981L3.51774 9C4.68969 10.1689 6.58688 10.1677 7.7574 8.9974L15 1.7561C15.3905 1.36558 15.3905 0.732413 15 0.341888Z" fill="white" />
                                            </svg>
                                        </div>
                                        <span className="items">{offre.avantage_2}</span>
                                    </li>
                                )}
                                {offre.avantage_3 && (
                                    <li>
                                        <div className="items">
                                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 0.341888C14.6095 -0.0486359 13.9763 -0.0486359 13.5858 0.341888L6.34068 7.58699C5.95016 7.97752 5.31699 7.97752 4.92647 7.58699L2.38507 5.04559C1.99454 4.65507 1.36138 4.65507 0.970855 5.04559C0.580331 5.43612 0.58033 6.06928 0.970855 6.45981L3.51774 9C4.68969 10.1689 6.58688 10.1677 7.7574 8.9974L15 1.7561C15.3905 1.36558 15.3905 0.732413 15 0.341888Z" fill="white" />
                                            </svg>
                                        </div>
                                        <span className="items">{offre.avantage_3}</span>
                                    </li>
                                )}
                                {offre.avantage_4 && (
                                    <li>
                                        <div className="items">
                                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 0.341888C14.6095 -0.0486359 13.9763 -0.0486359 13.5858 0.341888L6.34068 7.58699C5.95016 7.97752 5.31699 7.97752 4.92647 7.58699L2.38507 5.04559C1.99454 4.65507 1.36138 4.65507 0.970855 5.04559C0.580331 5.43612 0.58033 6.06928 0.970855 6.45981L3.51774 9C4.68969 10.1689 6.58688 10.1677 7.7574 8.9974L15 1.7561C15.3905 1.36558 15.3905 0.732413 15 0.341888Z" fill="white" />
                                            </svg>
                                        </div>
                                        <span className="items">{offre.avantage_4}</span>
                                    </li>
                                )}
                                {offre.avantage_5 && (
                                    <li>
                                        <div className="items">
                                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 0.341888C14.6095 -0.0486359 13.9763 -0.0486359 13.5858 0.341888L6.34068 7.58699C5.95016 7.97752 5.31699 7.97752 4.92647 7.58699L2.38507 5.04559C1.99454 4.65507 1.36138 4.65507 0.970855 5.04559C0.580331 5.43612 0.58033 6.06928 0.970855 6.45981L3.51774 9C4.68969 10.1689 6.58688 10.1677 7.7574 8.9974L15 1.7561C15.3905 1.36558 15.3905 0.732413 15 0.341888Z" fill="white" />
                                            </svg>
                                        </div>

                                        <span className="items">{offre.avantage_5}</span>
                                    </li>
                                )}
                                
                            </ul>
                            </div>
                            <a href="" className="button">{offre.buttonText}</a>
                            
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </div>
    );
};