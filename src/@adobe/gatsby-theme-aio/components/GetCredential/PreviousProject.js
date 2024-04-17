import React from 'react';
import { css } from "@emotion/react";
import '@spectrum-css/contextualhelp/dist/index-vars.css';
import classNames from "classnames";
import { MAX_TABLET_SCREEN_WIDTH, MIN_MOBILE_WIDTH } from './FormFields';

const PreviousProject = () => {
  return (
    <>
      <div>
        <h3 className='spectrum-Heading spectrum-Heading--sizeM'>Welcome back</h3>
        <p className="spectrum-Body spectrum-Body--sizeL">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </div>
    </>
  )
}

export { PreviousProject };
