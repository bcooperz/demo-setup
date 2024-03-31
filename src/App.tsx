import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";

/*
    Todos:
     - Use a library to create clickable menus
     - Create collapsible groups, e.g. ticket details
*/

export default function App() {
  return (
    <>
      <style>
        {`

        body {
          padding: 1rem;
          background-color: #1D2125;
          color: white;
        }

        button {
          background-color: #1D2125;
          border-radius: 4px;
          cursor: pointer;
          border: none;
          color: white;
        }

        button:hover {
          background-color: #A1BDD914;
        }

        .main-container {
          display: flex;
          flex-direction: column;
          row-gap: 0.8rem;
        }

        .child-issue-container-header {
          display: flex;
          gap: 1rem;
          justify-content: space-between;
          align-items: center;
        }

        .child-issues-container-header-actions {
          display: flex;
          gap: .5rem;
        }

        .order-by-button {
          display: flex;
          align-items: center;
          padding: .5rem;
          gap: .25rem;
        }

        .item-container {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          column-gap: .6rem;
          padding-bottom: .5rem;
          border-bottom: 1px solid var(--ds-border, lightgray);
        }

        .item-container:nth-of-type(n+2) {
          padding-top: .5rem;
        }

      `}
      </style>
      {/* <div><NavBar /></div> */}
      <div className="main-container">
        <div className="child-issue-container-header">
          <h3>Child issues</h3>
          <div className="child-issues-container-header-actions">
            <button>
              <span className="order-by-button">
                <strong>Order by</strong>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="presentation"
                >
                  <path
                    d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </button>
            <button>
              <div style={{ width: "16px", height: "16px" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  role="presentation"
                >
                  <g fill="currentColor">
                    <circle cx="5" cy="12" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>
            </button>
            <button>
              <div style={{ width: "16px", height: "16px" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  role="presentation"
                >
                  <path
                    d="M13 11V3.993A.997.997 0 0012 3c-.556 0-1 .445-1 .993V11H3.993A.997.997 0 003 12c0 .557.445 1 .993 1H11v7.007c0 .548.448.993 1 .993.556 0 1-.445 1-.993V13h7.007A.997.997 0 0021 12c0-.556-.445-1-.993-1H13z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div>
          <ul style={{ margin: 0, padding: 0 }}>
            <div className="item-container">
              <div>
                <img
                  src="https://mripride.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10654?size=medium"
                  width="16px"
                  height="16px"
                  alt="Issue type: Story"
                ></img>
              </div>
              <div style={{ whiteSpace: "nowrap" }}>PT-21726</div>
              <div>
                Task - Track changes to Assign To, Category, Show on Tribunal
                Report and Summary
              </div>
              <div>
                <img
                  src="https://mripride.atlassian.net/images/icons/priorities/high.svg"
                  width="20px"
                  height="20px"
                  alt="Priority: P1"
                />
              </div>
              <div>4</div>
              <div>
                <img
                  src="https://secure.gravatar.com/avatar/7f37b073093e404735ed845b7df9fd21?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAC-1.png"
                  alt=""
                  width={20}
                  height={20}
                  data-testid="issue-field-assignee.common.ui.read-view.popover.avatar--image"
                  aria-hidden="true"
                />
              </div>
              <span
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                DONE
                <svg
                  role="presentation"
                  width="13"
                  height="13"
                  viewBox="5 5 13 13"
                >
                  <path
                    d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="item-container">
              <div>
                <img
                  src="https://mripride.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10654?size=medium"
                  width="16px"
                  height="16px"
                  alt="Issue type: Story"
                ></img>
              </div>
              <div style={{ whiteSpace: "nowrap" }}>PT-21726</div>
              <div>
                Task - Track changes to Assign To, Category, Show on Tribunal
                Report and Summary
              </div>
              <div>
                <img
                  src="https://mripride.atlassian.net/images/icons/priorities/high.svg"
                  width="20px"
                  height="20px"
                  alt="Priority: P1"
                />
              </div>
              <div>4</div>
              <div>
                <img
                  src="https://secure.gravatar.com/avatar/7f37b073093e404735ed845b7df9fd21?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAC-1.png"
                  alt=""
                  width={20}
                  height={20}
                  data-testid="issue-field-assignee.common.ui.read-view.popover.avatar--image"
                  aria-hidden="true"
                />
              </div>
              <span
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                DONE
                <svg
                  role="presentation"
                  width="13"
                  height="13"
                  viewBox="5 5 13 13"
                >
                  <path
                    d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
  // return <HelloWorld msg="Hello React + TypeScript + Vite" />;
}
