import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';
import { Row, RowProps } from '../Row';

const imgStyles: CSSProperties = {
  width: '100%',
  maxWidth: 300,
  height: 200,
};

const urlImage =
  'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';

storiesOf('Row', module)
  .add('Default', () => {
    return (
      <Row>
        {[1, 2, 3].map(() => (
          <img src={urlImage} alt="img example" style={imgStyles} />
        ))}
      </Row>
    );
  })
  .add('With gap', () => {
    return (
      <>
        <span className="property">gap="10px"</span>
        <Row gap="10px">
          {[1, 2, 3].map(() => (
            <img src={urlImage} alt="img example" style={imgStyles} />
          ))}
        </Row>
      </>
    );
  })
  .add('With direction', () => {
    return (
      <>
        <span className="property">gap="10px"</span>
        <span className="property">direction="column"</span>
        <Row gap="10px" direction="column">
          {[1, 2, 3].map(() => (
            <img src={urlImage} alt="img example" style={imgStyles} />
          ))}
        </Row>
      </>
    );
  });
