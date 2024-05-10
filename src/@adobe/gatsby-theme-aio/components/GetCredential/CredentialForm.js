import React, { useContext, useEffect, useState } from 'react';
import { css } from "@emotion/react";
import classNames from "classnames";
import '@spectrum-css/contextualhelp/dist/index-vars.css';
import { Toast } from '@adobe/gatsby-theme-aio/src/components/Toast';
import Context from '@adobe/gatsby-theme-aio/src/components/Context';
import { MAX_TABLET_SCREEN_WIDTH, MIN_MOBILE_WIDTH } from './FormFields';
import { SideCredential } from './Form/SideCredential';
import { CredentialName } from './Form/CredentialName';
import { AllowedOrigins } from './Form/AllowedOrigins';
import { Downloads } from './Form/Downloads';
import { Download } from './Form/Download';
import { SideContent } from './Form/SideContent';
import { AdobeDeveloperConsole } from './Form/AdobeDeveloperConsole';
import { CreateCredential } from './Form/CreateCredential';
import { MyCredential } from './MyCredential';
import { Loading } from "./Loading";
import { IllustratedMessage } from "./IllustratedMessage";
import { JoinBetaProgram } from './JoinBetaProgram';
import { NoDeveloperAccessError } from './NoDeveloperAccessError';
import { Product, Products } from './Products';
import { Organization } from './Organization';

