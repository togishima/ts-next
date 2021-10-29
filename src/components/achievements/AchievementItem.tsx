import React from "react"
import Link from "next/link"
import AchievementImage from "./AchievementImage";
import { Achievement } from "../../types/achievement"
import styles from '../../../styles/Achievements.module.css';


type Props = {
    achievement: Achievement
}

const AchievementItem: React.VFC<Props> = ({ achievement }) => {
    return (
        <li key={achievement.id}>
            <Link href={`/achievement/${achievement.id}`}>
            <a>
                {achievement.title}
                <br />
                <AchievementImage imageUrl={achievement.imageUrl} />
                <p>
                    {achievement.contents}
                </p>
            </a>
            </Link>
            {achievement.technologies.map((technology: string) => (
                <span key={achievement.id} className={styles.technologies}>{technology}</span>
            ))}
        </li>
    )
}

export default AchievementItem
