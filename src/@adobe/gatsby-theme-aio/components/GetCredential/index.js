import React, { useEffect, useState } from 'react';
import { SignIn } from "./SignIn"
import { css } from "@emotion/react";
import PropTypes from 'prop-types';
import { AllowedOrigins, CredentialForm, CredentialName, Download, Downloads, Side } from './CredentialForm';
import classNames from "classnames";
import { IllustratedMessage } from './IllustratedMessage';
import { MyCredential } from './MyCredential';
import { JoinBetaProgram } from './JoinBetaProgram';
import { NoDeveloperAccessError } from "./NoDeveloperAccessError"
import { getOrganization, MAX_MOBILE_WIDTH, MAX_TABLET_SCREEN_WIDTH, MIN_MOBILE_WIDTH } from './FormFields';
import ErrorBoundary from './ErrorBoundary';
import { PreviousCredential } from './PreviousCredential';
import { Loading } from './Loading';
import { PreviousProject } from './PreviousProject';
import { Product, Products } from './Products';
import { defaultTheme, Provider } from '@adobe/react-spectrum';

const GetCredential = ({ credentialType = 'apiKey', children, className, service = "CCEmbedCompanionAPI" }) => {

  const isBrowser = typeof window !== "undefined";
  const [isPrevious, setIsPrevious] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [redirectToBeta, setRedirectBetaProgram] = useState(false);
  const [alertShow, setAlertShow] = useState(false);
  const [organizationChange, setOrganization] = useState(false);
  const [organization, setOrganizationValue] = useState({});
  const [showOrganization, setShowOrganization] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);
  const [isSignedUser, setIsSignedUser] = useState(false);

  let getCredentialData = {};
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.props) {
      getCredentialData[child.type] = child.props;
    }
  });

  const isMyCredential = JSON.parse(localStorage.getItem("myCredential"));

  const getValueFromLocalStorage = async () => {
    const orgInfo = localStorage?.getItem('OrgInfo');
    const getOrgs = await getOrganization(setOrganizationValue);
    if (orgInfo === null) {
      if (getOrgs?.length === 1) {
        setShowOrganization(false);
      }
    }
    else if (getOrgs) {
      const orgData = JSON.parse(orgInfo);
      setShowOrganization(orgData.orgLen === 1 ? false : true);
      setOrganizationValue(orgData);
    }
    if (!getOrgs) {
      setOrganizationValue({});
    }
  }

  useEffect(() => {
    if (isMyCredential) {
      setIsPrevious(true)
    }
    else {
      setIsPrevious(false)
    }
    setTimeout(() => {
      getValueFromLocalStorage()
    }, [1000])
  }, []);

  useEffect(() => {
    if (isSignedUser) {
      if (organization) {
        if (Object?.keys(organization)?.length) {
          setInitialLoading(false)
        }
        else {
          setInitialLoading(true)
        }
      }
    }
    else {
      setTimeout(() => {
        setInitialLoading(false)
      }, [2500])
    }

  }, [isSignedUser, organization])

  useEffect(() => {
    setIsSignedUser(window.adobeIMS?.isSignedInUser() ? true : false)
  }, [window.adobeIMS?.isSignedInUser()])

  return (
    <>
      {
        isBrowser &&
        <ErrorBoundary errorMessage={getCredentialData?.[IllustratedMessage]}>
          <Provider theme={defaultTheme} colorScheme="light" height="100%" >
            <section
              id="adobe-get-credential"
              className={classNames(className)}
              css={css`
                background: #f8f8f8;
                padding: var(--spectrum-global-dimension-size-800) 0 var(--spectrum-global-dimension-size-800) 0;
                          
                @media screen and (min-width:${MIN_MOBILE_WIDTH}) and (max-width:${MAX_MOBILE_WIDTH}){
                  padding: var(--spectrum-global-dimension-size-300) var(--spectrum-global-dimension-size-100);
                }
              `
              }
            >
              <title>Get Credentials</title>
              <div
                css={css`
                width: calc(7 * 100% / 9);
                margin: auto;
                display: flex;
                flex-direction: column;
                gap: 15px;
                text-align:initial;

                @media screen and (min-width:${MIN_MOBILE_WIDTH}) and (max-width:${MAX_TABLET_SCREEN_WIDTH}) {
                  width: 90% ;
                  overflow:hidden;
                }

              `}
              >
                {initialLoading ? <Loading /> :
                  !window.adobeIMS?.isSignedInUser() ? <GetCredential.SignIn signInProps={getCredentialData?.[SignIn]} /> :
                    isPrevious ?
                      <PreviousCredential previousProject={getCredentialData?.[PreviousProject]} formProps={getCredentialData?.[CredentialForm]} welcomeBack={getCredentialData?.[PreviousCredential]} setIsPrevious={setIsPrevious} showOrganization={showOrganization} setOrganizationValue={setOrganizationValue} organizationChange={organizationChange} setOrganization={setOrganization} alertShow={alertShow} setAlertShow={setAlertShow} redirectToBeta={redirectToBeta} setRedirectBetaProgram={setRedirectBetaProgram} modalOpen={modalOpen} setModalOpen={setModalOpen} organization={organization} /> :

                      <GetCredential.Form formProps={getCredentialData} credentialType={credentialType} service={service} modalOpen={modalOpen} setModalOpen={setModalOpen} redirectToBeta={redirectToBeta} setRedirectBetaProgram={setRedirectBetaProgram} alertShow={alertShow} setAlertShow={setAlertShow} organizationChange={organizationChange} setOrganization={setOrganization} organization={organization} setOrganizationValue={setOrganizationValue} showOrganization={showOrganization} setShowOrganization={setShowOrganization} />
                }
              </div>
            </section>
          </Provider>
        </ErrorBoundary>
      }
    </>
  )

};

GetCredential.propTypes = {
  credentialType: PropTypes.string,
  className: PropTypes.string,
}

GetCredential.SignIn = SignIn;
GetCredential.Form = CredentialForm;
GetCredential.Form.CredentialName = CredentialName;
GetCredential.Form.AllowedOrigins = AllowedOrigins;
GetCredential.Form.Products = Products;
GetCredential.Form.Product = Product;
GetCredential.Form.Side = Side;
GetCredential.Form.Downloads = Downloads;
GetCredential.Form.Download = Download;
GetCredential.UnknownError = IllustratedMessage;
GetCredential.Card = MyCredential;
GetCredential.NoBetaAccessError = JoinBetaProgram;
GetCredential.NoDeveloperAccessError = NoDeveloperAccessError;
GetCredential.WelcomeBack = PreviousCredential;
GetCredential.PreviousProject = PreviousProject;

export { GetCredential };
