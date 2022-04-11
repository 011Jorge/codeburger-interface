import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  grid-gap: 50px 20px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);

  .container-top {
    display: grid;
    gap: 10px;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';
    .title {
      grid-area: title;
      margin-bottom: 20px;
      padding: 10px;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
    }

    .delivery-ax {
      grid-area: delivey-tax;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 50px;
  }
`
