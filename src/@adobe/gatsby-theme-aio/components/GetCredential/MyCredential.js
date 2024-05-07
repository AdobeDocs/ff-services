import React, { useEffect, useState } from 'react';
import { css } from "@emotion/react";
import classNames from "classnames";
import { SideContent } from './CredentialForm';
import { CopyIcon, getOrganization, KeyIcon, LinkOut, MAX_TABLET_SCREEN_WIDTH, MIN_MOBILE_WIDTH } from './FormFields';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver';
import { Toast } from '@adobe/gatsby-theme-aio/src/components/Toast';
import firefly from "./images/firefly.png"
import ps from "./images/ps.png"
import CustomPopover from './CustomPopover';
import { ActionButton, Tooltip, TooltipTrigger } from '@adobe/react-spectrum';

const MyCredential = ({
  credentialProps,
  formData,
  setShowCreateForm,
  setShowCredential,
  organizationName,
  response,
  orgID,
  organization
}) => {

  const [isTooltipOpen, setTooltipOpen] = useState(null);
  const [isDownloadStart, setIsDownloadStart] = useState();
  const [isCopiedTooltip, setCopiedTooltip] = useState('');

  const myCredentialFields = {};

  credentialProps?.[MyCredential].children.forEach(({ type, props }) => {
    myCredentialFields[type] = { ...props };
  })

  const accessToken = myCredentialFields[AccessToken];
  const cardDevConsoleLink = myCredentialFields[DevConsoleLink];
  const credentialDetails = myCredentialFields[CardClientDetails];

  const Credential = [
    {
      key: "API Key",
      value: response["apiKey"]
    },
    {
      key: "Allowed domains",
      value: formData['AllowedOrigins']
    },
    {
      key: "Organization",
      value: organizationName
    }
  ];

  const productList = [
    {
      name: " Firefly - Firefly and Creative Cloud Automation API",
      icon: firefly
    },
    {
      name: "Adobe Photoshop API",
      icon: ps
    },
    {
      name: "Adobe Analytics"
    },
    {
      name: "Adobe products"
    }
  ]

  useEffect(() => {
    const getItemFromLocalStorage = JSON.parse(localStorage.getItem("myCredential"))
    let setCredentialValue;
    const credentialName = formData['CredentialName'];
    const keyCredential = { "name": credentialName, credential: Credential }
    if (getItemFromLocalStorage) {
      setCredentialValue = [keyCredential, ...getItemFromLocalStorage]
    }
    else {
      setCredentialValue = [keyCredential]
    }
    localStorage.setItem("myCredential", JSON.stringify(setCredentialValue))
  }, [])

  useEffect(() => {
    if (formData['Downloads']) {
      downloadZIP(`/console/api/organizations/${orgID}/projects/${response.projectId}/workspaces/${response.workspaceId}/download`, formData['Download'], formData['zipUrl'])
    }

  }, [])

  const card = credentialProps?.[MyCredential];

  const devConsoleLink = `/console/projects/${organization?.id}/${response.projectId}/overview`;

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    setCopiedTooltip(true);
  };

  const handleRestart = () => {
    setShowCreateForm(true);
    setShowCredential(false);
  }

  const handleLeave = () => {
    setTooltipOpen(null);
  }

  const downloadZIP = async (
    downloadAPI,
    fileName = 'download',
    zipFileURL
  ) => {
    try {
      const zipData = await JSZipUtils.getBinaryContent(zipFileURL);
      const zipArrayBuffer = new Uint8Array(zipData).buffer;
      const zip = new JSZip();

      setIsDownloadStart(true)

      await zip.loadAsync(zipArrayBuffer);

      const token = window.adobeIMS?.getTokenFromStorage()?.token;
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
          "x-api-key": window?.adobeIMS?.adobeIdData?.client_id
        }
      };

      const response = await fetch(downloadAPI, options);

      if (response.status === 200) {
        const credential = await response.json();

        zip.file('credential.json', JSON.stringify(credential));

        const modifiedZipBlob = await zip.generateAsync({ type: 'blob' });
        saveAs(modifiedZipBlob, `${fileName}.zip`);
      } else {
        console.error('Failed to fetch additional data. Response status:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      setIsDownloadStart(false)
    }
  };

  return (
    <div
      className={classNames(card?.className)}
      css={css`
        display: flex;
        flex-direction: column;
        gap: 16px;
      `}
    >
      <div
        className={classNames(card?.className)}
        css={css`
          display: flex;
          flex-direction: column;
          gap: 16px;
          color:var(--spectrum-global-color-gray-800);
          width: 100%;
          height: 100%;
          text-align: left;

          @media screen and (min-width:${MIN_MOBILE_WIDTH}) and (max-width:${MAX_TABLET_SCREEN_WIDTH}){
            padding: 0;
            width: 100%;
          }
        `}
      >
        <div
          css={css`
            display:flex;
            gap:20px;
            align-items: baseline;
        `}
        >
          {card?.title &&
            <h2
              className="spectrum-Heading spectrum-Heading--sizeL"
              css={css`
                font-weight:700;
                color:var(--spectrum-global-color-gray-900);
              `}
            >{card?.title}</h2>}
          {isDownloadStart &&
            <div css={
              css`
                display:flex;
                text-align: center;
                align-items: center;
                gap: 10px;
              `}>
              <div class="spectrum-ProgressCircle spectrum-ProgressCircle--indeterminate spectrum-ProgressCircle--small">
                <div class="spectrum-ProgressCircle-track"></div>
                <div class="spectrum-ProgressCircle-fills">
                  <div class="spectrum-ProgressCircle-fillMask1">
                    <div class="spectrum-ProgressCircle-fillSubMask1">
                      <div class="spectrum-ProgressCircle-fill"></div>
                    </div>
                  </div>
                  <div class="spectrum-ProgressCircle-fillMask2">
                    <div class="spectrum-ProgressCircle-fillSubMask2">
                      <div class="spectrum-ProgressCircle-fill"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p css={css`margin:0`}>Downloading...</p>
            </div>
          }
        </div>
        {formData['Downloads'] && card?.paragraph &&
          <p
            className="spectrum-Body spectrum-Body--sizeL"
            css={css`
            color:var(--spectrum-global-color-gray-900);
          `}>
            {card?.paragraph}
          </p>
        }
        {formData['Downloads'] &&
          <p
            className="spectrum-Body spectrum-Body--sizeS"
            css={css`
              color:var(--spectrum-global-color-gray-900);
            `}
          >
            Download not working?
            <button
              css={css`
                padding:0;
                font-family:'adobe-clean';
                border: none;
                background: transparent;
                margin-left: 10px;
                cursor:pointer;
                text-decoration:underline;
                color:rgb(0, 84, 182);
                &:hover {
                  color: rgb(2, 101, 220);
                }
              `}
              onClick={() => downloadZIP(`/console/api/organizations/${organization?.id}/projects/${response.projectId}/workspaces/${response.workspaceId}/download`, formData['Download'], formData['zipUrl'])}
            >
              Restart download
            </button>
          </p>}
      </div>
      <div
        css={css`
          display:flex;
          gap: 35px;
          
          @media screen and (min-width:${MIN_MOBILE_WIDTH}) and (max-width:${MAX_TABLET_SCREEN_WIDTH}){
            flex-direction:column;
            padding-left: 0;
          }

        `}
      >
        <div
          css={css`
            display:flex;
            flex-direction : column;
            gap: 35px;
            width:50%;

            @media screen and (min-width:${MIN_MOBILE_WIDTH}) and (max-width:${MAX_TABLET_SCREEN_WIDTH}){
              width:100%;
            }

          `}
        >
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
                  align-items:flex-start;
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
                    {formData['CredentialName']}
                  </h3>
                  <div
                    css={css`
                      display : flex;
                      gap : 10px; 
                      align-items : center;                   
                    `}
                  >
                    {productList.map((data, index) => {
                      if (index < 2)
                        return (
                          <div
                            css={css`
                              & > button {
                                border : none !important;
                              }
                            `}
                          >
                            <TooltipTrigger delay={0}>
                              <ActionButton aria-label="Edit Name">
                                <img
                                  src={data?.icon}
                                  css={css`
                                    width: 35px;
                                    cursor : pointer;
                                  `}
                                />
                              </ActionButton>
                              <Tooltip>{data?.name}</Tooltip>
                            </TooltipTrigger>
                          </div>
                        )
                    })}
                    <CustomPopover productList={productList} />
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

                {accessToken && <div css={css`
                  display : flex;
                  flex-direction : column;
                  gap:16px;
                `}>
                  <AccessToken accessToken={accessToken} />
                </div>}

                {cardDevConsoleLink && <DevConsoleLink cardDevConsoleLink={cardDevConsoleLink} formData={formData} />}

                {credentialDetails && <CardClientDetails credentialDetails={credentialDetails} />}

                {Credential?.map(({ key, value }, index) => {
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
                  <a href={card?.nextStepsHref} target="_blank" rel="noreferrer">
                    <button
                      className={`spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM`}
                      css={css`width:fit-content;margin-top:10px`}>
                      <span className="spectrum-Button-label">{card?.nextStepsLabel}</span>
                    </button>
                  </a>
                  <a href={devConsoleLink} target="_blank" rel="noreferrer"
                    css={css`
                      color: var(--spectrum-global-color-gray-800);
                      margin: 2px 0;
                      &:hover {
                        color: var(--spectrum-global-color-gray-900);
                      }
                    `}
                  >
                    <div css={css`display:flex;`}>
                      <div>{card?.developerConsoleManage}</div>
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
          <div
            css={css`
              display:flex;
              flex-direction:column;
              gap:8px;
              width: 80%;
            `}
          >
            <h4 className="spectrum-Heading spectrum-Heading--sizeXS"
              css={css`
                font-weight:700;
                color:var(--spectrum-global-color-gray-900);
              `}
            >Need another credential</h4>
            <p className="spectrum-Body spectrum-Body--sizeS">
              <button onClick={handleRestart}
                css={css`
                  border: none;
                  padding:0;
                  font-family:'adobe-clean';
                  background: transparent;
                  color:var(--spectrum-global-color-gray-800);
                  text-decoration:underline;
                  cursor:pointer;
                  &:hover {
                    color:var(--spectrum-global-color-gray-900)
                  }
                `
                }>
                Restart and create a new credential
              </button>
            </p>
          </div>
        </div>
        {card?.children ? <SideContent sideContent={myCredentialFields[MyCredentialSide]?.children} SideComp={MyCredentialSide} /> : null}
      </div>
      {isCopiedTooltip && <Toast variant='success' message="Copied to clipboard" disable={1000} customDisableFunction={setCopiedTooltip} />}
    </div>
  )
}

const MyCredentialSide = ({ side }) => (side);

const AccessToken = (accessToken) => {
  return (
    <>
      {accessToken?.heading && <h4 className="spectrum-Heading spectrum-Heading--sizeS">{accessToken?.heading}</h4>}
      {accessToken?.buttonLabel && <button css={css`width: 180px;`} className="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM">
        <span className="spectrum-Button-label">{accessToken?.buttonLabel}</span>
      </button>}
    </>
  )
};

const DevConsoleLink = ({ cardDevConsoleLink, formData }) => {
  return (
    <>
      <div css={css`
          display : flex;
          flex-direction : column;
          gap:16px;
        `}>
        {cardDevConsoleLink?.heading && <h4 className="spectrum-Heading spectrum-Heading--sizeS">{cardDevConsoleLink?.heading}</h4>}

        <div css={css`display:flex;`}>
          <div><p className="spectrum-Body spectrum-Body--sizeS"
            css={css`
              font-family: Source Code Pro,Monaco,monospace;
              white-space: normal;
              overflow-wrap: anywhere;
              max-width: 300px;
              color: #0265DC;
            `}
          >{formData['CredentialName']}</p></div>
          <div css={
            css`
              margin-left:10px;
              @media screen and (min-width:${MIN_MOBILE_WIDTH}) and (max-width:${MAX_TABLET_SCREEN_WIDTH}){
                display:none;
              }
            }`
          }><LinkOut /></div>
        </div>
      </div>
    </>
  )
}

const CardClientDetails = ({ credentialDetails }) => {
  return (
    <div>
      <h4 className="spectrum-Heading spectrum-Heading--sizeS">{credentialDetails.heading}</h4>
    </div>
  )
}

const CardClientId = () => { }
const CardClientSecret = () => { }
const CardOrganizationName = () => { }
const CardScopes = () => { }

export { MyCredential, MyCredentialSide, AccessToken, DevConsoleLink, CardClientDetails, CardClientId, CardClientSecret, CardOrganizationName, CardScopes };
