import React from 'react';
import { css } from "@emotion/react";
import '@spectrum-css/contextualhelp/dist/index-vars.css';
import classNames from "classnames";
import { MAX_TABLET_SCREEN_WIDTH, MIN_MOBILE_WIDTH } from './FormFields';
import { PreviousProject } from './PreviousProject';
import { Loading } from './Loading';
import { Organization } from './Organization';

const PreviousCredential = ({
  welcomeBack,
  previousProject,
  formProps,
  setIsPrevious,
  showOrganization,
  setOrganizationValue,
  organization,
  setIsShow,
  isShow,
  allOrganization
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
            {credentialForm?.paragraph && <p className="spectrum-Body spectrum-Body--sizeL"> {credentialForm?.paragraph} </p>}
            <p
              className="spectrum-Body spectrum-Body--sizeS"
              onClick={() => setIsShow(true)}
              css={css`color:var(--spectrum-global-color-gray-800);display : inline-flex`}
            >
              You’re viewing in [<b>{organization?.name}</b>].
              {showOrganization &&
                <Organization isShow={isShow} setOrganizationValue={setOrganizationValue} setIsShow={setIsShow} organization={organization} allOrganization={allOrganization} />
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
              {welcomeBack?.title && <h3 className='spectrum-Heading spectrum-Heading--sizeM'>{welcomeBack?.title}</h3>}
              {welcomeBack?.paragraph && <p className="spectrum-Body spectrum-Body--sizeL">{welcomeBack?.paragraph}</p>}
              <h3 className='spectrum-Heading spectrum-Heading--sizeM'>Need another credential?</h3>
              <button className="spectrum-Button spectrum-Button--fill spectrum-Button--primary spectrum-Button--sizeM"
                onClick={() => setIsPrevious(false)}
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
            <PreviousProject previousProject={previousProject} />
          </div>
        </div>
      </div>
    </>
  )
}

export { PreviousCredential };