import { HOME_SECTIONS } from '../../api/mock/home';
import Section from '../common/section';

const Sections = () => HOME_SECTIONS.map((t) => <Section {...t} key={t.title} />);

export default Sections;
