import React from 'react';
import { css } from "@emotion/react";
import firefly from "./images/firefly.png"
import ps from "./images/ps.png"

const Products = () => {
  return (
    <div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 10px;
        `}
      >
        <label for="textfield-m" className="spectrum-FieldLabel spectrum-FieldLabel--sizeM"
          css={css` color: var(--spectrum-global-color-gray-700)`}
        >
          Included products and services
        </label>

        <div
          css={css`
            display : flex;
            align-items : center;
            gap:10px;
          `}
        >
          <img src={firefly} css={css`width: 35px;`} />
          <label for="textfield-m" className="spectrum-FieldLabel spectrum-FieldLabel--sizeM"
            css={css` color: var(--spectrum-global-color-gray-700)`}
          >
            Firefly - Firefly and Creative Cloud Automation API
          </label>
        </div>
        <div
          css={css`
            display : flex;
            align-items : center;
            gap:10px
          `}
        >
          <img src={ps} css={css`width: 35px;`} />
          <label for="textfield-m" className="spectrum-FieldLabel spectrum-FieldLabel--sizeM"
            css={css` color: var(--spectrum-global-color-gray-700)`}
          >
            Adobe Photoshop API
          </label>
        </div>

      </div>
    </div>
  )
}

export { Products };