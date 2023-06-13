import React , {useContext} from "react";
import { MyContext } from "../../App";
import AboCss from "../About/About.module.css";
import Header from "../Header/Header";
import ima from "../svg/gg-mission_750x.jpg"
import mid1 from "../svg/mid1.jpeg"
import mid2 from "../svg/mid2.jpeg"
import mid3 from "../svg/mid3.jpeg"
import mid4 from "../svg/mid4.jpeg"
import mid5 from "../svg/mid5.jpeg"
import mid6 from "../svg/mid6.jpeg"
export default function About() {
  const {opacity} = useContext(MyContext)
  return (
    <div>
      <Header className={AboCss.head} />
      <section className={AboCss.about} style={{opacity}}>
        <div className={AboCss.first}>
          <div className={AboCss.left}><img src={ima} alt="about" /></div>
          <div className={AboCss.right}>
            <div className={AboCss.values}>Bizim Dəyərimiz</div>
            <div className={AboCss.box}><p>Biz etik cəhətdən qaynaqlanmış, münaqişəsiz, keyfiyyətli zərgərlik məmulatları yaradırıq — qiymət artımı olmadan. Zərif xırda şeylərimiz həmişə davamlı, ekoloji cəhətdən təmiz şəkildə hazırlanır. İstər təkrar emal edilə bilən qablaşdırma, karbonun əvəzlənməsi, istərsə də təkrar emal edilmiş qızıl və brilyantlardan istifadə etməklə, biz sizə həqiqətən davamlı olacaq zərgərlik əşyaları təqdim edərkən planetimizə kömək etmək üçün əlimizdən gələni edirik.</p></div>
          </div>
        </div>
        <div className={AboCss.second}>
          <div className={AboCss.part}>
            <div className={AboCss.top1}><img src={mid1} alt="mid" /></div>
            <div className={AboCss.mid}><strong>Əsl qızıl</strong></div>
            <div className={AboCss.bottom}><p>Davam edəcək zərgərlik məmulatlarına sərmayə qoyacağımıza inandığımız üçün əsl qızıl dizaynlarımıza üstünlük veririk. Biz ən yaxşı keyfiyyəti rəqabətədavamlı qiymətlərlə əldə edirik ki, siz uzun müddətli xəzinə etmək üçün parçalara investisiya edə biləsiniz.</p></div>
          </div>
          <div className={AboCss.part}>
            <div className={AboCss.top2}><img src={mid2} alt="mid" /></div>
            <div className={AboCss.mid}><strong>Etik Mənbə</strong></div>
            <div className={AboCss.bottom}><p>Davam edəcək zərgərlik məmulatlarına sərmayə qoyacağımıza inandığımız üçün əsl qızıl dizaynlarımıza üstünlük veririk. Biz ən yaxşı keyfiyyəti rəqabətədavamlı qiymətlərlə əldə edirik ki, siz uzun müddətli xəzinə etmək üçün parçalara investisiya edə biləsiniz.</p></div>
          </div>
          <div className={AboCss.part}>
            <div className={AboCss.top3}><img src={mid3} alt="mid" /></div>
            <div className={AboCss.mid}><strong>Münasib qiymətə</strong></div>
            <div className={AboCss.bottom}><p>Davam edəcək zərgərlik məmulatlarına sərmayə qoyacağımıza inandığımız üçün əsl qızıl dizaynlarımıza üstünlük veririk. Biz ən yaxşı keyfiyyəti rəqabətədavamlı qiymətlərlə əldə edirik ki, siz uzun müddətli xəzinə etmək üçün parçalara investisiya edə biləsiniz.</p></div>
          </div>
          <div className={AboCss.part}>
            <div className={AboCss.top4}><img src={mid4} alt="mid" /></div>
            <div className={AboCss.mid}><strong>Qadınlar Üçün Qadın tərəfindən</strong></div>
            <div className={AboCss.bottom}><p>Davam edəcək zərgərlik məmulatlarına sərmayə qoyacağımıza inandığımız üçün əsl qızıl dizaynlarımıza üstünlük veririk. Biz ən yaxşı keyfiyyəti rəqabətədavamlı qiymətlərlə əldə edirik ki, siz uzun müddətli xəzinə etmək üçün parçalara investisiya edə biləsiniz.</p></div>
          </div>
          <div className={AboCss.part}>
            <div className={AboCss.top5}><img src={mid5} alt="mid" /></div>
            <div className={AboCss.mid}><strong>Bakıda dizayn olunub</strong></div>
            <div className={AboCss.bottom}><p>Davam edəcək zərgərlik məmulatlarına sərmayə qoyacağımıza inandığımız üçün əsl qızıl dizaynlarımıza üstünlük veririk. Biz ən yaxşı keyfiyyəti rəqabətədavamlı qiymətlərlə əldə edirik ki, siz uzun müddətli xəzinə etmək üçün parçalara investisiya edə biləsiniz.</p></div>
          </div>
          <div className={AboCss.part}>
            <div className={AboCss.top6}><img src={mid6} alt="mid" /></div>
            <div className={AboCss.mid}><strong>Yenilənəbilən</strong></div>
            <div className={AboCss.bottom}><p>Davam edəcək zərgərlik məmulatlarına sərmayə qoyacağımıza inandığımız üçün əsl qızıl dizaynlarımıza üstünlük veririk. Biz ən yaxşı keyfiyyəti rəqabətədavamlı qiymətlərlə əldə edirik ki, siz uzun müddətli xəzinə etmək üçün parçalara investisiya edə biləsiniz</p>.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
