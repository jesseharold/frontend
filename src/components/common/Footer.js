import React from 'react';

const Footer = () => {
  return (
    <div>
      <h2>Helping Angelenos find healthy food</h2>
      <ul>
        <li><a href='/locations'>Map</a></li>
        <li><a href='/sponsors'>Organizations</a></li>
        <li><a href='/resources'>Resources</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/team'>Team</a></li>
        <li><a href='/team'>Team</a></li>
        <li><a href='/news'>News</a></li>
        <li><a href='/faqs'>FAQS</a></li>
        <li><a href='#donate'>Donate</a></li>
      </ul>

      <section class="sponsors">
        <h2>Created at</h2>
        <div>
          <a href="http://www.hackforla.org/civic-hack-nights" class="hack-for-la">
            <img src="/../../components/assets/images/hackforla.png" alt="Hack for LA"/>
          </a>
          
        </div>
      </section>


      <section id='donate'>
        <h2>Support this project</h2>
        <p>We're a volunteer-based project and would love your donation!</p>
        <p>On the donation page, please choose <em>Los Angeles Brigade</em> and make it in honor of <em>Food Oasis LA</em> with the email address <a href='mailto:info@foodoasis.la'>info@foodoasis.la</a></p>
        <p class="action"><a href="https://www.codeforamerica.org/donate" target="_blank">Donate</a></p>
      </section>
    </div>

    /* ----- this is what is on the official food oasis 'footer' ----- */
    /*<footer id="navigation">
      <h2>Helping Angelenos find healthy food</h2>
      <ul class="link-list has-icons">
        <li>
          <a href="/locations">
            <!-- Map icon
            by Jose Moya
            https://thenounproject.com/search/?q=map&i=47766 -->

            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="20" height="20">
              <path fill="#FFFFFF" d="M64.062,31.871c-3.385,0-6.131-2.745-6.131-6.132c0-3.388,2.746-6.131,6.131-6.131c3.387,0,6.133,2.744,6.133,6.131  C70.195,29.126,67.449,31.871,64.062,31.871 M64.062,48.125c0,0,12.74-15.893,12.74-22.929c0-7.036-5.703-12.739-12.74-12.739  c-7.035,0-12.738,5.703-12.738,12.739C51.324,32.233,64.062,48.125,64.062,48.125 M34.422,78.792l-13.244-5.457V35.403l13.244,5.454  V78.792z M84.318,78.001V30.024l-4.793-2.552c-0.365,1.353-0.943,2.823-1.662,4.341l1.811,1.323v37.931L66.43,65.614V48.421  c-0.475,0.616-0.826,1.058-1,1.275L64.062,51.4l-1.365-1.704c-0.162-0.204-0.482-0.604-0.91-1.158v18.984l-22.723,9.359V38.948  l12-4.119c-0.756-1.451-1.414-2.881-1.91-4.236l-14.732,5.241l-17.889-7.364v47.977l17.889,7.368L66.43,70.634v0.002L84.318,78.001z  "></path>
            </svg>
            <span>Map</span>
          </a>
        </li>
        <li><a href="/organizations"><span>Organizations</span></a></li>
        <li><a href="/resources"><span>Resources</span></a></li>
        <li><a href="/about"><span>About</span></a></li>
        <li><a href="/team"><span>Team</span></a></li>
        <li><a href="/news"><span>News</span></a></li>
        <li><a href="/faqs"><span><abbr title="Frequently Asked Questions">FAQs</abbr></a></span></li>
        <li><a href="#donate"><span>Donate</span></a></li>
      </ul>

      <section class="sponsors">
        <h2>Created at</h2>
        <div>
          <a href="http://www.hackforla.org/civic-hack-nights" class="hack-for-la">
            <img src="/assets/images/hackforla.png" alt="Hack for LA" />
          </a>
          
        </div>
      </section>

      <section class="donate" id="donate">
        <h2>Support this project</h2>
        <p>We’re a volunteer-based project and would love your donation!</p>
        <p>On the donation page, please choose <em>Los Angeles Brigade</em> and make it in honor of <em>Food Oasis LA</em> with the email address <em>info@foodoasis.la</em></p>
        <p class="action"><a href="https://www.codeforamerica.org/donate" target="_blank">Donate</a></p>
      </section>

      <section class="contact">
        <h2>Have a question? Want to help?</h2>
        <p class="join"><p>Join us at <a href="http://www.hackforla.org/civic-hack-nights">Hack for LA</a>, Tuesdays at 6pm</p>
    </p>
        <p class="action"><a href="mailto:contact@foodoasis.la">Send us a message</a></p>
        <div>
          <a href="mailto:contact@foodoasis.la">
            <svg class="email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="40" height="40">
              <switch>
                <g>
                  <path class="circle" d="M0,30 C0,13.4314567 13.4508663,0 30.0433526,0 C46.6358389,0 60.0867052,13.4314567 60.0867052,30 C60.0867052,46.5685433 46.6358389,60 30.0433526,60 C13.4508663,60 0,46.5685433 0,30 Z" id="back" fill="#DC4E41"></path>
                  <path class="icon" d="M45.4186047,39.6 C45.4186047,40.0456 45.0683256,40.4 44.6223721,40.4 L15.3768372,40.4 C14.938,40.4 14.5813953,40.0392 14.5813953,39.6 L14.5813953,20.4 C14.5813953,20.1496 14.6984186,19.9376 14.8739535,19.7904 L28.2762791,32.5968 C29.225907,33.504 30.7725116,33.5064 31.7237209,32.5968 L45.1236744,19.7928 C45.3,19.9408 45.4186047,20.1528 45.4186047,20.4 L45.4186047,39.6 Z M43.0227907,19.6 L30.638093,31.4336 C30.2965116,31.7592 29.7034884,31.7592 29.361907,31.4336 L16.9772093,19.6 L43.0227907,19.6 Z M45.4668372,18.1632 C45.2644186,18.0616 44.9868837,18 44.6223721,18 L15.3768372,18 C15.0091628,18 14.7308372,18.0616 14.5292093,18.1632 C13.6325581,18.508 13,19.376 13,20.4 L13,39.6 C13,40.9216 14.0642791,42 15.3768372,42 L44.6223721,42 C45.9452093,42 47,40.9256 47,39.6 L47,20.4 C47,19.3784 46.3611163,18.5088 45.4668372,18.1632 L45.4668372,18.1632 Z" id="MESSAGE" fill="#FFFFFF"></path>
                </g>
                <foreignObject>E-mail</foreignObject>
              </switch>
            </svg>
          </a>

          <a href="http://fb.me/foodoasisla">
            <svg class="facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="40" height="40">
              <switch>
                <g>
                  <path class="circle" d="M0,30 C0,13.4314567 13.4314567,0 30,0 C46.5685433,0 60,13.4314567 60,30 C60,46.5685433 46.5685433,60 30,60 C13.4314567,60 0,46.5685433 0,30 Z" id="back" fill="#3B5998"></path>
                  <path class="icon" d="M32.1269439,46.6393459 L32.1269439,30.317762 L36.6324148,30.317762 L37.229487,24.6932538 L32.1269439,24.6932538 L32.1345986,21.8781333 C32.1345986,20.411175 32.2739793,19.6251452 34.3809551,19.6251452 L37.1975921,19.6251452 L37.1975921,14 L32.6914833,14 C27.2789219,14 25.3738406,16.7284916 25.3738406,21.3169565 L25.3738406,24.6938908 L22,24.6938908 L22,30.318399 L25.3738406,30.318399 L25.3738406,46.6393459 L32.1269439,46.6393459 Z" id="Shape" fill="#FFFFFF"></path>
                </g>
                <foreignObject>Facebook</foreignObject>
              </switch>
            </svg>
          </a>

          <a href="http://twitter.com/foodoasisla">
            <svg class="twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="40" height="40">
              <switch>
                <g>
                  <path class="circle" d="M0,30 C0,13.4314567 13.4314567,0 30,0 C46.5685433,0 60,13.4314567 60,30 C60,46.5685433 46.5685433,60 30,60 C13.4314567,60 0,46.5685433 0,30 Z" id="back" fill="#55ACEE"></path>
                  <path class="icon" d="M29.1015033,24.3843758 L29.1644564,25.4224435 L28.1152374,25.2953331 C24.2960803,24.8080769 20.9595639,23.1556426 18.1266726,20.3804004 L16.7417035,19.0033719 L16.3849691,20.0202545 C15.6295314,22.2870554 16.1121721,24.6809665 17.6860006,26.2910307 C18.5253758,27.180803 18.3365164,27.3079133 16.8885942,26.778287 C16.3849691,26.6088065 15.9442971,26.4816962 15.9023283,26.5452514 C15.7554377,26.6935467 16.2590628,28.6213867 16.657766,29.3840487 C17.2033599,30.4433014 18.315532,31.4813691 19.5326261,32.0957357 L20.5608607,32.582992 L19.3437666,32.604177 C18.1686414,32.604177 18.1266726,32.6253621 18.2525789,33.0702482 C18.6722665,34.4472768 20.3300325,35.9090455 22.1766579,36.5445972 L23.4776895,36.9894833 L22.344533,37.6674051 C20.6657826,38.6419176 18.6932509,39.192729 16.7207192,39.2350991 C15.7764221,39.2562842 15,39.3410244 15,39.4045796 C15,39.6164301 17.5600943,40.8027932 19.0499853,41.2688644 C23.5196582,42.645893 28.8287063,42.0527114 32.8157385,39.7011703 C35.6486298,38.027551 38.4815211,34.7014974 39.803537,31.4813691 C40.5170059,29.7653797 41.2304749,26.6299916 41.2304749,25.1258527 C41.2304749,24.1513402 41.293428,24.0242299 42.4685533,22.8590518 C43.1610378,22.1811301 43.8115536,21.4396532 43.9374599,21.2278026 C44.1473037,20.8252866 44.1263193,20.8252866 43.0561159,21.1854325 C41.2724436,21.8209842 41.0206311,21.7362439 41.901975,20.7829165 C42.5524908,20.1049947 43.3289128,18.8762616 43.3289128,18.5161156 C43.3289128,18.4525605 43.0141471,18.5584857 42.6574127,18.7491512 C42.2796938,18.9610018 41.4403186,19.2787776 40.8107873,19.4694431 L39.6776307,19.829589 L38.6493961,19.1304822 C38.0828179,18.7491512 37.2854114,18.3254501 36.8657238,18.1983398 C35.7955205,17.901749 34.1587388,17.9441191 33.1934574,18.28308 C30.5704099,19.2364075 28.9126439,21.6938738 29.1015033,24.3843758 Z" id="Shape" fill="#FFFFFF"></path>
                </g>
                <foreignObject>Twitter</foreignObject>
              </switch>
            </svg>
          </a>
        </div>
      </section>
    </footer>*/
  );
};

export default Footer;