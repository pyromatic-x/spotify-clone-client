import Section from '../common/section';
import { homeSections } from './constants';

const Sections = () => homeSections.map((s) => <Section {...s} key={s.title} />);

export default Sections;
