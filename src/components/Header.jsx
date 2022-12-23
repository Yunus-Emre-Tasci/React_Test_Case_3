import React from 'react'
import { Container } from 'react-bootstrap'

const Header = ({total,money}) => {
  return (
    <Container
      fluid
      className="header sticky-top text-center text-white rounded-2 shadow-lg"
      style={{ letterSpacing: "0.4rem" }}
    >
      {total > 0 && money - total !== 0 && (
        <h1>
          Harcamak için{" "}
          <span className="px-2 font-bold lh-lg font-monospace">
            {" "}
            {money - total}{" "}
          </span>{" "}
          var!{" "}
        </h1>
      )}
      {total === 0 && (
        <h1>
          Harcamak için
          <span className="px-2 font-bold lh-lg font-monospace">{money}</span>
          var!
        </h1>
      )}
      {money-total===0 && <h1>Paran bitti, lütfen biraz tasarruf yap!🙁</h1>

      }
    </Container>
  );
}

export default Header