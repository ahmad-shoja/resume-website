import data from "../data/main.json" assert { type: "json" };

document.title = data.name;
document.querySelector("body").outerHTML = ejs.render(
  `

        <body style="background: var(--color__background)" class="overflow-x-hidden position-relative">
        <div id="container__navigation" class="position-fixed d-flex flex-column">
            <div id="button__navigation__menu--hamburger" class="button__navigation-menu">
                <img src="assets/images/ic_menu_hamburger.svg" alt="ic_menu_hamburger.svg">
            </div>
            <div id="container__navigation--items"
                 class="d-flex justify-content-center align-items-center flex-grow-1">
                <div class="d-flex flex-column">
                    <div id="button__navigation__menu--profile" class="button__navigation-menu selected">
                        <svg width="40"
                             height="40"
                             viewBox="0 0 40 40"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 5C21.2362 5 22.4445 5.36656 23.4723 6.05331C24.5002 6.74007 25.3012 7.71619 25.7743 8.85823C26.2473 10.0003 26.3711 11.2569 26.1299 12.4693C25.8888 13.6817 25.2935 14.7953 24.4194 15.6694C23.5454 16.5435 22.4317 17.1388 21.2193 17.3799C20.007 17.6211 18.7503 17.4973 17.6083 17.0242C16.4662 16.5512 15.4901 15.7501 14.8033 14.7223C14.1166 13.6945 13.75 12.4861 13.75 11.25C13.75 9.5924 14.4085 8.00269 15.5806 6.83058C16.7527 5.65848 18.3424 5 20 5M20 2.5C18.2694 2.5 16.5777 3.01318 15.1388 3.97464C13.6999 4.9361 12.5784 6.30267 11.9161 7.90152C11.2538 9.50037 11.0805 11.2597 11.4182 12.957C11.7558 14.6544 12.5891 16.2135 13.8128 17.4372C15.0366 18.6609 16.5957 19.4943 18.293 19.8319C19.9903 20.1695 21.7497 19.9962 23.3485 19.3339C24.9474 18.6717 26.3139 17.5502 27.2754 16.1112C28.2369 14.6723 28.75 12.9806 28.75 11.25C28.75 8.92936 27.8282 6.70376 26.1872 5.06282C24.5463 3.42187 22.3207 2.5 20 2.5V2.5ZM32.5 37.5H30V31.25C30 30.4292 29.8384 29.6165 29.5243 28.8582C29.2102 28.0999 28.7498 27.4109 28.1694 26.8306C27.5891 26.2502 26.9001 25.7898 26.1418 25.4758C25.3835 25.1617 24.5708 25 23.75 25H16.25C14.5924 25 13.0027 25.6585 11.8306 26.8306C10.6585 28.0027 10 29.5924 10 31.25V37.5H7.50003V31.25C7.50003 28.9294 8.4219 26.7038 10.0628 25.0628C11.7038 23.4219 13.9294 22.5 16.25 22.5H23.75C26.0707 22.5 28.2963 23.4219 29.9372 25.0628C31.5782 26.7038 32.5 28.9294 32.5 31.25V37.5Z"
                                  fill="currentColor"/>
                        </svg>
                    </div>
                    <div id="button__navigation__menu--licenses" class="button__navigation-menu">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 7.5H27.5V10H12.5V7.5ZM12.5 12.5H27.5V15H12.5V12.5ZM12.5 30H20V32.5H12.5V30ZM12.5 17.5H20V20H12.5V17.5Z"
                                  fill="currentColor"/>
                            <path d="M30 37.5H10C9.33719 37.4993 8.70169 37.2357 8.23299 36.767C7.7643 36.2983 7.50069 35.6628 7.50003 35V5C7.50069 4.33716 7.7643 3.70166 8.23299 3.23296C8.70169 2.76427 9.33719 2.50066 10 2.5H30C30.6629 2.50066 31.2984 2.76427 31.7671 3.23296C32.2358 3.70166 32.4994 4.33716 32.5 5V35C32.4994 35.6628 32.2358 36.2983 31.7671 36.767C31.2984 37.2357 30.6629 37.4993 30 37.5ZM10 5V35H30V5H10Z"
                                  fill="currentColor"/>
                        </svg>
                    </div>
                    <div id="button__navigation__menu--impossible-list" class="button__navigation-menu">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.75 12.5H32.5V15H23.75V12.5ZM23.75 18.75H32.5V21.25H23.75V18.75ZM23.75 25H32.5V27.5H23.75V25Z"
                                  fill="currentColor"/>
                            <path d="M35 6.25H5.00003C4.33719 6.25066 3.70169 6.51427 3.23299 6.98296C2.7643 7.45166 2.50069 8.08716 2.50003 8.75V31.25C2.50069 31.9128 2.7643 32.5483 3.23299 33.017C3.70169 33.4857 4.33719 33.7493 5.00003 33.75H35C35.6628 33.749 36.2981 33.4853 36.7667 33.0167C37.2353 32.548 37.499 31.9127 37.5 31.25V8.75C37.4994 8.08716 37.2358 7.45166 36.7671 6.98296C36.2984 6.51427 35.6629 6.25066 35 6.25ZM5.00003 8.75H18.75V31.25H5.00003V8.75ZM21.25 31.25V8.75H35L35.0025 31.25H21.25Z"
                                  fill="currentColor"/>
                        </svg>
                    </div>
                    <div id="button__navigation__menu--timeline" class="button__navigation-menu">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 6C6.20435 6 5.44129 6.31607 4.87868 6.87868C4.31607 7.44129 4 8.20435 4 9V17C4 17.7956 4.31607 18.5587 4.87868 19.1213C5.44129 19.6839 6.20435 20 7 20H25C25.7956 20 26.5587 19.6839 27.1213 19.1213C27.6839 18.5587 28 17.7956 28 17V9C28 8.20435 27.6839 7.44129 27.1213 6.87868C26.5587 6.31607 25.7956 6 25 6H7ZM6 9C6 8.73478 6.10536 8.48043 6.29289 8.29289C6.48043 8.10536 6.73478 8 7 8H25C25.2652 8 25.5196 8.10536 25.7071 8.29289C25.8946 8.48043 26 8.73478 26 9V17C26 17.2652 25.8946 17.5196 25.7071 17.7071C25.5196 17.8946 25.2652 18 25 18H7C6.73478 18 6.48043 17.8946 6.29289 17.7071C6.10536 17.5196 6 17.2652 6 17V9ZM7 22C6.20435 22 5.44129 22.3161 4.87868 22.8787C4.31607 23.4413 4 24.2044 4 25V33C4 33.7956 4.31607 34.5587 4.87868 35.1213C5.44129 35.6839 6.20435 36 7 36H25C25.7956 36 26.5587 35.6839 27.1213 35.1213C27.6839 34.5587 28 33.7956 28 33V25C28 24.2044 27.6839 23.4413 27.1213 22.8787C26.5587 22.3161 25.7956 22 25 22H7ZM6 25C6 24.7348 6.10536 24.4804 6.29289 24.2929C6.48043 24.1054 6.73478 24 7 24H25C25.2652 24 25.5196 24.1054 25.7071 24.2929C25.8946 24.4804 26 24.7348 26 25V33C26 33.2652 25.8946 33.5196 25.7071 33.7071C25.5196 33.8946 25.2652 34 25 34H7C6.73478 34 6.48043 33.8946 6.29289 33.7071C6.10536 33.5196 6 33.2652 6 33V25ZM34 24.874C33.4089 25.0254 32.7911 25.0398 32.1936 24.916C31.5961 24.7923 31.0348 24.5337 30.5524 24.16C30.0701 23.7863 29.6795 23.3073 29.4105 22.7597C29.1414 22.212 29.001 21.6102 29 21C28.9998 20.113 29.2944 19.2512 29.8374 18.5499C30.3805 17.8486 31.1412 17.3477 32 17.126C32.656 16.9571 33.344 16.9571 34 17.126C34.8595 17.347 35.6211 17.8476 36.165 18.5489C36.7088 19.2502 37.0039 20.1125 37.0039 21C37.0039 21.8875 36.7088 22.7498 36.165 23.4511C35.6211 24.1524 34.8595 24.653 34 24.874ZM33 6C33.2652 6 33.5196 6.10536 33.7071 6.29289C33.8946 6.48043 34 6.73478 34 7V15.082C33.338 14.9709 32.662 14.9709 32 15.082V7C32 6.73478 32.1054 6.48043 32.2929 6.29289C32.4804 6.10536 32.7348 6 33 6ZM33 27C32.66 27 32.326 26.972 32 26.918V35C32 35.2652 32.1054 35.5196 32.2929 35.7071C32.4804 35.8946 32.7348 36 33 36C33.2652 36 33.5196 35.8946 33.7071 35.7071C33.8946 35.5196 34 35.2652 34 35V26.918C33.674 26.972 33.34 27 33 27Z"
                                  fill="currentColor"/>
                        </svg>
                    </div>
                    <div id="button__navigation__menu--contact" class="button__navigation-menu">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.5 36.25H32.2875C7.72501 34.8375 4.2375 14.1125 3.75 7.7875C3.71072 7.29573 3.76886 6.80103 3.9211 6.33176C4.07333 5.8625 4.31666 5.42788 4.63715 5.05282C4.95764 4.67775 5.34899 4.36961 5.78877 4.14605C6.22855 3.92249 6.70812 3.7879 7.2 3.75H14.0875C14.5882 3.74952 15.0775 3.89939 15.492 4.1802C15.9066 4.46102 16.2272 4.85984 16.4125 5.325L18.3125 10C18.4954 10.4544 18.5408 10.9526 18.4431 11.4326C18.3453 11.9126 18.1086 12.3533 17.7625 12.7L15.1 15.3875C15.5159 17.7509 16.6477 19.9296 18.3424 21.6287C20.037 23.3278 22.2127 24.4654 24.575 24.8875L27.2875 22.2C27.6394 21.8577 28.0842 21.6266 28.5666 21.5354C29.049 21.4443 29.5475 21.4972 30 21.6875L34.7125 23.575C35.1707 23.7661 35.5615 24.0893 35.8354 24.5033C36.1092 24.9174 36.2535 25.4036 36.25 25.9V32.5C36.25 33.4946 35.8549 34.4484 35.1517 35.1517C34.4484 35.8549 33.4946 36.25 32.5 36.25ZM7.5 6.25C7.16848 6.25 6.85054 6.3817 6.61612 6.61612C6.3817 6.85054 6.25 7.16848 6.25 7.5V7.6C6.825 15 10.5125 32.5 32.425 33.75C32.5892 33.7601 32.7538 33.7378 32.9094 33.6842C33.0649 33.6306 33.2084 33.5468 33.3315 33.4376C33.4546 33.3285 33.5549 33.1961 33.6267 33.048C33.6986 32.9 33.7404 32.7393 33.75 32.575V25.9L29.0375 24.0125L25.45 27.575L24.85 27.5C13.975 26.1375 12.5 15.2625 12.5 15.15L12.425 14.55L15.975 10.9625L14.1 6.25H7.5Z"
                                  fill="currentColor"/>
                        </svg>
                    </div>
                </div>
            </div>
            <a id="button__navigation__menu--download" class="button__navigation-menu selected"  href="/assets/resume.pdf" download  >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.375 27.5H28.75V25H29.375C30.8668 25.0597 32.3213 24.5243 33.4184 23.5116C34.5155 22.4989 35.1653 21.0919 35.225 19.6C35.2847 18.1082 34.7493 16.6537 33.7366 15.5566C32.7239 14.4595 31.3169 13.8097 29.825 13.75H28.75L28.625 12.725C28.3477 10.6206 27.3148 8.68869 25.7189 7.28924C24.1229 5.88979 22.0726 5.1182 19.95 5.1182C17.8274 5.1182 15.7771 5.88979 14.1811 7.28924C12.5852 8.68869 11.5523 10.6206 11.275 12.725L11.25 13.75H10.175C8.68316 13.8097 7.27613 14.4595 6.26343 15.5566C5.25074 16.6537 4.71533 18.1082 4.77501 19.6C4.83468 21.0919 5.48454 22.4989 6.58163 23.5116C7.67872 24.5243 9.13316 25.0597 10.625 25H11.25V27.5H10.625C8.62051 27.4873 6.69146 26.7341 5.20874 25.3851C3.72601 24.0362 2.79428 22.1867 2.59267 20.1924C2.39106 18.198 2.93381 16.1995 4.11657 14.5811C5.29933 12.9627 7.03861 11.8386 9.00001 11.425C9.53964 8.90816 10.926 6.65248 12.9279 5.03435C14.9297 3.41622 17.426 2.53351 20 2.53351C22.5741 2.53351 25.0703 3.41622 27.0721 5.03435C29.074 6.65248 30.4604 8.90816 31 11.425C32.9614 11.8386 34.7007 12.9627 35.8834 14.5811C37.0662 16.1995 37.609 18.198 37.4073 20.1924C37.2057 22.1867 36.274 24.0362 34.7913 25.3851C33.3085 26.7341 31.3795 27.4873 29.375 27.5Z" fill="currentColor"/>
                    <path d="M21.25 32.7125V17.5H18.75V32.7125L15.5125 29.4875L13.75 31.25L20 37.5L26.25 31.25L24.4875 29.4875L21.25 32.7125Z" fill="currentColor"/>
                </svg>
            </a>
        </div>
        <div id="section__main__content" class="d-flex justify-content-start">
            <div id="main__content__container" class="d-flex justify-content-center w-100 ">
                <div class="flex-column w-100">
                    <div id="page__about-me" class="w-100 d-flex flex-row flex-wrap">
                        <div id="container__page-about-me__image"
                             class="col-12 col-sm-12 col-md-5 d-flex flex-column position-relative">
                            <img src="assets/images/image_profile_main.JPG"
                                 alt="profile_image" class="position-absolute">
                            <div id="gradient__main-image" class="position-absolute d-flex flex-column-reverse">
                                <div class="h-25 w-100 d-flex justify-content-center flex-column ">
                                    <p class="text-style__heading-1 mb-2 lh-1"><%=name %></p>
                                    <p class="text-style__content mb-1 text-center"><%=name %></p>
                                    <p class="text-style__accent mb-4"><%=expertise %></p>
                                    <div class="w-100 h-25 mb-3 d-flex justify-content-center align-items-center">
                                        <%if(contact.facebook){%>
                                            <a href="<%-contact.facebook-%>">
                                                <img width="30" height="30" src="assets/images/ic_facebook.svg" alt="ic_facebook"
                                                     class="me-5">
                                            </a>
                                        <%}%>

                                        <%if(contact.linkedin){%>
                                            <a href="<%-contact.linkedin-%>">
                                                <img width="30" height="30" src="assets/images/ic_linkedin.svg" alt="ic_linkedin"
                                                     class="me-5">
                                            </a>
                                        <%}%>

                                        <%if(contact.github){%>
                                            <a href="<%-contact.github-%>">
                                                <img width="30" height="30" src="assets/images/ic_github.svg" alt="ic_github"
                                                     class="me-5">
                                            </a>
                                        <%}%>

                                        <%if(contact.youtube){%>
                                            <a href="<%-contact.youtube-%>">
                                                <img width="35" height="35" src="assets/images/ic_youtube.svg" alt="ic_youtube">
                                            </a>
                                        <%}%>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="container__page-about-me__content"
                             class="col-12 col-sm-12 col-md-7 h-100 d-flex flex-column ps-5 pe-5 pt-3 "
                             style="">
                            <p class="text-style__heading-1 text-start">About me</p>
                            <p class="text-style__path text-start">
                                <span style="color: var(--color__primary)"><%= age%> years</span>
                                <span style="color: var(--color__text-content)">/</span>
                                <span style="color: var(--color__primary)"><%= location %></span>
                                <span style="color: var(--color__text-content)">/</span>
                                <span style="color: var(--color__primary)"><%=jobType %></span>
                            </p>
                            <p class="text-style__content col-md-11 col-12 col-sm-12"><%-intro%></p>
                            <div class="divider"></div>
                            <p class="text-style__heading-2 text-start">My expertise</p>
                            <div class="row mt-5">
                                <div class="col-12 col-sm-12 col-md-6 ">
                                    <div class="d-flex flex-column justify-content-start">
                                        <img src="<%-expertises[0]['icon']%>" alt="<%-expertises[0]['title']%>" width="40" height="40">
                                        <p class="text-style__heading-3 text-start mb-2 mt-3 lh-1"><%-expertises[0]["title"]%></p>
                                        <p class="text-style__content"><%-expertises[0]["content"]%></p>
                                    </div>
                                    <div class=" mt-5">
                                        <div class="d-flex flex-column justify-content-start">
                                            <img src="<%-expertises[1]['icon']%>" alt="<%-expertises[1]['title']%>" width="40"
                                                 height="40">
                                            <p class="text-style__heading-3 text-start mb-2 mt-3 lh-1"><%-expertises[1]["title"]%></p>
                                            <p class="text-style__content"><%-expertises[1]["content"]%></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-6">
                                    <div>
                                        <div class="d-flex flex-column justify-content-start">
                                            <img src="<%-expertises[2]['icon']%>" alt="<%-expertises[2]['title']%>" width="40"
                                                 height="40">
                                            <p class="text-style__heading-3 text-start mb-2 mt-3 lh-1"><%-expertises[2]["title"]%></p>
                                            <p class="text-style__content"><%-expertises[2]["content"]%></p>
                                        </div>
                                    </div>
                                    <div class=" mt-5">
                                        <div class="d-flex flex-column justify-content-start">
                                            <img src="<%-expertises[3]['icon']%>" alt="<%-expertises[3]['title']%>" width="40"
                                                 height="40">
                                            <p class="text-style__heading-3 text-start mb-2 mt-3 lh-1"><%-expertises[3]["title"]%></p>
                                            <p class="text-style__content"><%-expertises[3]["content"]%></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="page__licenses" class="w-100 d-flex flex-column pe-5 ps-5 pt-3">
                        <div class="text-style__heading-1">Licenses & Badges</div>
                        <div id="container__page-license__content" class="d-flex flex-column justify-content-center pt-5 w-100">
                            <div class="d-flex flex-row w-100 justify-content-center flex-wrap">
                            <% licenses.forEach((license)=>{ %>
                                <div class="container__page-licenses__license col-10 col-sm-10 col-md-2
                                d-flex flex-column align-items-center" style="height: 430px">
                                    <div class="container__license__image">
                                        <img src="<%-license.image-%>"
                                             alt=""
                                        >
                                    </div>
                                    <p class="text-style__license__title mt-3 mb-0"><%-license.title-%></p>
                                    <div class="divider" style="width: 90%"></div>
                                    <div class="d-flex flex-column w-100 ps-4 pe-4">
                                        <div class="d-flex flex-row w-100 justify-content-start">
                                            <p class="text-style__license__description__title">Issuer:</p>
                                            <p class="text-style__license__description"><%-license.issuer-%></p>
                                        </div>
                                        <div class="d-flex flex-row w-100 ">
                                            <p class="text-style__license__description__title">Level:</p>
                                            <p class="text-style__license__description"><%-license.level-%></p>
                                        </div>
                                        <div class="d-flex flex-row w-100 ">
                                            <p class="text-style__license__description__title">Duration:</p>
                                            <p class="text-style__license__description"><%-license.duration-%></p>
                                        </div>
                                    </div>
                                </div>
                            <%})%>
                            </div>
                        </div>
                    </div>
                    <div id="page__impossible-list" class="w-100  d-flex flex-column pe-5 ps-5 pt-3">
                        <p class="text-style__heading-1">Impossible list</p>
                        <div id="container__page-impossible-list" class="d-flex flex-column justify-content-center pt-5 w-100">
                            <ul id="ul__page-impossible-list" class="row">
                            <% impossibleList.forEach((item)=>{ %>
                                <% if(item.checked){ %>
                                    <li>
                                        <p class="text-style__heading-3 text-start d-inline">
                                            <s> <%- item.content -%></s>
                                        </p>
                                    </li>
                                <% } else{ %>
                                    <li>
                                        <p class="text-style__heading-3 text-start d-inline"> <%- item.content -%></p>
                                    </li>
                                <%}%>
                            <% }) %>
                            </ul>
                        </div>
                    </div>
                    <div id="page__timeline" class="w-100 d-flex flex-column pe-md-5 ps-md-5 ps-0 pe-0 ps-sm-0 pe-sm-0  pt-3">
                        <div class="text-style__heading-1">Timeline</div>
                        <div class="d-flex justify-content-center mt-5 ms-0 me-0 ">
                            <div class="col-md-10 col-12 col-sm-12 d-flex flex-column align-items-start align-items-sm-start
                             align-items-md-center align-items-lg-center position-relative pb-5 mb-5"
                                 id="container__timeline ">
                                 <% timeline.forEach((item,index)=>{%>
                                     <div class="<%- index%2==0?'row__timeline--reverse':'row__timeline' -%> col-10">
                                        <div class="col-4 text__timeline__date">
                                            <p class="text-style__timeline__date m-0">
                                                <%- item.year -%>
                                            </p>
                                        </div>
                                        <div class="node__timeline"></div>
                                        <div class="card__timeline col-md-4 col-10 col-sm-10 col-lg-4">
                                            <div class="col-4 text__timeline__date">
                                                <p class="text-style__timeline__date m-0">
                                                <%- item.year -%>
                                                </p>
                                            </div>
                                            <p class="text-style__content">
                                                <%- item.content -%>
                                            </p>
                                        </div>
                                    </div>
                                 <%})%>
                                <div class="line__timeline"></div>
                            </div>
                        </div>
                    </div>
                    <div id="page__contact-me" class="w-100 d-flex flex-column pe-5 ps-5 pt-3">
                        <div class="text-style__heading-1">Contact me</div>
                        <div class="d-flex flex-column mt-5">
                            <div class="d-flex flex-row">
                                <p class="text-style__contact--title">Email:</p>
                                <p class="text-style__contact--val ms-2"><%-contact.email-%></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
`,
  data
);
