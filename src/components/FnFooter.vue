<template>
    <div class="footer">
        <div class="public_flex">
        <div class="left">
            <p>POWERERMF BY <span>OPENCADS</span> JKLFJ @ 2017</p>
        </div>
        <div class="right">
            <ul>
                <li>
                    <a href="#">
                        <svg viewBox="0 0 310 310">
                            <path d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73   c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783   c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598   C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467   c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977   c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889   c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597   c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961   c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895   c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367   c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998   C307.394,57.037,305.009,56.486,302.973,57.388z"/>
                        </svg>
                        twitter
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg viewBox="0 0 310 310">
                        <path d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064   c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996   V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545   C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703   c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/>
                        </svg>
                        facebook
                    </a>
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>
<style scoped>
.footer {
    background: #000;
}
.footer .public_flex {
    padding: 30px 60px;
}
.footer .public_flex .left {
    color: #666666;
    font-size: 0.875rem;
    flex: 3 3;
}
.footer .public_flex .left span {
    font-size: 0.875rem;
    color: #cccccc;
}
.footer .public_flex .right {
    flex: 1 1;
}
.footer .public_flex ul {
    display: flex;
    justify-content: flex-end;
}
.footer .public_flex ul li {
    padding: 0;
}
.footer .public_flex ul li a {
    padding: 0 20px;
    display: flex;
    color: #cccccc;
    font-size: 0.875rem;
}
.footer .public_flex ul li a svg{
    fill: #ccc;
    width: 100%;
    height: 14px;
    margin-right: 6px;
}
.footer .public_flex ul li:last-child a {
    padding-right: 0;
}
.footer .public_flex ul li a:hover{
    color: white;
}
.footer .public_flex ul li a:hover svg{
    fill: #fff;
}
@media (max-width: 1200px) {
    .footer .public_flex {
        padding: 30px;
    }
}
@media (max-width: 768px) {
    .footer {
        text-align: center;
    }
    .footer .public_flex {
        padding: 30px 20px;
    }
    .footer .public_flex ul {
        margin-top: 10px;
        text-align: center;
    }
    .footer .public_flex ul li:last-child a {
        padding-right: 0;
    }
}
</style>
