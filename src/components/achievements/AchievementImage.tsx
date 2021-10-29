import Image from "next/image";

type Props = {
    imageUrl: string | null
}

const AchievementImage: React.VFC<Props> = ({ imageUrl }) => {
    if (imageUrl === null) {
        return null
    }

    return (
        <Image src={imageUrl} height="240px" width="360px" />
    )
}

export default AchievementImage