import React, { useEffect, useRef, useState } from 'react';
import { css } from "@emotion/react";
import firefly from "./images/firefly.png"
import ps from "./images/ps.png"
import { Popover } from '@adobe/gatsby-theme-aio/src/components/Popover';

const Products = () => {

  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef();

  const handleClickOutside = e => {
    if (buttonRef.current.contains(e.target)) setIsOpen(!isOpen);
    else setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });

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
            position : relative;
          `}
        >
          <div css={css`width: 35px;`} />
          <label for="textfield-m" className="spectrum-FieldLabel spectrum-FieldLabel--sizeM"
            css={css` color: var(--spectrum-global-color-gray-700)`}
          >
            <div
              ref={buttonRef}
              aria-label="productList"
              aria-controls="productList"
              aria-expanded={true}
              css={css`
                text-decoration-color: blue;
                text-decoration : underline;
                color: blue;  
                display: "inline-block";
                cursor:pointer;
              `
              }>+{productList.length - 2} more</div>
          </label>

          <Popover
            id={"productList"}
            isOpen={isOpen}
            css={css`
              width: var(--spectrum-global-dimension-size-4600);
              max-height: var(--spectrum-global-dimension-size-6000);
              top: 15px;
              margin-left: 40px;
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
                    padding : 10px 0;
                    cursor : pointer;
                  `}
              >
                {productList.map((product) => {
                  return <div css={css`padding:5px;`}>{product.name}</div>
                })}
              </div>
            </div>
          </Popover>

        </div>

      </div>
    </div>
  )
}

export { Products };