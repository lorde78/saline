import "~/styles/graduations.css";

type Props = {
    lessonData: any[];
};

export default function LessonsFromProf({ lessonData }: Props) {
    return (
        <div className="graduations">
            <div className="graduations_container">

                {typeof lessonData !== 'undefined' ? (
                    lessonData.map((video, i) => {
                        return video.lessons.map((lesson: any, i: number) => {
                            return (
                                <div key={i} className="graduation">
                                    <figure className="graduation-pic">
                                        <img
                                            src={lesson.bannerPicture}
                                            alt={lesson.title}
                                        />
                                    </figure>
                                    <div className="graduation_text">
                                        <p className="graduation_title">{lesson.title}</p>
                                        <p className="graduation_professor">{lesson.professor}</p>
                                    </div>
                                </div>
                            );
                        })
                    })
                ) : (
                    <div className="graduation_text">
                        <p className="graduation_professor">Ce professeur n'apparaît encore dans aucun cours.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
