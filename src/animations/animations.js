import { gsap } from 'gsap';

export const initializeLayers = (layersRefs) => {
  layersRefs.forEach(ref => {
    if (ref.current) {
      gsap.set(ref.current, { autoAlpha: 0, y: 20 });
    }
  });
  // Activate the first layer by default
  gsap.set(layersRefs[0].current, { autoAlpha: 1 });
};

export const toggleLayerVisibility = (layerRef, layersRefs) => {
  if (layerRef.current) {
    const isVisible = gsap.getProperty(layerRef.current, "autoAlpha") === 1;
    if (isVisible) {
      gsap.to(layerRef.current, { autoAlpha: 0, y: 20, duration: 0.5 });
    } else {
      closeAllLayers(layersRefs);
      gsap.to(layerRef.current, { autoAlpha: 1, y: 0, duration: 0.5 });
    }
  }
};

export const closeAllLayers = (layersRefs) => {
  layersRefs.forEach(ref => {
    if (ref.current) {
      gsap.to(ref.current, { autoAlpha: 0, y: 20, duration: 0.5 });
    }
  });
};




// // animations.js
// import { gsap } from 'gsap';

// export const initializeLayers = () => {
//   gsap.set(".layer", { autoAlpha: 0, y: 20 });
//   gsap.set(".layer1", { autoAlpha: 1 });
// };

// export const toggleLayerVisibility = (layerRef) => {
//   if (layerRef.current) {
//     const layer = layerRef.current;
//     if (gsap.getProperty(layer, "autoAlpha") === 1) {
//       gsap.to(layer, { autoAlpha: 0, y: 20, duration: 0.5 });
//     } else {
//       closeAllLayers();
//       gsap.to(layer, { autoAlpha: 1, y: 0, duration: 0.5 });
//     }
//   }
// };

// export const closeAllLayers = () => {
//   const allLayers = document.querySelectorAll('.layer');
//   allLayers.forEach(layer => {
//     gsap.to(layer, { autoAlpha: 0, y: 20, duration: 0.5 });
//   });
// };