import React from "react";
import { styled } from "styled-components";
import MuiButton from "../../UI/MuiButton";
import { useNavigate } from "react-router-dom";

const Product = ({ id, url, title, price }) => {
  const navigate = useNavigate()
  
  const addProductHandler = (id) => {
    // const obj = 
  }

  return (
    <Wrapper>
      <PhoneImg url={url}>
        <div>
          <svg
            width="28"
            height="28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m21.412 15.15.037-.036.032-.039.031-.038a5.33 5.33 0 0 0 1.238-3.406c0-3.103-2.652-5.506-5.779-5.506-1.082 0-2.1.284-2.971.783a5.976 5.976 0 0 0-2.971-.783c-3.127 0-5.779 2.403-5.779 5.506 0 1.455.594 2.772 1.544 3.747l.013.013.013.013.013.013 6.605 6.22.605.57.6-.575 6.769-6.483Z"
              stroke="#383838"
              strokeWidth="1.75"
            ></path>
          </svg>
        </div>
      </PhoneImg>
      <hr />
      <InfoAboutPhone>
        <Price>{price}с</Price>
        <Title>{title}</Title>
      </InfoAboutPhone>
      <Button>
        <MuiButton onClick={() => addProductHandler(id)} width="300px" variant="contained">
          <span>В корзину</span>
        </MuiButton>
      </Button>
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.div`
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 216px;
  padding: 0 0 10px 0;
  transition: 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  }
`;
const PhoneImg = styled.div`
  height: 184px;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    width: 150px;
    height: 150px;
    background-image: ${(props) => `url(${props.url})`};
    background-size: 100%;
    & svg {
      position: relative;
      top: 94%;
      left: 94%
    }
  }
`;
const InfoAboutPhone = styled.div`
  height: 70px;
  padding: 15px;
`;
const Price = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const Title = styled.div`
  font-weight: 500;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;
