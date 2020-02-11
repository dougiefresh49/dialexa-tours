// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {
  ReactInstance,
  Surface,
  Location
} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
    assetRoot: 'src/assets/',
  });

  const fullCylinderSurface = new Surface(
    4680,
    600,
    Surface.SurfaceShape.Clyinder
  );

  const threeDLocation = new Location([6, -1, -5]);

  r360.renderToLocation(
    r360.createRoot('Dialexa3DScene'),
    threeDLocation
  )

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Dialexa2DScene', { /* initial props */ }),
    fullCylinderSurface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('rooms/the-great-hall.jpg'));
}

window.React360 = { init };
