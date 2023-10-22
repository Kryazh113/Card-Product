import React, { useState } from "react";
import Title from "/src/title/title";
import Code from "/src/code/code";
import Description from "/src/description/description";
import Comments from "/src/comments/comments";
import Popularity from "/src/popularity/popularity";
import Slider from "/src/slider/slider";
import Tabs from "/src/tabs/tabs";
import Popup from "/src/popup/popup";
import Order from "/src/order/order";
import Accordion from "/src/accordion/accordion";

import {
  StyledProductPage,
  Header,
  ProductWrapper,
  ProductInfo,
  ProductInfoLine,
  PageCounter,
  BuyButton,
  PageFullPrice,
  DeliveryValue
} from "./styled";

const MAX_TEXT_SIZE = 200;
const COMMENTS_COUNT = 3;

function ProductPage({ product, showInfoInAccordion }) {
  const [count, setCount] = useState(1);
  const [isShowAllDescription, setIsShowAllDescription] = useState(false);
  const [commentstShow, setCommentsShow] = useState(COMMENTS_COUNT);
  const tabs = [
    {
      title: "Описание",
      content: (
        <Description
          text={
            isShowAllDescription
              ? product.description
              : product.description.slice(0, MAX_TEXT_SIZE)
          }
          onShowMore={() => setIsShowAllDescription(!isShowAllDescription)}
          isShowAllDescription={isShowAllDescription}
        />
      )
    },
    {
      title: "Комментарии",
      content: (
        <Comments
          comments={product.comments.slice(0, commentstShow)}
          onShowMore={() => setCommentsShow(commentstShow + COMMENTS_COUNT)}
          allCommentsLength={product.comments.length}
        />
      )
    }
  ];
  const price = product.price * count;
  const oldPrice = product.oldPrice * count;
  const [isShowPopup, setIsShowPopup] = useState(false);

  return (
    <StyledProductPage>
      <Header>
        <Title>{product.name}</Title>
        <Code>{product.code}</Code>
      </Header>
      <ProductWrapper>
        <Slider images={product.images} />
        <ProductInfo>
          <ProductInfoLine>
            <PageFullPrice oldPrice={oldPrice} price={price} />
          </ProductInfoLine>
          <ProductInfoLine>
            <PageCounter onChange={setCount} value={count} minValue={0} />
          </ProductInfoLine>
          <ProductInfoLine>
            <span>Доставка:</span>{" "}
            <DeliveryValue>{product.delivery}</DeliveryValue>
          </ProductInfoLine>
          <BuyButton size="large" onClick={() => setIsShowPopup(true)}>
            Купить
          </BuyButton>
          <Popularity count={product.comments.length} />
        </ProductInfo>
      </ProductWrapper>
      {showInfoInAccordion ? <Accordion items={tabs} /> : <Tabs tabs={tabs} />}
      <Popup
        isShow={isShowPopup}
        onClose={() => setIsShowPopup(false)}
        title="Оформление"
      >
        <Order />
      </Popup>
    </StyledProductPage>
  );
}

export default ProductPage;
