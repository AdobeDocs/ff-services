import React from 'react';
import { css } from "@emotion/react";
import firefly from "./images/firefly.png"
import ps from "./images/ps.png"

const Products = () => {

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
    }
  ]

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


        {productList.map((data, index) => {
          if (index < 2)
            return (
              <div
                css={css`
              display : flex;
              align-items : center;
              gap:10px;
            `}
              >
                <img src={data?.icon} css={css`width: 35px;`} />
                <label for="textfield-m" className="spectrum-FieldLabel spectrum-FieldLabel--sizeM"
                  css={css` color: var(--spectrum-global-color-gray-700)`}
                >
                  {data?.name}
                </label>
              </div>
            )
        })}

        <div
          css={css`
              display : flex;
              align-items : center;
              gap:10px;
            `}
        >
          <div css={css`width: 35px;`} />
          <label for="textfield-m" className="spectrum-FieldLabel spectrum-FieldLabel--sizeM"
            css={css` color: var(--spectrum-global-color-gray-700)`}
          >
            <a href="" css={css`
             text-decoration-color: blue;
              color: blue;  
              display: "inline-block";
             `
            }>+{productList.length - 2} more</a>
          </label>
        </div>


        {/* <div
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
        </div> */}

      </div>
    </div>
  )
}

export { Products };