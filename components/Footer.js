import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';

const ap = new APlayer({container:document.getElementById("aplayer"),fixed:true,listFolded:!0,loop:"all",order:"random",volume:.1,mutex:!0,audio:[{name:"Iris",artist:"Aimer",url:"https://alist.marunet.tk/d/MaruFS/Public/Sources/Music/Japanese/Aimer%20-%20Iris.flac?sign=S2hSR9-JKMQO7wGXpawVvp4mKPAjZaeUQzSbfkvUv_0=:0",cover:"https://www.lyrical-nonsense.com/wp-content/uploads/2021/12/Aimer-Midnight-Sun.jpg"},{name:"あなたに出会わなければ",artist:"Aimer",url:"https://alist.marunet.tk/d/MaruFS/Public/Sources/Music/Japanese/Aimer%20-%20%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AB%E5%87%BA%E4%BC%9A%E3%82%8F%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%20-%2024bit.flac?sign=XEUuDvRRAsEw79XYVVqKy36_SR6-3gV77FBB4OqCJfM=:0",cover:"https://m.media-amazon.com/images/I/81RjIUZXpXL._AC_SY355_.jpg"},{name:"六等星の夜",artist:"Aimer",url:"https://alist.marunet.tk/d/MaruFS/Public/Sources/Music/Japanese/Aimer%20(%E3%82%A8%E3%83%A1)-%E5%85%AD%E7%AD%89%E6%98%9F%E3%81%AE%E5%A4%9C.flac?sign=ntLd2aT787QbrESRw26PPKRhTy8tTGKrOIIRgFUSoHw=:0",cover:"https://c-fa.cdn.smule.com/rs-s92/arr/da/84/7f747310-2a53-4c1c-8840-639697f96f8e.jpg"},{name:"Ref: rain",artist:"Aimer",url:"https://alist.marunet.tk/d/MaruFS/Public/Sources/Music/Japanese/Aimer%20-%20Refrain.flac?sign=P9-eOamWpvxKD_BZNkJLaRzfQnUzcCGgYXV4r5YiS6U=:0",cover:"https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2018/01/refrain_main_web1.jpg"},{name:"茜さす",artist:"Aimer",url:"https://alist.marunet.tk/d/MaruFS/Public/Sources/Music/Japanese/Aimer%20-%20%E8%8C%9C%E3%81%95%E3%81%99%20(%E5%A4%95%E6%99%96).flac?sign=hp51KZKlnFn1XULvbzAhnFKWfIdHaCsShGvV_FZUL4w=:0",cover:"https://c-fa.cdn.smule.com/rs-s64/arr/ea/4d/fc7d077e-5c0b-4a1d-8eab-1b48fec24d2e.jpg"},{name:"スパークル",artist:"幾田りら",url:"https://alist.marunet.tk/d/MaruFS/Public/Sources/Music/Japanese/%E5%B9%BE%E7%94%B0%E3%82%8A%E3%82%89%20-%20%E3%82%B9%E3%83%91%E3%83%BC%E3%82%AF%E3%83%AB.flac?sign=xMHzEAka-xDC8y9l76Ccow1J5klVlOlccJlkriZhNVE=:0",cover:"https://www.uta-net.com/libs/cacheimg.php?p=kashi&f=320000/313165.jpg"}]});

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div id="aplayer"></div>
      </div>
    </footer>
  )
}
