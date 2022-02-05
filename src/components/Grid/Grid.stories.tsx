import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '../Grid';

const imgStyles: CSSProperties = {
  width: '100%',
  maxWidth: 300,
  height: 200,
};

const urlImage =
  'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';

storiesOf('Grid', module)
  .add('Default', () => {
    return (
      <Grid>
        {[1, 2, 3].map(() => (
          <img src={urlImage} alt="img example" style={imgStyles} />
        ))}
      </Grid>
    );
  })
  .add('With columns', () => {
    return (
      <>
        <span className="property">gap="10px"</span>
        <span className="property">columns="1fr 1fr 1fr"</span>
        <Grid columns="1fr 1fr 1fr" gap="10px">
          {[1, 2, 3].map(() => (
            <img src={urlImage} alt="img example" style={imgStyles} />
          ))}
        </Grid>
      </>
    );
  })
  .add('With minmax', () => {
    return (
      <>
        <span className="property">gap="10px"</span>
        <span className="property">width="500px"</span>
        <span className="property">{'minMax={{ min: "200px", max: "1fr" }}'}</span>
        <Grid width="500px" minMax={{ min: '200px', max: '1fr' }} gap="10px">
          {[1, 2, 3].map(() => (
            <img src={urlImage} alt="img example" style={imgStyles} />
          ))}
        </Grid>
      </>
    );
  })
  .add('With rows', () => {
    return (
      <>
        <span className="property">gap="10px"</span>
        <span className="property">columns="1fr 1fr"</span>
        <span className="property">rows="1fr 1fr"</span>

        <Grid gap="10px" columns="1fr 1fr" rows="1fr 1fr">
          {[1, 2, 3, 4].map(() => (
            <img src={urlImage} alt="img example" style={imgStyles} />
          ))}
        </Grid>
      </>
    );
  });
