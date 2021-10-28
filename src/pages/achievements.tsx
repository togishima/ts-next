import Link from "next/link";
import { client } from "../libs/client";
import styles from '../../styles/Achievements.module.css';

export default function Home({ achievements }) {
    return (
        <div>
        <ul>
            {achievements.map((achievement) => (
            <li key={achievement.id}>
                <Link href={`/achievement/${achievement.id}`}>
                <a>{achievement.title}</a>
                </Link>
                <img src={achievement.image.url} alt="" />
                <p>
                    {achievement.contents}
                </p>
                {achievement.technologies.map((technology) => (
                    <span className={styles.technologies}>{technology}</span>
                ))}
            </li>
            ))}
        </ul>
        </div>
    );
} 

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "achievements" });
    return {
        props: {
        achievements: data.contents,
        },
    };
};