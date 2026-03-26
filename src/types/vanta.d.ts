declare module 'vanta/dist/vanta.net.min' {
  interface VantaOptions {
    el: HTMLElement;
    THREE: object;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    spacing?: number;
  }
  interface VantaEffect {
    destroy: () => void;
  }
  function NET(options: VantaOptions): VantaEffect;
  export default NET;
}
