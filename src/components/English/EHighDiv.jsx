import '../../styles/Home.css';
import '../../styles/App.css';
import { colors } from '../../utils/constants';
import { theme } from '../../utils/Theme';
import RoundedPurpleButton from '../common/RoundedPurpleButton';
import { ResizableImageMedium } from '../common/ResizableImage';
import { SubDivRight } from '../common/SubDiv';

export default function EHighDiv() {
    return (
        <SubDivRight
            bgColor={'rgba(108, 99, 255, 0.1)'}
            picSrc={"EHighPic.svg"}
            heading={'Ages 13+'}
            text={'As your child progresses into middle and high school, the Matheng English Program fosters the enhancement of your child\'s reading prowess and the cultivation of critical thinking skills imperative for tackling demanding college coursework. By engaging with sophisticated literary works, your child will develop the capacity to comprehend and analyze multifaceted content within intricate texts.'}
        />
    )
}