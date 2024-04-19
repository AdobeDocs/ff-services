import React, { useState } from 'react';
import { css } from "@emotion/react";
import '@spectrum-css/contextualhelp/dist/index-vars.css';
import { MAX_MOBILE_WIDTH, MAX_TABLET_SCREEN_WIDTH, MIN_MOBILE_WIDTH, MIN_TABLET_SCREEB_WIDTH, LinkOut, KeyIcon, CopyIcon } from './FormFields';
import { Picker } from "@adobe/gatsby-theme-aio/src/components/Picker";
import firefly from "./images/firefly.png"
import ps from "./images/ps.png"

const PreviousProject = () => {

  const [selectedIndex, setSelectedIndex] = useState();
  const [isTooltipOpen, setTooltipOpen] = useState(null);
  const [isCopiedTooltip, setCopiedTooltip] = useState('')

  const organization = [
    {
      name: 'Oraganization1'
    },
    {
      name: 'Oraganization2'
    },
  ]

  const testCredential = [
    {
      key: "Credential ID",
      value: "20fdf910ffe949549a63e2ca6d517376"
    },
    {
      key: "Client secret",
      value: "Retrieve and copy client secret"
    },
    {
      key: "Scopes",
      value: "openid, AdobeID, read_organizations"
    }
  ]

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    setCopiedTooltip(true);
  };

  const handleLeave = () => {
    setTooltipOpen(null);
  }

  return (
    <>
      <div css={css`
        display : flex;
        flex-direction : column;
        gap:24px;
      `}>
        <h3 className='spectrum-Heading spectrum-Heading--sizeM'>Previously created projects</h3>
        <p className="spectrum-Body spectrum-Body--sizeL">Select a project and access your existing credentials for Firefly - Firefly and Creative Cloud Automation.</p>
        <div>

          <div>
            <div css={css`display:flex;`}>
              <a href="/console/project" target="_blank" rel="noreferrer"
                css={css`
                  color:#0265DC;
                `}
              >Manage all your projects and credentials on Adobe Developer Console</a>
              <div css={
                css`
                  margin-left:10px;
                  cursor : pointer;
                  @media screen and (min-width:${MIN_MOBILE_WIDTH}) and (max-width:${MAX_TABLET_SCREEN_WIDTH}){
                    display:none;
                  }
                
                & > svg > path{
                  fill : #0265DC !important;
                }
                `
              }><LinkOut /></div>
            </div>
          </div>

        </div>

        <div
          css={css`
              display : flex;
              flex-direction : column;
              gap:2px;
          `}
        >
          <p className="spectrum-Body spectrum-Body--sizeS" css={css`color: #464646`}>Projects * </p>
          <div
            css={css`
                        
                & > div > .spectrum-Picker {
                  width: 100% !important;
                  height: 20px;
                }

                & > div > div {
                  width: 22%;

                  @media screen and (min-width:${MIN_MOBILE_WIDTH}) and (max-width:${MAX_MOBILE_WIDTH}){
                    width: 82%;
                    left: 15%;
                  }

                  @media screen and (min-width:${MIN_TABLET_SCREEB_WIDTH}) and (max-width:${MAX_TABLET_SCREEN_WIDTH}){
                    width: 91%;
                    left: 7%;
                  }

                }

                & > div > .spectrum-Picker-popover > ul > li > div > div {
                  margin : 0 ;
                }

                & > div > .spectrum-Picker-popover > ul > li > div > div > svg {
                  @media screen and (min-width:${MIN_MOBILE_WIDTH}) and (max-width:${MAX_TABLET_SCREEN_WIDTH}){
                    margin: 3px;
                    padding: 0;
                  }
                }

                  padding: 8px;
                  border-radius: 3px;
                  border: 1px solid #909090 !important;
                  width: 400px;

                ` }
          >
            <Picker
              isQuiet
              items={organization.map((organs, k) => {
                return {
                  title: organs?.name,
                  selected: k === selectedIndex
                }
              })}
              onChange={(index) => {
                setSelectedIndex(index);
              }}
            />
          </div>
          <p className="spectrum-Body spectrum-Body--sizeS" css={css`color: #464646`}>Only your projects that contain credentials are shown.</p>

        </div>

        {/* ----------- form ------------  */}

        <div
          css={css`
            background: white;
            border-radius: 8px;
            width: 90%;

            @media screen and (min-width:${MIN_MOBILE_WIDTH}) and (max-width:${MAX_TABLET_SCREEN_WIDTH}){
              width:100%;
            }

          `}
        >
          <div
            css={css`
              padding: 5%;
              display:flex;
              flex-direction:column;
              gap:24px;
              border: 1px solid var(--spectrum-global-color-gray-200);
              border-radius: 8px;
            `}
          >
            <div
              css={css`
                  display:flex;
                  gap:20px;
                  align-items:center;
                `}
            >
              <KeyIcon />
              <div
                css={css`
                    display : flex ;
                    flex-direction : column;
                    gap: 8px;
                  `}
              >
                <h3 className="spectrum-Heading spectrum-Heading--sizeM">
                  {/* {formData['CredentialName']} */}MyNewOAuthServer2ServerCredential
                </h3>
                <div
                  css={css`
                      display : flex;
                      gap : 10px;                    
                    `}
                >
                  <img src={firefly} css={css`width: 35px;`} />
                  <img src={ps} css={css`width: 35px;`} />
                </div>
              </div>
            </div>

            <hr
              css={css`
                  margin:0;
                  border: none;
                  border-top: 1px solid #D0D0D0 !important;
                `}
            />
            <div
              css={css`
                  display: flex;
                  flex-direction: column;
                  gap: 32px;
                `}
            >

              <div css={css`
                  display : flex;
                  flex-direction : column;
                  gap:16px;
                `}>
                <h4 className="spectrum-Heading spectrum-Heading--sizeS">Access Token</h4>
                <button css={css`width: 180px;`} className="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM">
                  <span className="spectrum-Button-label">Generate and copy token</span>
                </button>
              </div>

              <div css={css`
                  display : flex;
                  flex-direction : column;
                  gap:16px;
                `}>
                <h4 className="spectrum-Heading spectrum-Heading--sizeS">Developer Console Project</h4>


                <div css={css`display:flex;`}>
                  <div><p className="spectrum-Body spectrum-Body--sizeS"
                    css={css`
                      font-family: Source Code Pro,Monaco,monospace;
                      white-space: normal;
                      overflow-wrap: anywhere;
                      max-width: 300px;
                      color: #0265DC;
                    `}
                  >MyNewOAuthServer2ServerCredential</p></div>
                  <div css={
                    css`
                        margin-left:10px;
                        cursor : pointer;
                        @media screen and (min-width:${MIN_MOBILE_WIDTH}) and (max-width:${MAX_TABLET_SCREEN_WIDTH}){
                          display:none;
                        }
                      }`
                  }><LinkOut /></div>
                </div>
              </div>

              <div>
                <h4 className="spectrum-Heading spectrum-Heading--sizeS">Credential details</h4>
              </div>

              {testCredential?.map(({ key, value }, index) => {
                return (
                  <>
                    {value &&
                      <>
                        <div
                          css={css`
                              display:flex;
                              flex-direction:column;
                              gap:8px;
                            `}
                        >
                          <p className="spectrum-Body spectrum-Body--sizeS">{key}</p>
                          <div
                            css={css` 
                                display:flex;
                                align-items: center;
                                gap: 24px; 
                              `}>


                            {key === "Client secret" ?
                              <button class="spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM"
                                css={css`
                                    cursor : pointer;
                                    border: 1px solid var(--spectrum-global-color-gray-400);
                                    border-radius: 3px;
                                    padding: 3px 6px;
                                    height:32px;
                                    background :transparent;
                                  `}
                              >
                                <span class="spectrum-ActionButton-label">{value}</span>
                              </button> :
                              <p className="spectrum-Body spectrum-Body--sizeS"
                                css={css`
                                    font-family: Source Code Pro,Monaco,monospace;
                                    white-space: normal;
                                    overflow-wrap: anywhere;
                                    max-width: 300px;
                                  `}
                              >{value}</p>
                            }

                            {key !== "Client secret" &&

                              <div css={css`position:relative;display:${key === "Organization" ? "none" : "block"}`}>
                                <button className="spectrum-ActionButton spectrum-ActionButton--sizeM"
                                  onMouseEnter={() => setTooltipOpen(index)}
                                  onMouseLeave={handleLeave}
                                  onClick={() => handleCopy(value, index)}
                                  css={css`
                                    border: 1px solid var(--spectrum-global-color-gray-400);
                                    border-radius: 3px;
                                    padding: 3px 6px;
                                  `}
                                >
                                  {<span className="spectrum-ActionButton-label"><CopyIcon /></span>}
                                </button>

                                {isTooltipOpen === index && (
                                  <span
                                    className="spectrum-Tooltip spectrum-Tooltip--top is-open"
                                    css={css`
                                      position: absolute;
                                      bottom: 25px;
                                      top: unset;
                                      white-space: nowrap;
                                    `}
                                  >
                                    <span className="spectrum-Tooltip-label">Copy</span>
                                    <span className="spectrum-Tooltip-tip"></span>
                                  </span>
                                )}
                              </div>

                            }

                          </div>
                        </div>
                      </>
                    }
                  </>
                )
              })}
              <div
                css={css`
                    display:flex;
                    gap:24px;
                    align-items: end;

                    @media screen and (min-width:${MIN_MOBILE_WIDTH}) and (max-width:${MAX_TABLET_SCREEN_WIDTH}){
                      flex-direction:column;
                      align-items:start;
                    }
                  `}
              >
                <a href="/credentials/nextsteps" target="_blank" rel="noreferrer">
                  <button
                    className={`spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM`}
                    css={css`width:fit-content;margin-top:10px`}>
                    <span className="spectrum-Button-label">Next steps</span>
                  </button>
                </a>
                <a href="/console/project" target="_blank" rel="noreferrer"
                  css={css`
                      color: var(--spectrum-global-color-gray-800);
                      margin: 2px 0;
                      &:hover {
                        color: var(--spectrum-global-color-gray-900);
                      }
                    `}
                >
                  <div css={css`display:flex;`}>
                    <div>Manage on Developer Console</div>
                    <div css={
                      css`
                        margin-left:10px;
                        @media screen and (min-width:${MIN_MOBILE_WIDTH}) and (max-width:${MAX_TABLET_SCREEN_WIDTH}){
                          display:none;
                        }
                      }`
                    }><LinkOut /></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export { PreviousProject };
