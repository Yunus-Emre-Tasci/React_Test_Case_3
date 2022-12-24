import React from 'react'
import { Container } from 'react-bootstrap'
import moneyFormat from '../Helper';

const Header = ({total,money}) => {
  return (
    <Container
      fluid
      className="header sticky-top text-center text-white rounded-2 shadow-lg w-100"
    >
      {total > 0 && money - total !== 0 && (
        <h1>
          Harcamak için
          <span className="px-2 text-dark fw-bold lh-lg font-monospace">
            ${moneyFormat(money - total)}
          </span>
          kaldı!
        </h1>
      )}
      {total === 0 && (
        <h1>
          Harcamak için
          <span className="px-2 text-dark fw-bold lh-lg font-monospace">
            ${moneyFormat(money)}
          </span>
          var!
        </h1>
      )}
      {money - total === 0 && (
        <h1>Paran bitti, lütfen biraz tasarruf yap!🙁</h1>
      )}
    </Container>
  );
}

export default Header