const hostnameRegex = /^(localhost:\d{1,5}|(\*\.|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+)|\*|(\*\.[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+))$/;
const credentialNameRegex = /^(?=[A-Za-z0-9\s]{6,}$)[A-Za-z0-9\s]*$/;

const CredentialForm = ({
  formProps,
  credentialType,
  service,
  organization,
  setOrganizationValue,
  organizationChange,
  setOrganizationChange,
  allOrganization,
  showCreateForm,
  setShowCreateForm,
  isCreateNewCredential,
  setIsCreateNewCredential
}) => {

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState({});
  const [errResp, setErrorResp] = useState("");
  const [showCredential, setShowCredential] = useState(false);
  const [formField, setFormField] = useState([]);
  const [formData, setFormData] = useState({});
  const [isValid, setIsValid] = useState(false);

  const [isShow, setIsShow] = useState(false);
  const [alertShow, setAlertShow] = useState(false);



  const credentialForm = formProps?.[CredentialForm];
  const isFormValue = credentialForm?.children?.filter(data => Object.keys(data.props).some(key => key.startsWith('contextHelp')));

  const getValueFromLocalStorage = async () => {
    if (!allOrganization) {
      setOrganizationValue({});
      setShowCreateForm(false)
    }
  }

  const initialLoad = () => {
    const fields = {};
    const downloadObj = { label: "Language", selectOptions: [] };
    const productsObj = { label: "products", productList: [] }

    credentialForm?.children.forEach(({ type, props }) => {
      if (type === Downloads && props?.children) {
        downloadObj.required = props.required || false;
        downloadObj.selectOptions.push(...[].concat(props.children).map(({ props: { title, href } }) => ({ title, href })));
        setFormData(prevData => ({ ...prevData, ...(Array.isArray(props.children) ? null : { Download: props.children?.props?.title }) }));
      }
      if (type === Products && props?.children) {
        productsObj.productList.push(...[].concat(props.children).map(({ props: { label, icon } }) => ({ label, icon })));
      }
      fields[type] = { ...props, required: type === CredentialName || props?.required };
    });

    if (downloadObj.selectOptions.length) {
      fields[Download] = downloadObj;
      if (downloadObj.selectOptions.length === 1) {
        setFormData(prevData => ({ ...prevData, Download: downloadObj.selectOptions[0]?.title, zipUrl: downloadObj.selectOptions[0]?.href }));
      }
    }
    if (productsObj?.productList.length) {
      fields[Product] = productsObj
    }

    setFormField(fields);
    getValueFromLocalStorage();

  }

  useEffect(() => {
    if (window.adobeIMS?.isSignedInUser()) {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
    else {
      setLoading(true)
    }
  }, [window.adobeIMS?.isSignedInUser()])

  useEffect(() => {
    setTimeout(() => {
      setOrganizationChange(false);
    }, 8000);
  }, [organizationChange])

  useEffect(() => {
    if (showCreateForm) setIsError(false);
  }, [showCreateForm])

  useEffect(() => {
    if (!showCredential && showCreateForm) {
      const updateForm = { ...formData };
      for (const key in updateForm) {
        updateForm[key] = ''
      };
      setFormData(updateForm);
      setAlertShow(false);
    }
  }, [showCredential])

  useEffect(() => { initialLoad(); }, []);

  useEffect(() => {
    if (!organization) {
      setOrganizationValue(undefined);
      setShowCreateForm(false);
      setLoading(true);
    }
    else if (organization && Object.keys(organization)?.length !== 0) {
      setShowCreateForm(true)
      setIsError(true)
      setTimeout(() => {
        setLoading(false)
        setIsError(false)
      }, 2000)
    }
    else {
      if (Object.keys(organization)?.length === 0) {
        setOrganizationValue(undefined);
        setShowCreateForm(false);
      }
    }
  }, [organization])

  useEffect(() => {
    if (isError) {
      const updateForm = { ...formData };
      for (const key in updateForm) {
        updateForm[key] = ''
      };
      setFormData(updateForm);
    }
  }, [isError])

  useEffect(() => {
    const requiredFields = Array.from(credentialForm?.children || []).filter(child => child?.props?.required || child.type === CredentialName)?.map(child => child.type)
    const isValidCredentialName = credentialNameRegex.test(formData.CredentialName) && formData['CredentialName']?.length >= 6;
    const isCheckAllowedOrgins = requiredFields.filter((data) => data.name === "AllowedOrigins")
    const validateAllowedOrigins = formData['AllowedOrigins']?.split(',').map((data) => hostnameRegex.test(data.trim()));
    const isAllowedOriginsValid = isCheckAllowedOrgins.length ? validateAllowedOrigins?.every((value) => value === true) && formData["AllowedOrigins"] !== undefined && formData["AllowedOrigins"]?.length !== 0 : true;

    const isValid = isValidCredentialName && isAllowedOriginsValid && formData.Agree === true;

    setIsValid(isValid);
  }, [formData]);



  const handleChange = (e, type) => {
    const value = (type === "Downloads" || type === "Agree") ? e.target.checked : e.target.value;
    setFormData(prevData => ({ ...prevData, [type]: value }));

    if (type === "Download" && formData['Downloads']) {
      const selectedData = formField?.[Download]?.selectOptions.find(data => data.title === e.target.value);
      selectedData && setFormData(prevData => ({ ...prevData, zipUrl: selectedData.href }));
    }

  };

  const createCredential = async () => {
    const token = window.adobeIMS?.getTokenFromStorage()?.token;

    if (!token) {
      console.log('User not logged in');
    }

    setLoading(true);
    setShowCreateForm(false);

    const data = {
      name: formData["CredentialName"],
      platform: credentialType,
      description: 'created for get credential',
      domain: formData["AllowedOrigins"],
      services: [{ sdkCode: service }],
    };

    try {
      const response = await fetch(`/console/api/organizations/${organization?.id}/integrations/adobeid`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          "x-api-key": window?.adobeIMS?.adobeIdData?.client_id,
        },
        body: JSON.stringify(data),
      });

      const resResp = await response.json();

      if (response.status === 200) {
        setResponse(resResp);
        setShowCredential(true);
        setAlertShow(true);
      } else if (resResp?.messages) {
        setAlertShow(true);
        setIsValid(false);
        setErrorResp(resResp?.messages[0]?.message);
        setShowCreateForm(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  const sideObject = formField?.[SideCredential];
  const credentialName = formField?.[CredentialName];
  const allowedOrigins = formField?.[AllowedOrigins];
  const downloads = formField?.[Downloads];
  const download = formField?.[Download];
  const products = formField?.[Products];
  const product = formField?.[Product];
  const adobeDeveloperConsole = formField?.[AdobeDeveloperConsole];

  return (
    <>
      {showCreateForm && !loading && organization &&
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
              {credentialForm?.title && <h3 className="spectrum-Heading spectrum-Heading--sizeL">{credentialForm?.title}</h3>}
              {credentialForm?.paragraph &&
                <p
                  className="spectrum-Body spectrum-Body--sizeL">
                  {credentialForm?.paragraph}
                </p>
              }
              <p
                className="spectrum-Body spectrum-Body--sizeS"
                css={css`color:var(--spectrum-global-color-gray-800);display : inline-flex;`}
                onClick={() => setIsShow(true)}
              >
                You're creating this credential in  {organization?.type === "developer" ? "in your personal developer organization" : <span>[<b>{organization?.name}</b>] </span>}.
                <Organization isShow={isShow} setOrganizationChange={setOrganizationChange} setOrganizationValue={setOrganizationValue} setIsShow={setIsShow} organization={organization} allOrganization={allOrganization} />
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
                  gap:32px;
                  flex-direction:column;
                  width: 100%;
                `}
              >
                {credentialName && <CredentialName nameProps={credentialName} isFormValue={isFormValue} formData={formData} handleChange={handleChange} />}
                {allowedOrigins && <AllowedOrigins originsProps={allowedOrigins} isFormValue={isFormValue} formData={formData} handleChange={handleChange} />}
                {downloads && download && <Downloads downloadsProp={downloads} type="Downloads" formData={formData} handleChange={handleChange} />}
                {formData['Downloads'] && download && <Download downloadProp={download} formData={formData} isFormValue={isFormValue} handleChange={handleChange} />}
                <Products products={products} product={product} />
                {adobeDeveloperConsole && <AdobeDeveloperConsole formData={formData} adobeDeveloperConsole={adobeDeveloperConsole} handleChange={handleChange} />}
                <CreateCredential createCredential={createCredential} isValid={isValid} setIsCreateNewCredential={setIsCreateNewCredential} isCreateNewCredential={isCreateNewCredential} />
              </div>
            </div>
            {sideObject ? <SideContent sideContent={sideObject?.children} SideComp={SideCredential} /> : null}
          </div>
        </div>
      }

      {alertShow &&
        <>
          {organizationChange ?
            <Toast message="Organization Changed" variant="success" disable={8000} customDisableFunction={setAlertShow} /> :
            <Toast
              customDisableFunction={setAlertShow}
              message={showCreateForm && !showCredential ? errResp : !isError && showCredential && `Your credentials were created successfully.`}
              variant={isError || (showCreateForm && !showCredential) ? "error" : "success"}
              disable={isError || (showCreateForm && !showCredential) ? null : 8000}
            />
          }
        </>
      }
      {loading && !showCredential && !isError && !showCreateForm && organization && <Loading credentials={credentialForm} isCreateCredential downloadStatus={formData['Downloads']} />}
      {(!organization || isError) && loading && <Loading />}
      {isError && !showCreateForm && !showCredential && !organization && <IllustratedMessage errorMessage={formProps?.[IllustratedMessage]} />}
      {showCredential && !showCreateForm && <MyCredential credentialProps={formProps} response={response} setShowCreateForm={setShowCreateForm} setShowCredential={setShowCredential} organizationName={organization?.name} formData={formData} orgID={organization?.id} organization={organization} />}
    </>
  )
}

export { CredentialForm };