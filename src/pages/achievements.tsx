import { client } from "../libs/client";
import AchievementItem from "../components/achievements/AchievementItem";
import { NextPage } from "next";
import { Achievement } from "../types/achievement";

interface Props {
    achievements: Achievement[]
}

const Index: NextPage<Props> = props => {
    return (
        <div>
            <ul>
                {props.achievements.map((achievement:Achievement) => (
                    <AchievementItem key={achievement.id} achievement={achievement} />
                ))}
            </ul>
        </div>
    )
}

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "achievements" });
    const achievements = data.contents.map((content:any) => {
        return {
            id: content.id,
            title: content.title,
            imageUrl: content.image?.url ? content.image.url : null,
            contents: content.contents,
            technologies: content.technologies
        }
    });

    return {
        props:{
            achievements: achievements
        }
    }
};

export default Index