import styles from 'styles/profile.module.css'
import Image from 'next/image'
// import icon from 'images/icon.jpg'
const icon = {
  src: 'https://images.microcms-assets.io/assets/6c9bebd79a7b4ab4acd16979e24f5db0/e14dec1bc8254401a6fd850d9785b24c/icon.jpg',
  width: 360,
  height: 360,
  blurDataURL: 'data:image/jpeg;base64'
}

const profile = () => {
  return (
    <div className={styles.profile}>
      <h2>Profile</h2>
      <div className={styles.icon}>
        <Image src={icon.src} alt="アイコン画像" layout="responsive" width={icon.width} height={icon.height} blurDataURL={icon.blurDataURL} />
      </div>
      <div className={styles.myName}>Take</div>
      <p>
        新卒でIT企業に未経験で就職。Javaの研修などを6か月行ったのち、金融業界のシステム開発の保守を約1年半経験。現在は、フロントエンドの技術に興味があるため2022年で前職を退職し、就職活動中。
      </p>
    </div>
  )
}

export default profile
