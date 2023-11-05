import '../../styles/Home.css';
import '../../styles/App.css';
import { colors } from '../../utils/constants';
import { theme } from '../../utils/Theme';
import RoundedPurpleButton from '../common/RoundedPurpleButton';
import { ResizableImageMedium } from '../common/ResizableImage';
import { SubDivRight } from '../common/SubDiv';

export default function MHighDiv() {
    return (
        <SubDivRight
            bgColor={'rgba(108, 99, 255, 0.1)'}
            picSrc={"HighPic.svg"}
            heading={'Ages 13+'}
            text={'As your child progresses through middle and high school, the Matheng Math Program will fortify and enhance their logical reasoning skills, equipping them with essential tools for academic excellence and success in challenging university-level courses. By delving into subjects ranging from algebraic equations to trigonometry, calculus, and statistics, your child will have the opportunity to elevate their proficiency in advanced mathematical concepts.'}
        />
    )
}