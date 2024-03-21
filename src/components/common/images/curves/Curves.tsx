import { CurvesSVGContainer } from './styled';

const CurveOne = ({ color, loaded, size }: { color: string; loaded: boolean; size: number }) => (
  <CurvesSVGContainer accent={color} loaded={loaded}>
    <svg version="1.1" viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <path
        className="st0"
        d="M-3.2,32.11c4.78-1.73,8.71-5.69,10.39-10.5c0.88-2.52,1.17-5.22,2.19-7.68C11,10,14.53,6.9,18.65,5.81
	c3.9-1.03,8.02-0.33,12.05-0.35c5.55-0.03,11.09-1.47,15.95-4.16c1.55-0.85,3.07-1.87,4.04-3.35c1.26-1.91,1.43-4.42,0.69-6.59
	s-2.3-3.99-4.17-5.3c-3.23-2.26-7.26-3.04-11.19-3.45c-6.72-0.72-13.54-0.55-20.22,0.49c-5.62,0.88-11.21,2.4-16.16,5.2
	c-2.78,1.57-5.39,3.59-7.08,6.29c-2.36,3.78-2.68,8.51-2.12,12.92s1.92,8.69,2.7,13.08C-6.18,24.39-5.83,28.55-3.2,32.11z"
      />
      <path
        className="st0"
        d="M-5.4,67.46c5.32-9.68,15.61-16.08,26.48-18.07c2.78-0.51,5.7-0.75,8.38,0.14c2.95,0.97,6.12,3.38,7.92,4.84
	c3.15,2.55,9.5,7.79,16.19,8.63c6.82,0.85,8.25-0.17,14.72-2.51c7.92-2.87,12.74-11.63,20.84-13.95c0.06,9.4,0.12,18.79,0.18,28.19
	c0.02,3.29-0.05,6.88-2.12,9.45c-1.41,1.76-3.56,2.76-5.68,3.54c-11.17,4.11-23.4,3.75-35.29,4.23
	c-12.86,0.52-25.81,2.09-38.55,0.24c-2.94-0.43-6.01-1.11-8.19-3.13c-2.73-2.52-3.43-6.53-3.56-10.24
	C-4.23,75.1-3.97,71.26-5.4,67.46z"
      />
    </svg>
  </CurvesSVGContainer>
);

export { CurveOne };