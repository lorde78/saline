import Accordion from "~/kits/accordion";
import ProfessorInfos from '~/kits/professorInfos';

export default function Professor_profile() {
    return (
        <div className="professor-page">
            <ProfessorInfos src='/assets/images/1000x1500-pour-site14.png'/>
            <Accordion title="Les formations" content="Content 1" picto="ri-book-mark-line" />
            <Accordion title="Les interviews" content="Content 2" picto="ri-book-mark-line" />
            <p className="professor-biographie"></p>
        </div>
    )
}