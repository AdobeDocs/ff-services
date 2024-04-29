import React, { useEffect, useRef, useState } from 'react';
import { css } from "@emotion/react";
import '@spectrum-css/contextualhelp/dist/index-vars.css';
import classNames from "classnames";
import { getOrganization, MAX_MOBILE_WIDTH, MAX_TABLET_SCREEN_WIDTH, MIN_MOBILE_WIDTH, MIN_TABLET_SCREEB_WIDTH } from './FormFields';
import { PreviousProject } from './PreviousProject';
import { ChangeOrganization } from './ChangeOrganization';
import { Popover } from '@adobe/gatsby-theme-aio/src/components/Popover';
import { Picker } from '@adobe/gatsby-theme-aio/src/components/Picker';
import { Loading } from './Loading';

const PreviousCredential = ({
  welcomeBack,
  previousProject,
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
  setModalOpen,
  organization
}) => {

  const credentialForm = formProps;

  const [isShow, setShow] = useState(false);
  // const [allOrganization, setAllOrganization] = useState([]);
  // const [selectedIndex, setSelectedIndex] = useState();
  // const [isModalOpen, setIsModelOpen] = useState()

  // const getValueFromLocalStorage = async () => {
  //   const getOrgs = await getOrganization(setOrganizationValue);
  //   if (getOrgs) {
  //     setAllOrganization(getOrgs)
  //   }
  // }

  // const organizationRef = useRef();
  // const organizationRef2 = useRef();

  // const handleClickOutside = e => {
  //   console.log('ulla',e.target)
  //   console.log('ulla2',organizationRef.current , organizationRef.current.contains(e.target))
  //   if (organizationRef.current && !organizationRef.current.contains(e.target)) setShow(false);
  //   // else setShow(false);
  // };

  // useEffect(() => {
  //   const handleClickOutside = e => {
  //     console.log('ulla',e.target)
  //     console.log('ulla2',organizationRef.current , organizationRef.current.contains(e.target))
  //     if (organizationRef.current && !organizationRef.current.contains(e.target)) setShow(false);
  //     // else setShow(false);
  //   };
  //   document.addEventListener('click', handleClickOutside);
  //   return () => document.removeEventListener('click', handleClickOutside);
  // },[]);

  const handleClick = () => {

  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     getValueFromLocalStorage()
  //   }, [2000])
  // }, [])

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
              onClick={() => setShow(true)}
              css={css`color:var(--spectrum-global-color-gray-800);display : inline-flex`}
            >
              You’re viewing in [<b>{organization?.name}</b>].
              {showOrganization &&
                <>
                  <div
                  // ref={organizationRef2}
                  >
                    <div
                      // ref={organizationRef}
                      aria-label="credentialProject"
                      aria-controls="credentialProject"
                      aria-expanded={isShow}
                      id='yuoiu'
                      css={css`
                        text-decoration-color: blue;
                        text-decoration : underline;
                        color: blue;  
                        display: "inline-block";
                        cursor:pointer;
                      `
                      }>
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
                        position : relative;
                        cursor:pointer;`
                        }
                        onClick={() => setModalOpen(true)}
                      >
                        Change organization?
                      </button>
                    </div>
                  </div>
                  {/* <Popover
                    id="credentialProject"
                    isOpen={isShow}
                    css={css`
                      width: var(--spectrum-global-dimension-size-6000);
                      max-height: var(--spectrum-global-dimension-size-6000);
                      height: var(--spectrum-global-dimension-size-4600);
                      margin-top: 20px;
                      right: 50%;
                    `}>
                    <div
                      css={css`
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                      `}>
                      <div
                        css={css`
                          padding : 40px;
                          cursor : pointer;
                        `}
                      >
                        {allOrganization.length ?
                          <div className="spectrum-Dialog-grid">
                            <h1 className="spectrum-Dialog-heading spectrum-Dialog-heading--noHeader">Change organization</h1>
                            <hr className="spectrum-Divider spectrum-Divider--sizeM spectrum-Divider--horizontal spectrum-Dialog-divider" />
                            <section className="spectrum-Dialog-content">
                              <div
                                css={css`
                                display:flex;
                                flex-direction:column;
                                gap:20px;
                              `}
                              >
                                <div>
                                  An organization is the entity that functions like a log-in company that spans all Adobe products and applications. Most often, an organization is your company name.However, a company can have many organizations. Change the organization here.
                                </div>
                                <div
                                  css={css`
                                  display : flex; 
                                  flex-direction:column;
                                `}>
                                  <div className="spectrum-Textfield spectrum-Textfield--sizeM">
                                    <p
                                      css={css`color: var(--spectrum-global-color-gray-600);margin:0;`}>
                                      Organization
                                    </p>
                                  </div>

                                  <div
                                    css={css`
                        
                                    & > div > .spectrum-Picker {
                                      width: 100% !important;
                                      height: 20px;
                                    }
          
                                    & > div > div {
                                      width: 86%;
                                      left: 9%;
                                      height : 40%;
          
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
          
                                      padding: 5px;
                                      border-radius: 3px;
                                      border: 1px solid #D0D0D0 !important;

                                    ` }
                                  >
                                    <Picker
                                      isQuiet
                                      items={allOrganization?.map((organs, k) => {
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

                                </div>
                                <div
                                  css={css`
                                    display: flex;
                                    gap: 5px;
                                  `}
                                >
                                  <span>Can't find your organization?</span>
                                  <a href="https://some_help_link"
                                    target="_blank"
                                    rel="noreferrer"
                                    css={css`
                                    color:rgb(0, 84, 182);
                                    &:hover {
                                      color: rgb(2, 101, 220);
                                    }`
                                    }
                                  >Learn more about organizations.</a>
                                </div>

                                <div className="spectrum-ButtonGroup spectrum-Dialog-buttonGroup spectrum-Dialog-buttonGroup--noFooter" css={css` gap: 20px; `} >
                                  <button className="spectrum-Button spectrum-Button--sizeM spectrum-Button--outline spectrum-Button--secondary spectrum-ButtonGroup-item" type="button" onClick={handleClick}>
                                    <span className="spectrum-Button-label">Cancel</span>
                                  </button>
                                  <button className="spectrum-Button spectrum-Button--sizeM spectrum-Button--fill spectrum-Button--accent spectrum-ButtonGroup-item" type="button"  >
                                    <span className="spectrum-Button-label" >Save</span>
                                  </button>
                                </div>
                              </div>

                            </section>

                          </div>
                          :
                          <Loading />
                        }
                      </div>
                    </div>
                  </Popover> */}

                </>
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
            <PreviousProject previousProject={previousProject} />
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