import React from 'react';
import { css } from "@emotion/react";
import '@spectrum-css/contextualhelp/dist/index-vars.css';
import classNames from "classnames";
import { MAX_TABLET_SCREEN_WIDTH, MIN_MOBILE_WIDTH } from './FormFields';
import { PreviousProject } from './PreviousProject';
import { ChangeOrganization } from './ChangeOrganization';


const PreviousCredential = ({
  formProps,
  setPrevious,
  showOrganization,
  setOrganizationValue,
  organizationChange,
  setOrganization,
  alertShow,
  setAlertShow,
  redirectToBeta,
  setRedirectBetaProgram,
  modalOpen,
  setModalOpen
}) => {

  const credentialForm = formProps;

  return (
    <>
      <div
        className={classNames(credentialForm?.className)}
        css={css`
            display: flex;
            flex-direction: column;
            gap: 48px;
          `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 48px;
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
                display: flex;
                flex-direction: column;
                gap: 16px;
              `}
          >
            {credentialForm?.title && <h3 className="spectrum-Heading spectrum-Heading--sizeXL">{credentialForm?.title}</h3>}
            <p
              className="spectrum-Body spectrum-Body--sizeL">
              Create unique credentials that you will use to call the Firefly - Firefly and Creative Cloud Automation from your application.
            </p>
            <p
              className="spectrum-Body spectrum-Body--sizeS"
              css={css`color:var(--spectrum-global-color-gray-800);`}
            >
              You’re viewing in [<b>Adobe IO DEV</b>].
              {showOrganization &&
                <button
                  tabIndex="0"
                  css={css`
                    border: none;
                    padding:0;
                    font-family:'adobe-clean';
                    background: transparent;
                    margin-left :10px;
                    text-decoration:underline;
                    color: var(--spectrum-global-color-gray-800);
                    cursor:pointer;`
                  }
                  onClick={() => setModalOpen(true)}
                >
                  Change organization?
                </button>
              }
            </p>
          </div>
        </div>
        <div
          css={css`
              display:flex;
              gap: 35px;

              @media screen and (min-width:${MIN_MOBILE_WIDTH}) and (max-width:${MAX_TABLET_SCREEN_WIDTH}){
                flex-direction : column;
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
                  display:flex;
                  gap:16px;
                  flex-direction:column;
                  width: 100%;
                `}
            >
              <h3 className='spectrum-Heading spectrum-Heading--sizeM'>Welcome back</h3>
              <p className="spectrum-Body spectrum-Body--sizeL">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
              <h3 className='spectrum-Heading spectrum-Heading--sizeM'>Need another credential?</h3>
              <button className="spectrum-Button spectrum-Button--fill spectrum-Button--primary spectrum-Button--sizeM"
                onClick={() => setPrevious(false)}
                css={css`
                  width : 180px;
                  height : 32px;
                `}
              >
                <span className="spectrum-Button-label">Create new credential</span>
              </button>
            </div>
          </div>

          <div
            css={css`
              width: 1px; 
              background-color: #D5D5D5; 

              @media screen and (min-width:${MIN_MOBILE_WIDTH}) and (max-width:${MAX_TABLET_SCREEN_WIDTH}){
                display:none;
              }

            `}
          />
          <div>
            <PreviousProject />
          </div>
        </div>
      </div>
      {modalOpen && (
        <ChangeOrganization
          setModalOpen={setModalOpen}
          redirectToBeta={redirectToBeta}
          setRedirectBetaProgram={setRedirectBetaProgram}
          setAlertShow={setAlertShow}
          alertShow={alertShow}
          organizationChange={organizationChange}
          setOrganization={setOrganization}
          setOrganizationValue={setOrganizationValue}
        />
      )}
    </>
  )
}

export { PreviousCredential };