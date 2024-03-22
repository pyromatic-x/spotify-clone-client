import Section from '../common/section';
import { homeSections } from './constants';

const Sections = () => homeSections.map((s, i) => <Section {...s} key={'home-section-' + i} />);

export default Sections;
