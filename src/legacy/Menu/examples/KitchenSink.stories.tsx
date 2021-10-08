import LegacyKitchenSink from './KitchenSink';
import React from 'react';

export default {
  title: 'Legacy/Menu',
  component: LegacyKitchenSink,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Legacy = () => <LegacyKitchenSink />;

export { Legacy };
