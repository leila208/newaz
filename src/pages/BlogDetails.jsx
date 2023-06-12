import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function BlogDetails() {
  const { id } = useParams();
  //datani contentsden goturmusem
  const [content, setContent] = useState({});
  useEffect(() => {
    const getInfo = async () => {
      let data = await fetch(`http://localhost:7700/contents/${id}`).then((a) =>
        a.json()
      );
      setContent(data);
    };
    getInfo();
  }, []);
  return (
    <section>
      <div className="k" key={content.id}>
        <h1>{content.name}</h1>
      </div>
      <div className="blogdetail">
        <div className="container">
          <div className="content">
            <div className="content-image">
              <img src={content.image} />
            </div>
            <div className="content-details">
              <p id="brown" className=" t-t">
                {content.type}
              </p>
              <h2 className="t-t">#{content.text}</h2>
              <hr />
              <p className="pcontent">{content.content}</p>
              <p className="italic"> ({content.content?.length}söz)</p>
            </div>
            <h2 className="t-t">#Tövsiyə</h2>
            <hr />
            <p className="pcontent">
              Düşünürəm ki, bu 2022-ci ilin ilk postu olsun. Ola bilsin ki,
              dövrü pozub daha tez-tez yazmağa başlayım. Əslində məzmundan
              narahat olmadan yazmaq üçün darıxıram. 8-10 il əvvəl bloqlar çox
              vacib idi, indi həvəskarlardan başqa oxucu çox deyil. Onsuz da
              evdə dayana bilməyən iki yaşlı körpəsi olan bir körpə var, bu anda
              düşünə biləcəyim şey budur və bundan başqa heç bir şey narahat
              etmir. Beləliklə, vaxt məhduddur. Nəysə, uzatdım, bax, uzun müddət
              yazmayanda belə olur. Narahat olmadan yazmaq gözəldir. Kosmetika
              və makiyaj dünyasından uzaq olmuşam. Yalnız ehtiyacım olanda
              illərdir istifadə etdiyim məhsullardan dərhal yenisini alıram.
              Hətta yeni bir məhsulu sınamaq istəsəm də, mağazalardan yalnız
              dostlarımın tövsiyə etdiyi və ya mənə maraqlı olanı alıram. Onsuz
              da çox vaxtım yoxdur. İllərdir yağlı dərili bir insan olaraq
              nəmləndiricilərə çox əhəmiyyət verməzdim. Əvvəllər, amma həmişə
              parça-parça olur. Dəri yağlı olduqda, onsuz da özünü təmin edir.
              Yaş bitsə də, qırışlar hələ də bazarda yoxdur, şükür, bunu dərimin
              bir az yağlı olması ilə əlaqələndirirəm. Bu yaxınlarda baxdım,
              evdə on yüz milyonluq üz kremini birtəhər bitirmişəm, bəyənmədiyim
              üz kremləri üçün artıq əl-ayaq kremləri düzəldirəm. Clinique
              Turkey onlayn saytını sevirəm. Mağazalarla müqayisədə daha
              müxtəlif məhsullar və yaxşı kampaniyalar var. Bunu alsanız,
              hədiyyə olaraq çoxlu nümunələr var. Clinique Pep-start Hydroblur
              nəmləndiricisi də yeni sayılır, lakin dərimdən razı qalacağımı
              bilmədiyim üçün bu tip kremlər üçün səyahət ölçüsünə üstünlük
              verirəm. Bu ölçüləri qane etsem tam razmerini alacam. Beləliklə,
              məhsullar əlimdə boşa getmir və istifadə etməyəcəyim bir məhsula
              çox büdcə ayırmıram. Clinique saytında bir kampaniya var idi.
              Hydroblur ilə kiçik ölçüdə Clinique hədiyyə dəsti aldım, dodaq
              boyası aldım, onlarla birlikdə bir neçə kiçik ölçülü məhsulla
              birlikdə başqa bir kiçik ölçülü Clinique Pep-Start hədiyyə
              etdilər.
            </p>
          </div>
        </div>
      </div>
      <div className="container sh">
        <h1>Bloqu paylaş</h1>
        <div className="share-icons">
          <div className="share-icon">
            <i className="fa-brands fa-pinterest share"></i>
          </div>
          <div className="share-icon">
            <i className="fa-brands fa-twitter share"></i>
          </div>
          <div className="share-icon">
            <i className="fa-brands fa-facebook share"></i>
          </div>
          <div className="share-icon">
            <i className="fa-brands fa-instagram share"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BlogDetails;
