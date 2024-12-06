import Markdown from 'react-markdown';

import rainbowCSS from "./templates/rainbowInterp.css?inline";
import lightCSS from "./templates/lightInterp.css?inline";
import lightMusLabelCSS from "./templates/lightMusLabel.css?inline";

const templates = [
  {
    name: "Rainbow Interpretation",
    instancesPerPage: 1,
    inlineStyles: rainbowCSS,
    props: [
      {name: "title", type: "input", default: "Game Title"},
      {name: "releaseDate", type: "input", default: "Release"},
      {name: "developer", type: "input", default: "Developer"},
      {name: "format", type: "input", default: "Format"},
      {name: "bodyMd", type: "textarea", customTitle: "How to Play", default: `## How to Play
  
  Your excellent content goes here`}
    ],
    template: (props) => {
      let {title, releaseDate, developer, format, bodyMd} = props;

      return(<>
        <div className="title-container">
          <div className="title">{title}</div>
          <div className="subtitle">
            {releaseDate && <span>{releaseDate}</span>}
            {((releaseDate && developer) || (releaseDate && format)) && <span className="subtitle-divider">&bull;</span>}
            <span>{developer}</span>
            {(developer && format) && <span className="subtitle-divider">&bull;</span>}
            <span>{format}</span>
          </div>
        </div>
        <div className="body-section">
          <Markdown>{bodyMd}</Markdown>
        </div>
        <footer>
          <div className="museum-name">The Museum of Art and Digital Entertainment</div>
          <div className="museum-logo">
            <svg width="55" height="63" viewBox="0 0 55 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M27.4208 62.9284L27.3741 62.953L0 43.9349V16.2088H0.0165877L4.30445 12.9384L9.07664 13.0432L8.95842 9.79658L13.3552 6.44195L18.3848 10.0012V3.12355L18.3528 3.08052L22.7736 0L40.757 6.20548L40.682 6.25928H40.7533V7.19997L41.4047 6.74202L44.636 8.93565L44.5538 8.99412H44.5587V18.5816L51.4331 13.6581L54.9988 16.112L54.9675 16.1342L55 16.1344L54.7795 43.713L41.4799 53.8239L41.4743 53.833L41.4708 53.8309L41.422 53.8679V53.8017L38.7219 52.1802C38.6866 53.66 38.3041 55.0761 36.6453 56.4348C34.7165 58.0147 27.4701 63 27.4701 63L27.4208 62.9284ZM0.617725 16.6436V43.6115L27.2404 62.1075L27.1998 35.4626L14.2467 26.2489C14.2467 26.2489 19.9469 21.8237 24.0819 19.1226C25.1361 18.434 26.2125 18.1517 27.2446 18.1393C27.365 18.1377 27.4848 18.14 27.6037 18.1456V15.4868L27.5762 15.5053L19.0025 3.95549V10.4381L27.0561 16.1375L22.568 19.4482L13.3552 12.803L13.3498 15.4449H13.3636V19.447L17.8197 22.5967L13.3552 25.7283L0.617725 16.6436ZM27.8168 35.1639L27.8577 61.8446C29.7894 60.5075 34.6578 57.1182 36.183 55.869C37.9883 54.3904 38.0553 52.8238 37.9731 51.1808C37.9023 49.7622 37.6593 33.9854 37.5693 28.0355C37.3738 28.2631 37.1336 28.4881 36.8423 28.708C34.1637 30.7285 29.3962 34.0635 27.8168 35.1639ZM12.7458 16.0306L8.57666 16.0631L12.7458 19.0103V16.0306ZM40.1358 6.65197L37.0402 8.87694V9.81109L40.1358 7.6343V6.65197ZM36.4227 9.27946L33.8039 8.34719V12.087L36.4227 10.2454V9.27946ZM33.1864 8.39116L30.1471 10.5429L31.7131 12.7391L28.2215 15.0738V16.0128L33.1864 12.5214V8.39116ZM43.941 9.42985L35.536 15.4057L37.485 16.7879L40.8846 14.3644L43.941 16.5765V9.42985ZM43.941 16.6146L40.736 18.938L42.296 20.2022L43.941 19.0239V16.6146ZM54.2762 16.6247L42.1147 25.2497C42.118 28.7403 42.1366 48.3807 42.1404 52.4169L54.0624 43.3533L54.2762 16.6247ZM41.3953 25.7598L41.3675 25.7797L28.2215 16.4366V18.206C29.3583 18.373 30.4094 18.8335 31.2748 19.3843C33.0338 20.5039 34.9931 21.9061 36.646 23.1843C37.2455 23.6476 38.0847 24.6316 38.2609 25.7722H38.2656C38.2656 25.7722 38.2658 25.7842 38.266 25.8075C38.2983 26.0342 38.3041 26.2669 38.2763 26.5029C38.3361 30.4981 38.6242 49.5784 38.7022 51.1443C38.7076 51.2484 38.712 51.352 38.7158 51.4556L41.4213 53.0802L41.3953 25.7598ZM25.0618 4.58535L27.8103 8.08055L30.0015 6.4817L25.0618 4.58535ZM26.6323 22.3444C26.0856 22.3654 25.5041 22.5296 24.9132 22.9165C23.8025 23.6439 21.7188 25.2963 21.7188 25.2963L28.4418 30.0928C28.4418 30.0928 30.819 28.4147 31.8589 27.5273C32.8644 26.6694 32.2911 25.6172 31.7103 25.1477C30.6314 24.2754 30.0573 23.7797 28.9618 23.0652C28.3588 22.6721 27.5437 22.3093 26.6323 22.3444Z" fill="white"/>
            </svg>          
          </div>
        </footer>
      </>);
    }
  },
  {
    name: "Light Interpretation",
    inlineStyles: lightCSS,
    instancesPerPage: 1,
    props: [
      {name: "title", type: "input", default: "Title"},
      {name: "bodyMd", type: "textarea", customTitle: "Body", default: `Your excellent content goes here`}
    ],
    template: (props) => {
      let {title, bodyMd} = props;

      return(<>
        <div className="header-stripe" />
        <div className="title">{title}</div>
        <div className="body-section">
          <Markdown>{bodyMd}</Markdown>
        </div>
      </>);
    }
  },
  {
    name: "Light Museum Label",
    inlineStyles: lightMusLabelCSS,
    instancesPerPage: 4,
    props: [
      {name: "title", type: "input", default: "Title"},
      {name: "itemInfo", type: "input", default: "Item Info"},
      {name: "bodyMd", type: "textarea", customTitle: "Body", default: `Your excellent content goes here`}
    ],
    template: (props) => {
      let {title, itemInfo, bodyMd} = props;

      return(<div className="quarter-sheet">
        <div className="header-stripe" />
        <div className="title">{title}</div>
        {itemInfo && <div className="subtitle">{itemInfo}</div>}
        <div className="body-section">
          <Markdown>{bodyMd}</Markdown>
        </div>
      </div>);
    }
  },
];

export default templates;